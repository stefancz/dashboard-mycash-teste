# 📋 Plano de Integração Supabase - mycash+ v2.0

## 🎯 Objetivo
Remover todos os dados mock e integrar completamente com Supabase, criando um sistema funcional e real.

---

## 📊 Estrutura do Banco de Dados

### Tabelas Principais

1. **users** - Contas autenticadas (Supabase Auth integrado)
2. **family_members** - Membros da família
3. **categories** - Categorias de transações
4. **accounts** - Contas bancárias e cartões (unificado)
5. **transactions** - Transações financeiras
6. **recurring_transactions** - Templates de transações recorrentes

### Enums

- `TransactionType`: INCOME, EXPENSE
- `AccountType`: CHECKING, SAVINGS, CREDIT_CARD
- `RecurrenceFrequency`: DAILY, WEEKLY, MONTHLY, YEARLY
- `TransactionStatus`: PENDING, COMPLETED

---

## 🔐 Autenticação

### Estratégia
- Usar Supabase Auth nativo
- Tabela `users` sincronizada com `auth.users`
- Trigger automático para criar registro em `users` ao se registrar

### Fluxo
1. Registro/Login via Supabase Auth
2. Trigger cria/atualiza registro em `users`
3. Sessão gerenciada pelo Supabase

---

## 🛡️ Row Level Security (RLS)

### Política Geral
**TODOS os usuários autenticados têm acesso TOTAL a todas as tabelas**

### Policies por Tabela

#### users
- SELECT: Usuário autenticado pode ver seu próprio registro
- UPDATE: Usuário autenticado pode atualizar seu próprio registro
- INSERT: Trigger automático (via função)

#### family_members
- SELECT: Usuário autenticado pode ver todos os membros da família (user_id = auth.uid())
- INSERT: Usuário autenticado pode criar membros (user_id = auth.uid())
- UPDATE: Usuário autenticado pode atualizar membros (user_id = auth.uid())
- DELETE: Usuário autenticado pode deletar membros (user_id = auth.uid())

#### categories
- SELECT: Usuário autenticado pode ver todas as categorias (user_id = auth.uid())
- INSERT: Usuário autenticado pode criar categorias (user_id = auth.uid())
- UPDATE: Usuário autenticado pode atualizar categorias (user_id = auth.uid())
- DELETE: Usuário autenticado pode deletar categorias (user_id = auth.uid())

#### accounts
- SELECT: Usuário autenticado pode ver todas as contas (user_id = auth.uid())
- INSERT: Usuário autenticado pode criar contas (user_id = auth.uid())
- UPDATE: Usuário autenticado pode atualizar contas (user_id = auth.uid())
- DELETE: Usuário autenticado pode deletar contas (user_id = auth.uid())

#### transactions
- SELECT: Usuário autenticado pode ver todas as transações (user_id = auth.uid())
- INSERT: Usuário autenticado pode criar transações (user_id = auth.uid())
- UPDATE: Usuário autenticado pode atualizar transações (user_id = auth.uid())
- DELETE: Usuário autenticado pode deletar transações (user_id = auth.uid())

#### recurring_transactions
- SELECT: Usuário autenticado pode ver todos os templates (user_id = auth.uid())
- INSERT: Usuário autenticado pode criar templates (user_id = auth.uid())
- UPDATE: Usuário autenticado pode atualizar templates (user_id = auth.uid())
- DELETE: Usuário autenticado pode deletar templates (user_id = auth.uid())

---

## 📦 Storage Buckets

### 1. `avatars`
- **Público**: Sim
- **Política**: Usuários autenticados podem fazer upload de seus próprios avatares
- **Uso**: Avatares de usuários e membros da família
- **Tamanho máximo**: 5MB
- **Tipos permitidos**: image/jpeg, image/png, image/webp

### 2. `logos`
- **Público**: Sim
- **Política**: Usuários autenticados podem fazer upload de logos de bancos/cartões
- **Uso**: Logos de contas bancárias e cartões
- **Tamanho máximo**: 2MB
- **Tipos permitidos**: image/jpeg, image/png, image/svg+xml, image/webp

