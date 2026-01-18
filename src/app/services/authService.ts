import { supabase } from '../lib/supabase';
import type { User } from '../types/database';

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface SignInData {
  email: string;
  password: string;
}

/**
 * Serviço de autenticação usando Supabase Auth
 */
export const authService = {
  /**
   * Registra um novo usuário
   */
  async signUp(data: SignUpData) {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          name: data.name,
        },
      },
    });

    if (authError) {
      throw new Error(authError.message);
    }

    // O trigger handle_new_user() criará o registro em users automaticamente
    return authData;
  },

  /**
   * Faz login do usuário
   */
  async signIn(data: SignInData) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  /**
   * Faz logout do usuário
   */
  async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  },

  /**
   * Obtém o usuário atual autenticado
   */
  async getCurrentUser(): Promise<User | null> {
    const { data: { user: authUser } } = await supabase.auth.getUser();

    if (!authUser) {
      return null;
    }

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return user;
  },

  /**
   * Obtém a sessão atual
   */
  async getSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      throw new Error(error.message);
    }

    return data.session;
  },

  /**
   * Observa mudanças na autenticação
   */
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  },
};
