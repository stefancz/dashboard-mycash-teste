import { supabase } from '../lib/supabase';
import type { User, UserUpdate } from '../types/database';

/**
 * Serviço de usuários
 */
export const userService = {
  /**
   * Obtém o usuário atual
   */
  async getCurrent(): Promise<User | null> {
    const { data: { user: authUser } } = await supabase.auth.getUser();

    if (!authUser) {
      return null;
    }

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as User;
  },

  /**
   * Atualiza o usuário atual
   */
  async update(updates: UserUpdate): Promise<User> {
    const { data: { user: authUser } } = await supabase.auth.getUser();

    if (!authUser) {
      throw new Error('User not authenticated');
    }

    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', authUser.id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as User;
  },
};