### 3. `documents`
- **Público**: Não
- **Política**: Apenas o usuário dono pode acessar
- **Uso**: Comprovantes, recibos, documentos fiscais
- **Tamanho máximo**: 10MB
- **Tipos permitidos**: image/*, application/pdf

---

## ⚙️ Functions SQL

### 1. `handle_new_user()`
**Trigger**: Após INSERT em `auth.users`
**Função**: Cria registro em `users` automaticamente

### 2. `update_user_updated_at()`
**Trigger**: Antes de UPDATE em `users`
**Função**: Atualiza `updated_at` automaticamente

### 3. `generate_recurring_transactions()`
**Função**: Gera transações baseadas em templates recorrentes
**Execução**: Via cron job ou chamada manual

### 4. `calculate_account_balance()`
**Função**: Calcula saldo de conta baseado em transações
**Uso**: Trigger após INSERT/UPDATE/DELETE em transactions

### 5. `validate_transaction_installments()`
**Função**: Valida regras de parcelamento
**Uso**: Trigger antes de INSERT/UPDATE em transactions

---

## 🔧 Serviços e Hooks

### Serviços (src/app/services/)

1. **authService.ts** - Autenticação (login, registro, logout)
2. **userService.ts** - CRUD de usuários
3. **familyMemberService.ts** - CRUD de membros da família
4. **categoryService.ts** - CRUD de categorias
5. **accountService.ts** - CRUD de contas/cartões
6. **transactionService.ts** - CRUD de transações
7. **recurringTransactionService.ts** - CRUD de templates recorrentes
8. **storageService.ts** - Upload/download de arquivos

### Hooks (src/app/hooks/)

1. **useAuth.ts** - Hook de autenticação
2. **useUser.ts** - Hook de usuário
3. **useFamilyMembers.ts** - Hook de membros da família
4. **useCategories.ts** - Hook de categorias
5. **useAccounts.ts** - Hook de contas
6. **useTransactions.ts** - Hook de transações
7. **useRecurringTransactions.ts** - Hook de templates recorrentes
8. **useStorage.ts** - Hook de storage

---

## 📝 Migrações

### Ordem de Criação

1. Criar enums
2. Criar tabela `users`
3. Criar tabela `family_members`
4. Criar tabela `categories`
5. Criar tabela `accounts`
6. Criar tabela `recurring_transactions`
7. Criar tabela `transactions`
8. Criar índices
9. Criar triggers
10. Criar functions
11. Habilitar RLS
12. Criar policies
13. Criar storage buckets
14. Criar storage policies

---

## 🚀 Implementação

### Fase 1: Setup do Banco
- [x] Criar schema SQL
- [ ] Criar migrations
- [ ] Criar RLS policies
- [ ] Criar functions
- [ ] Criar storage buckets

### Fase 2: Serviços
- [ ] Criar serviços Supabase
- [ ] Criar hooks customizados
- [ ] Criar tipos TypeScript

### Fase 3: Integração
- [ ] Remover dados mock
- [ ] Integrar autenticação
- [ ] Integrar CRUD de todas as entidades
- [ ] Integrar storage

### Fase 4: Testes
- [ ] Testar autenticação
- [ ] Testar CRUD completo
- [ ] Testar storage
- [ ] Testar RLS
- [ ] Testar functions

---

## 📋 Checklist Final

- [ ] Banco de dados criado
- [ ] RLS habilitado e configurado
- [ ] Storage buckets criados
- [ ] Functions SQL criadas
- [ ] Serviços TypeScript criados
- [ ] Hooks customizados criados
- [ ] Dados mock removidos
- [ ] Autenticação funcionando
- [ ] CRUD completo funcionando
- [ ] Upload de arquivos funcionando
- [ ] Build passando
- [ ] Testes realizados

---

## 🔗 Arquivos a Criar

### SQL
- `supabase/migrations/001_initial_schema.sql`
- `supabase/migrations/002_rls_policies.sql`
- `supabase/migrations/003_functions.sql`
- `supabase/migrations/004_storage.sql`

### TypeScript
- `src/app/services/authService.ts`
- `src/app/services/userService.ts`
- `src/app/services/familyMemberService.ts`
- `src/app/services/categoryService.ts`
- `src/app/services/accountService.ts`
- `src/app/services/transactionService.ts`
- `src/app/services/recurringTransactionService.ts`
- `src/app/services/storageService.ts`
- `src/app/hooks/useAuth.ts`
- `src/app/hooks/useUser.ts`
- `src/app/hooks/useFamilyMembers.ts`
- `src/app/hooks/useCategories.ts`
- `src/app/hooks/useAccounts.ts`
- `src/app/hooks/useTransactions.ts`
- `src/app/hooks/useRecurringTransactions.ts`
- `src/app/hooks/useStorage.ts`
- `src/app/types/database.ts`

### Configuração
- `.env.example` (template de variáveis)
- `supabase/config.toml` (se necessário)

---

## 📚 Documentação

Todas as funções, serviços e hooks devem ter:
- JSDoc completo
- Exemplos de uso
- Tratamento de erros
- TypeScript types completos
