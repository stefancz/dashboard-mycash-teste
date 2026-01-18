-- ============================================
-- mycash+ v2.0 - Row Level Security (RLS)
-- ============================================
-- TODOS os usuários autenticados têm acesso TOTAL a todas as tabelas
-- Política: user_id = auth.uid()

-- ============================================
-- 👤 USERS
-- ============================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- SELECT: Usuário autenticado pode ver seu próprio registro
CREATE POLICY "Users can view own record"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- UPDATE: Usuário autenticado pode atualizar seu próprio registro
CREATE POLICY "Users can update own record"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- INSERT: Trigger automático (via função handle_new_user)
CREATE POLICY "Users can insert own record"
  ON users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ============================================
-- 👨‍👩‍👧‍👦 FAMILY MEMBERS
-- ============================================

ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;

-- SELECT: Usuário autenticado pode ver todos os membros da família
CREATE POLICY "Users can view own family members"
  ON family_members FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Usuário autenticado pode criar membros
CREATE POLICY "Users can insert own family members"
  ON family_members FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Usuário autenticado pode atualizar membros
CREATE POLICY "Users can update own family members"
  ON family_members FOR UPDATE
  USING (auth.uid() = user_id);

-- DELETE: Usuário autenticado pode deletar membros
CREATE POLICY "Users can delete own family members"
  ON family_members FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 🏷️ CATEGORIES
-- ============================================

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- SELECT: Usuário autenticado pode ver todas as categorias
CREATE POLICY "Users can view own categories"
  ON categories FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Usuário autenticado pode criar categorias
CREATE POLICY "Users can insert own categories"
  ON categories FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Usuário autenticado pode atualizar categorias
CREATE POLICY "Users can update own categories"
  ON categories FOR UPDATE
  USING (auth.uid() = user_id);

-- DELETE: Usuário autenticado pode deletar categorias
CREATE POLICY "Users can delete own categories"
  ON categories FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 💳 ACCOUNTS
-- ============================================

ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

-- SELECT: Usuário autenticado pode ver todas as contas
CREATE POLICY "Users can view own accounts"
  ON accounts FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Usuário autenticado pode criar contas
CREATE POLICY "Users can insert own accounts"
  ON accounts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Usuário autenticado pode atualizar contas
CREATE POLICY "Users can update own accounts"
  ON accounts FOR UPDATE
  USING (auth.uid() = user_id);

-- DELETE: Usuário autenticado pode deletar contas
CREATE POLICY "Users can delete own accounts"
  ON accounts FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 💰 TRANSACTIONS
-- ============================================

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- SELECT: Usuário autenticado pode ver todas as transações
CREATE POLICY "Users can view own transactions"
  ON transactions FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Usuário autenticado pode criar transações
CREATE POLICY "Users can insert own transactions"
  ON transactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Usuário autenticado pode atualizar transações
CREATE POLICY "Users can update own transactions"
  ON transactions FOR UPDATE
  USING (auth.uid() = user_id);

-- DELETE: Usuário autenticado pode deletar transações
CREATE POLICY "Users can delete own transactions"
  ON transactions FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 💫 RECURRING TRANSACTIONS
-- ============================================

ALTER TABLE recurring_transactions ENABLE ROW LEVEL SECURITY;

-- SELECT: Usuário autenticado pode ver todos os templates
CREATE POLICY "Users can view own recurring transactions"
  ON recurring_transactions FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Usuário autenticado pode criar templates
CREATE POLICY "Users can insert own recurring transactions"
  ON recurring_transactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Usuário autenticado pode atualizar templates
CREATE POLICY "Users can update own recurring transactions"
  ON recurring_transactions FOR UPDATE
  USING (auth.uid() = user_id);

-- DELETE: Usuário autenticado pode deletar templates
CREATE POLICY "Users can delete own recurring transactions"
  ON recurring_transactions FOR DELETE
  USING (auth.uid() = user_id);
