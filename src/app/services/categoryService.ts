import { supabase } from '../lib/supabase';
import type {
  Category,
  CategoryInsert,
  CategoryUpdate,
} from '../types/database';

/**
 * Serviço de categorias
 */
export const categoryService = {
  /**
   * Lista todas as categorias do usuário
   */
  async list(userId: string, filters?: {
    type?: 'INCOME' | 'EXPENSE';
    is_active?: boolean;
  }) {
    let query = supabase
      .from('categories')
      .select('*')
      .eq('user_id', userId)
      .order('name', { ascending: true });

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

    return data as Category[];
  },

  /**
   * Obtém uma categoria por ID
   */
  async getById(id: string): Promise<Category> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Category;
  },

  /**
   * Cria uma nova categoria
   */
  async create(category: CategoryInsert): Promise<Category> {
    const { data, error } = await supabase
      .from('categories')
      .insert(category)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Category;
  },

  /**
   * Atualiza uma categoria
   */
  async update(id: string, updates: CategoryUpdate): Promise<Category> {
    const { data, error } = await supabase
      .from('categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as Category;
  },

  /**
   * Deleta uma categoria
   */
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  },
};
