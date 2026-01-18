import { supabase } from '../lib/supabase';
import type {
  Transaction,
  TransactionInsert,
  TransactionUpdate,
} from '../types/database';

/**
 * Serviço de transações
 */
export const transactionService = {
  /**
   * Lista todas as transações do usuário
   */
  async list(userId: string, filters?: {
    type?: 'INCOME' | 'EXPENSE';
    category_id?: string;
    account_id?: string;
    member_id?: string;
    status?: 'PENDING' | 'COMPLETED';
    start_date?: string;
    end_date?: string;
  }) {
    let query = supabase
      .from('transactions')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false });

    if (filters?.type) {
      query = query.eq('type', filters.type);
    }

    if (filters?.category_id) {
      query = query.eq('category_id', filters.category_id);
    }

    if (filters?.account_id) {
      query = query.eq('account_id', filters.account_id);
    }

    if (filters?.member_id) {
      query = query.eq('member_id', filters.member_id);
    }

    if (filters?.status) {
      query = query.eq('status', filters.status);
    }

    if (filters?.start_date) {
      query = query.gte('date', filters.start_date);
    }

    if (filters?.end_date) {
      query = query.lte('date', filters.end_date);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return data as Transaction[];
  },

  /**
   * Obtém uma transação por ID
   */
  async getById(id: string): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Transaction;
  },

  /**
   * Cria uma nova transação
   */
  async create(transaction: TransactionInsert): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .insert(transaction)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Transaction;
  },

  /**
   * Cria múltiplas transações (parcelas)
   */
  async createInstallments(
    userId: string,
    baseTransaction: Omit<TransactionInsert, 'installment_number' | 'total_installments' | 'parent_transaction_id'>,
    totalInstallments: number
  ): Promise<Transaction[]> {
    const transactions: TransactionInsert[] = [];
    const baseDate = new Date(baseTransaction.date);

    for (let i = 1; i <= totalInstallments; i++) {
      const installmentDate = new Date(baseDate);
      installmentDate.setMonth(installmentDate.getMonth() + (i - 1));

      transactions.push({
        ...baseTransaction,
        user_id: userId,
        installment_number: i,
        total_installments: totalInstallments,
        parent_transaction_id: i === 1 ? null : undefined, // Será atualizado após criar a primeira
        date: installmentDate.toISOString().split('T')[0],
      });
    }

    // Criar primeira parcela
    const { data: firstTransaction, error: firstError } = await supabase
      .from('transactions')
      .insert(transactions[0])
      .select()
      .single();

    if (firstError) {
      throw new Error(firstError.message);
    }

    // Criar parcelas restantes com parent_transaction_id
    const remainingTransactions = transactions.slice(1).map(t => ({
      ...t,
      parent_transaction_id: firstTransaction.id,
    }));

    const { data: remainingData, error: remainingError } = await supabase
      .from('transactions')
      .insert(remainingTransactions)
      .select();

    if (remainingError) {
      throw new Error(remainingError.message);
    }

    return [firstTransaction, ...(remainingData as Transaction[])];
  },

  /**
   * Atualiza uma transação
   */
  async update(id: string, updates: TransactionUpdate): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Transaction;
  },

  /**
   * Deleta uma transação
   */
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('transactions')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  },

  /**
   * Deleta todas as parcelas de uma transação
   */
  async deleteInstallments(parentTransactionId: string): Promise<void> {
    const { error } = await supabase
      .from('transactions')
      .delete()
      .or(`id.eq.${parentTransactionId},parent_transaction_id.eq.${parentTransactionId}`);

    if (error) {
      throw new Error(error.message);
    }
  },
};
