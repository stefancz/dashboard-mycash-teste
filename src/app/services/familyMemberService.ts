import { supabase } from '../lib/supabase';
import type {
  FamilyMember,
  FamilyMemberInsert,
  FamilyMemberUpdate,
} from '../types/database';

/**
 * Serviço de membros da família
 */
export const familyMemberService = {
  /**
   * Lista todos os membros da família do usuário
   */
  async list(userId: string, filters?: {
    is_active?: boolean;
  }) {
    let query = supabase
      .from('family_members')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: true });

    if (filters?.is_active !== undefined) {
      query = query.eq('is_active', filters.is_active);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return data as FamilyMember[];
  },

  /**
   * Obtém um membro por ID
   */
  async getById(id: string): Promise<FamilyMember> {
    const { data, error } = await supabase
      .from('family_members')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as FamilyMember;
  },

  /**
   * Cria um novo membro
   */
  async create(member: FamilyMemberInsert): Promise<FamilyMember> {
    const { data, error } = await supabase
      .from('family_members')
      .insert(member)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as FamilyMember;
  },

  /**
   * Atualiza um membro
   */
  async update(id: string, updates: FamilyMemberUpdate): Promise<FamilyMember> {
    const { data, error } = await supabase
      .from('family_members')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as FamilyMember;
  },

  /**
   * Deleta um membro
   */
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('family_members')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  },
};
