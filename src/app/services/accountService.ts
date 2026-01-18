import { supabase } from '../lib/supabase';
import type {
  Account,
  AccountInsert,
  AccountUpdate,
} from '../types/database';

/**
 * Serviço de contas/cartões
 */
export const accountService = {
  /**
   * Lista todas as contas do usuário
   */
  async list(userId: string, filters?: {
    type?: 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
    is_active?: boolean;
  }) {
    let query = supabase
      .from('accounts')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (filters?.type) {
      query = query.eq('type', filters.type);
    }

    if (filters?.is_active !== undefined) {
      query = query.eq('is_active', filters.is_active);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return data as Account[];
  },

  /**
   * Obtém uma conta por ID
   */
  async getById(id: string): Promise<Account> {
    const { data, error } = await supabase
      .from('accounts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Account;
  },

  /**
   * Cria uma nova conta
   */
  async create(account: AccountInsert): Promise<Account> {
    const { data, error } = await supabase
      .from('accounts')
      .insert(account)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Account;
  },

  /**
   * Atualiza uma conta
   */
  async update(id: string, updates: AccountUpdate): Promise<Account> {
    const { data, error } = await supabase
      .from('accounts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Account;
  },

  /**
   * Deleta uma conta
   */
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('accounts')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  },
};
