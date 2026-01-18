-- ============================================
-- mycash+ v2.0 - Initial Schema
-- ============================================
-- Baseado no schema Prisma fornecido
-- Criado para Supabase PostgreSQL

-- ============================================
-- 🔧 ENUMS
-- ============================================

CREATE TYPE transaction_type AS ENUM ('INCOME', 'EXPENSE');
CREATE TYPE account_type AS ENUM ('CHECKING', 'SAVINGS', 'CREDIT_CARD');
CREATE TYPE recurrence_frequency AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');
CREATE TYPE transaction_status AS ENUM ('PENDING', 'COMPLETED');

-- ============================================
-- 👤 USUÁRIOS E AUTENTICAÇÃO
-- ============================================
-- User representa a CONTA autenticada (login único)
-- Um User pode ter múltiplos FamilyMembers associados

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 👨‍👩‍👧‍👦 MEMBROS DA FAMÍLIA
-- ============================================

CREATE TABLE family_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  role TEXT NOT NULL, -- "Pai", "Mãe", "Filho", "Filha", "Avô", "Avó", etc
  avatar_url TEXT,
  monthly_income DECIMAL(12, 2) DEFAULT 0,
  color TEXT DEFAULT '#3247FF', -- Cor do avatar no sistema
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_family_members_user_id ON family_members(user_id);

-- ============================================
-- 🏷️ CATEGORIAS
-- ============================================

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT DEFAULT '📌',
  type transaction_type NOT NULL,
  color TEXT DEFAULT '#3247FF',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_categories_user_id_type ON categories(user_id, type);

-- ============================================
-- 💳 CONTAS E CARTÕES (UNIFICADO)
-- ============================================

CREATE TABLE accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type account_type NOT NULL,
  name TEXT NOT NULL, -- Nome/Apelido (ex: "Nubank", "Itaú Mastercard")
  bank TEXT NOT NULL, -- Banco/Instituição (ex: "Nubank", "Itaú")
  last_digits TEXT, -- 4 últimos dígitos (OPCIONAL)
  holder_id UUID NOT NULL REFERENCES family_members(id) ON DELETE RESTRICT,
  
  -- Campos para CONTA CORRENTE E POUPANÇA
  balance DECIMAL(12, 2) DEFAULT 0, -- Saldo atual
  
  -- Campos para CARTÃO DE CRÉDITO
  credit_limit DECIMAL(12, 2), -- Limite total
  current_bill DECIMAL(12, 2) DEFAULT 0, -- Fatura atual
  due_day INT CHECK (due_day >= 1 AND due_day <= 31), -- Dia do vencimento (1-31)
  closing_day INT CHECK (closing_day >= 1 AND closing_day <= 31), -- Dia do fechamento (1-31)
  theme TEXT DEFAULT 'black', -- "black", "lime", "white"
  logo_url TEXT, -- Logo do banco (opcional)
  
  -- Metadata
  color TEXT DEFAULT '#3247FF',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_accounts_user_id_type ON accounts(user_id, type);
CREATE INDEX idx_accounts_holder_id ON accounts(holder_id);

-- ============================================
-- 💫 DESPESAS RECORRENTES (TEMPLATE)
-- ============================================

CREATE TABLE recurring_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type transaction_type DEFAULT 'EXPENSE',
  amount DECIMAL(12, 2) NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  account_id UUID REFERENCES accounts(id) ON DELETE SET NULL,
  member_id UUID REFERENCES family_members(id) ON DELETE SET NULL,
  
  -- Configuração de recorrência
  frequency recurrence_frequency NOT NULL,
  day_of_month INT CHECK (day_of_month >= 1 AND day_of_month <= 31),
  day_of_week INT CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0-6 (para recorrência semanal)
  start_date DATE NOT NULL,
  end_date DATE, -- Opcional
  
  -- Metadata
  is_active BOOLEAN DEFAULT true,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_recurring_transactions_user_id_active ON recurring_transactions(user_id, is_active);
CREATE INDEX idx_recurring_transactions_category_id ON recurring_transactions(category_id);
CREATE INDEX idx_recurring_transactions_account_id ON recurring_transactions(account_id);

-- ============================================
-- 💰 TRANSAÇÕES
-- ============================================

CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type transaction_type NOT NULL,
  amount DECIMAL(12, 2) NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  account_id UUID REFERENCES accounts(id) ON DELETE SET NULL,
  member_id UUID REFERENCES family_members(id) ON DELETE SET NULL, -- Membro responsável (opcional)
  
  -- Parcelamento (Máximo 12 parcelas)
  installment_number INT CHECK (installment_number >= 1 AND installment_number <= 12), -- Parcela atual (1, 2, 3...)
  total_installments INT DEFAULT 1 CHECK (total_installments >= 1 AND total_installments <= 12), -- Total de parcelas (1x até 12x)
  parent_transaction_id UUID REFERENCES transactions(id) ON DELETE CASCADE, -- ID da transação pai (primeira parcela)
  
  -- Recorrência
  is_recurring BOOLEAN DEFAULT false,
  recurring_transaction_id UUID REFERENCES recurring_transactions(id) ON DELETE SET NULL, -- ID do template recorrente
  
  -- Status
  status transaction_status DEFAULT 'COMPLETED',
  notes TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_transactions_user_id_date ON transactions(user_id, date);
CREATE INDEX idx_transactions_category_id ON transactions(category_id);
CREATE INDEX idx_transactions_account_id ON transactions(account_id);
CREATE INDEX idx_transactions_member_id ON transactions(member_id);
CREATE INDEX idx_transactions_recurring_transaction_id ON transactions(recurring_transaction_id);
CREATE INDEX idx_transactions_parent_transaction_id ON transactions(parent_transaction_id);
CREATE INDEX idx_transactions_status ON transactions(status);

-- ============================================
-- 🔧 TRIGGERS PARA UPDATED_AT
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_family_members_updated_at BEFORE UPDATE ON family_members
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_accounts_updated_at BEFORE UPDATE ON accounts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_transactions_updated_at BEFORE UPDATE ON transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_recurring_transactions_updated_at BEFORE UPDATE ON recurring_transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 🔧 TRIGGER PARA CRIAR USER AUTOMATICAMENTE
-- ============================================
-- Cria registro em users quando um usuário se registra no Supabase Auth

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Nota: Este trigger será criado após habilitar Supabase Auth
-- CREATE TRIGGER on_auth_user_created
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE FUNCTION handle_new_user();
