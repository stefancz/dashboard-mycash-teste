// ============================================
// mycash+ v2.0 - Database Types
// ============================================
// Tipos TypeScript baseados no schema Prisma/Supabase

export type TransactionType = 'INCOME' | 'EXPENSE';
export type AccountType = 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
export type RecurrenceFrequency = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
export type TransactionStatus = 'PENDING' | 'COMPLETED';

// ============================================
// 👤 USER
// ============================================

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserInsert {
  email: string;
  name: string;
  avatar_url?: string | null;
}

export interface UserUpdate {
  email?: string;
  name?: string;
  avatar_url?: string | null;
}

// ============================================
// 👨‍👩‍👧‍👦 FAMILY MEMBER
// ============================================

export interface FamilyMember {
  id: string;
  user_id: string;
  name: string;
  role: string;
  avatar_url: string | null;
  monthly_income: number;
  color: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface FamilyMemberInsert {
  user_id: string;
  name: string;
  role: string;
  avatar_url?: string | null;
  monthly_income?: number;
  color?: string;
  is_active?: boolean;
}

export interface FamilyMemberUpdate {
  name?: string;
  role?: string;
  avatar_url?: string | null;
  monthly_income?: number;
  color?: string;
  is_active?: boolean;
}

// ============================================
// 🏷️ CATEGORY
// ============================================

export interface Category {
  id: string;
  user_id: string;
  name: string;
  icon: string;
  type: TransactionType;
  color: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CategoryInsert {
  user_id: string;
  name: string;
  icon?: string;
  type: TransactionType;
  color?: string;
  is_active?: boolean;
}

export interface CategoryUpdate {
  name?: string;
  icon?: string;
  type?: TransactionType;
  color?: string;
  is_active?: boolean;
}

// ============================================
// 💳 ACCOUNT
// ============================================

export interface Account {
  id: string;
  user_id: string;
  type: AccountType;
  name: string;
  bank: string;
  last_digits: string | null;
  holder_id: string;
  balance: number;
  credit_limit: number | null;
  current_bill: number;
  due_day: number | null;
  closing_day: number | null;
  theme: string | null;
  logo_url: string | null;
  color: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AccountInsert {
  user_id: string;
  type: AccountType;
  name: string;
  bank: string;
  last_digits?: string | null;
  holder_id: string;
  balance?: number;
  credit_limit?: number | null;
  current_bill?: number;
  due_day?: number | null;
  closing_day?: number | null;
  theme?: string | null;
  logo_url?: string | null;
  color?: string;
  is_active?: boolean;
}

export interface AccountUpdate {
  name?: string;
  bank?: string;
  last_digits?: string | null;
  holder_id?: string;
  balance?: number;
  credit_limit?: number | null;
  current_bill?: number;
  due_day?: number | null;
  closing_day?: number | null;
  theme?: string | null;
  logo_url?: string | null;
  color?: string;
  is_active?: boolean;
}

// ============================================
// 💰 TRANSACTION
// ============================================

export interface Transaction {
  id: string;
  user_id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
  category_id: string | null;
  account_id: string | null;
  member_id: string | null;
  installment_number: number | null;
  total_installments: number;
  parent_transaction_id: string | null;
  is_recurring: boolean;
  recurring_transaction_id: string | null;
  status: TransactionStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface TransactionInsert {
  user_id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
  category_id?: string | null;
  account_id?: string | null;
  member_id?: string | null;
  installment_number?: number | null;
  total_installments?: number;
  parent_transaction_id?: string | null;
  is_recurring?: boolean;
  recurring_transaction_id?: string | null;
  status?: TransactionStatus;
  notes?: string | null;
}

export interface TransactionUpdate {
  type?: TransactionType;
  amount?: number;
  description?: string;
  date?: string;
  category_id?: string | null;
  account_id?: string | null;
  member_id?: string | null;
  installment_number?: number | null;
  total_installments?: number;
  parent_transaction_id?: string | null;
  is_recurring?: boolean;
  recurring_transaction_id?: string | null;
  status?: TransactionStatus;
  notes?: string | null;
}

// ============================================
// 💫 RECURRING TRANSACTION
// ============================================

export interface RecurringTransaction {
  id: string;
  user_id: string;
  type: TransactionType;
  amount: number;
  description: string;
  category_id: string | null;
  account_id: string | null;
  member_id: string | null;
  frequency: RecurrenceFrequency;
  day_of_month: number | null;
  day_of_week: number | null;
  start_date: string;
  end_date: string | null;
  is_active: boolean;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface RecurringTransactionInsert {
  user_id: string;
  type?: TransactionType;
  amount: number;
  description: string;
  category_id?: string | null;
  account_id?: string | null;
  member_id?: string | null;
  frequency: RecurrenceFrequency;
  day_of_month?: number | null;
  day_of_week?: number | null;
  start_date: string;
  end_date?: string | null;
  is_active?: boolean;
  notes?: string | null;
}

export interface RecurringTransactionUpdate {
  type?: TransactionType;
  amount?: number;
  description?: string;
  category_id?: string | null;
  account_id?: string | null;
  member_id?: string | null;
  frequency?: RecurrenceFrequency;
  day_of_month?: number | null;
  day_of_week?: number | null;
  start_date?: string;
  end_date?: string | null;
  is_active?: boolean;
  notes?: string | null;
}
