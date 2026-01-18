-- ============================================
-- mycash+ v2.0 - Functions SQL
-- ============================================

-- ============================================
-- 🔧 VALIDATE TRANSACTION INSTALLMENTS
-- ============================================
-- Valida regras de parcelamento:
-- - Se is_recurring = true, total_installments DEVE ser 1
-- - total_installments entre 1 e 12

CREATE OR REPLACE FUNCTION validate_transaction_installments()
RETURNS TRIGGER AS $$
BEGIN
  -- REGRA: Se is_recurring = true, total_installments DEVE ser 1
  IF NEW.is_recurring = true AND NEW.total_installments != 1 THEN
    RAISE EXCEPTION 'Transação recorrente não pode ser parcelada. total_installments deve ser 1 quando is_recurring = true';
  END IF;
  
  -- REGRA: total_installments entre 1 e 12
  IF NEW.total_installments < 1 OR NEW.total_installments > 12 THEN
    RAISE EXCEPTION 'total_installments deve estar entre 1 e 12';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER validate_transaction_installments_trigger
  BEFORE INSERT OR UPDATE ON transactions
  FOR EACH ROW
  EXECUTE FUNCTION validate_transaction_installments();

-- ============================================
-- 💰 CALCULATE ACCOUNT BALANCE
-- ============================================
-- Calcula saldo de conta baseado em transações
-- Atualiza balance automaticamente quando transações são criadas/atualizadas/deletadas

CREATE OR REPLACE FUNCTION calculate_account_balance()
RETURNS TRIGGER AS $$
DECLARE
  account_type_val account_type;
  new_balance DECIMAL(12, 2);
BEGIN
  -- Obter tipo da conta
  SELECT type INTO account_type_val
  FROM accounts
  WHERE id = COALESCE(NEW.account_id, OLD.account_id);
  
  -- Apenas para CHECKING e SAVINGS
  IF account_type_val IN ('CHECKING', 'SAVINGS') THEN
    -- Calcular novo saldo
    SELECT COALESCE(SUM(
      CASE 
        WHEN type = 'INCOME' THEN amount
        WHEN type = 'EXPENSE' THEN -amount
        ELSE 0
      END
    ), 0) INTO new_balance
    FROM transactions
    WHERE account_id = COALESCE(NEW.account_id, OLD.account_id)
      AND status = 'COMPLETED';
    
    -- Atualizar saldo
    UPDATE accounts
    SET balance = new_balance
    WHERE id = COALESCE(NEW.account_id, OLD.account_id);
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER calculate_account_balance_trigger
  AFTER INSERT OR UPDATE OR DELETE ON transactions
  FOR EACH ROW
  EXECUTE FUNCTION calculate_account_balance();

-- ============================================
-- 💳 CALCULATE CREDIT CARD BILL
-- ============================================
-- Calcula fatura atual de cartão de crédito
-- Soma todas as despesas (EXPENSE) com status COMPLETED

CREATE OR REPLACE FUNCTION calculate_credit_card_bill()
RETURNS TRIGGER AS $$
DECLARE
  account_type_val account_type;
  new_bill DECIMAL(12, 2);
BEGIN
  -- Obter tipo da conta
  SELECT type INTO account_type_val
  FROM accounts
  WHERE id = COALESCE(NEW.account_id, OLD.account_id);
  
  -- Apenas para CREDIT_CARD
  IF account_type_val = 'CREDIT_CARD' THEN
    -- Calcular nova fatura
    SELECT COALESCE(SUM(amount), 0) INTO new_bill
    FROM transactions
    WHERE account_id = COALESCE(NEW.account_id, OLD.account_id)
      AND type = 'EXPENSE'
      AND status = 'COMPLETED';
    
    -- Atualizar fatura
    UPDATE accounts
    SET current_bill = new_bill
    WHERE id = COALESCE(NEW.account_id, OLD.account_id);
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER calculate_credit_card_bill_trigger
  AFTER INSERT OR UPDATE OR DELETE ON transactions
  FOR EACH ROW
  EXECUTE FUNCTION calculate_credit_card_bill();

-- ============================================
-- 🔁 GENERATE RECURRING TRANSACTIONS
-- ============================================
-- Gera transações baseadas em templates recorrentes
-- Execução: Via cron job ou chamada manual

CREATE OR REPLACE FUNCTION generate_recurring_transactions()
RETURNS INTEGER AS $$
DECLARE
  template_record RECORD;
  generated_count INTEGER := 0;
  next_date DATE;
  transaction_date DATE;
BEGIN
  -- Iterar sobre templates ativos
  FOR template_record IN
    SELECT *
    FROM recurring_transactions
    WHERE is_active = true
      AND (end_date IS NULL OR end_date >= CURRENT_DATE)
      AND start_date <= CURRENT_DATE
  LOOP
    -- Calcular próxima data baseada na frequência
    CASE template_record.frequency
      WHEN 'DAILY' THEN
        next_date := CURRENT_DATE;
      WHEN 'WEEKLY' THEN
        next_date := CURRENT_DATE + (7 - EXTRACT(DOW FROM CURRENT_DATE)::INTEGER + template_record.day_of_week) % 7;
      WHEN 'MONTHLY' THEN
        next_date := DATE_TRUNC('month', CURRENT_DATE) + (template_record.day_of_month - 1) * INTERVAL '1 day';
        IF next_date < CURRENT_DATE THEN
          next_date := next_date + INTERVAL '1 month';
        END IF;
      WHEN 'YEARLY' THEN
        next_date := DATE_TRUNC('year', CURRENT_DATE) + (template_record.day_of_month - 1) * INTERVAL '1 day';
        IF next_date < CURRENT_DATE THEN
          next_date := next_date + INTERVAL '1 year';
        END IF;
    END CASE;
    
    -- Verificar se já existe transação para esta data
    IF NOT EXISTS (
      SELECT 1
      FROM transactions
      WHERE recurring_transaction_id = template_record.id
        AND date = next_date
    ) THEN
      -- Criar transação
      INSERT INTO transactions (
        user_id,
        type,
        amount,
        description,
        date,
        category_id,
        account_id,
        member_id,
        is_recurring,
        recurring_transaction_id,
        status,
        notes
      ) VALUES (
        template_record.user_id,
        template_record.type,
        template_record.amount,
        template_record.description,
        next_date,
        template_record.category_id,
        template_record.account_id,
        template_record.member_id,
        true,
        template_record.id,
        'PENDING',
        template_record.notes
      );
      
      generated_count := generated_count + 1;
    END IF;
  END LOOP;
  
  RETURN generated_count;
END;
$$ LANGUAGE plpgsql;
