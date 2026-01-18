import { supabase } from '../lib/supabase';
import type {
  RecurringTransaction,
  RecurringTransactionInsert,
  RecurringTransactionUpdate,
} from '../types/database';

/**
 * Serviço de transações recorrentes
 */
export const recurringTransactionService = {
  /**
   * Lista todos os templates recorrentes do usuário
   */
  async list(userId: string, filters?: {
    is_active?: boolean;
  }) {
    let query = supabase
      .from('recurring_transactions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (filters?.is_active !== undefined) {
      query = query.eq('is_active', filters.is_active);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return data as RecurringTransaction[];
  },

  /**
   * Obtém um template por ID
   */
  async getById(id: string): Promise<RecurringTransaction> {
    const { data, error } = await supabase
      .from('recurring_transactions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as RecurringTransaction;
  },

  /**
   * Cria um novo template
   */
  async create(template: RecurringTransactionInsert): Promise<RecurringTransaction> {
    const { data, error } = await supabase
      .from('recurring_transactions')
      .insert(template)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as RecurringTransaction;
  },

  /**
   * Atualiza um template
   */
  async update(id: string, updates: RecurringTransactionUpdate): Promise<RecurringTransaction> {
    const { data, error } = await supabase
      .from('recurring_transactions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as RecurringTransaction;
  },

  /**
   * Deleta um template
   */
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('recurring_transactions')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  },

  /**
   * Gera transações baseadas em templates ativos
   * Chama a função SQL generate_recurring_transactions()
   */
  async generateTransactions(): Promise<number> {
    const { data, error } = await supabase.rpc('generate_recurring_transactions');

    if (error) {
      throw new Error(error.message);
    }

    return data as number;
  },
};
