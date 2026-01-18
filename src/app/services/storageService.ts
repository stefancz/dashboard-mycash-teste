import { supabase } from '../lib/supabase';

export type BucketName = 'avatars' | 'logos' | 'documents';

/**
 * Serviço de storage usando Supabase Storage
 */
export const storageService = {
  /**
   * Faz upload de arquivo
   */
  async uploadFile(
    bucket: BucketName,
    path: string,
    file: File,
    options?: {
      cacheControl?: string;
      contentType?: string;
      upsert?: boolean;
    }
  ) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: options?.cacheControl || '3600',
        contentType: options?.contentType || file.type,
        upsert: options?.upsert || false,
      });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  /**
   * Obtém URL pública do arquivo
   */
  getPublicUrl(bucket: BucketName, path: string): string {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  },

  /**
   * Obtém URL assinada do arquivo (para arquivos privados)
   */
  async getSignedUrl(bucket: BucketName, path: string, expiresIn: number = 3600) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(path, expiresIn);

    if (error) {
      throw new Error(error.message);
    }

    return data.signedUrl;
  },

  /**
   * Deleta arquivo
   */
  async deleteFile(bucket: BucketName, path: string) {
    const { error } = await supabase.storage.from(bucket).remove([path]);

    if (error) {
      throw new Error(error.message);
    }
  },

  /**
   * Lista arquivos em um bucket
   */
  async listFiles(bucket: BucketName, folder?: string) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(folder);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  /**
   * Faz upload de avatar do usuário
   */
  async uploadAvatar(userId: string, file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/avatar.${fileExt}`;

    await this.uploadFile('avatars', fileName, file, {
      contentType: file.type,
      upsert: true,
    });

    return this.getPublicUrl('avatars', fileName);
  },

  /**
   * Faz upload de logo de banco/cartão
   */
  async uploadLogo(accountId: string, file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${accountId}/logo.${fileExt}`;

    await this.uploadFile('logos', fileName, file, {
      contentType: file.type,
      upsert: true,
    });

    return this.getPublicUrl('logos', fileName);
  },
};
