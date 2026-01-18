-- ============================================
-- mycash+ v2.0 - Storage Buckets
-- ============================================
-- Criar buckets e políticas de acesso

-- ============================================
-- 📦 AVATARS BUCKET
-- ============================================
-- Avatares de usuários e membros da família

INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Política: Usuários autenticados podem fazer upload de seus próprios avatares
CREATE POLICY "Users can upload own avatars"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'avatars' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Política: Usuários autenticados podem ver todos os avatares (público)
CREATE POLICY "Users can view avatars"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'avatars' AND
    auth.role() = 'authenticated'
  );

-- Política: Usuários autenticados podem atualizar seus próprios avatares
CREATE POLICY "Users can update own avatars"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'avatars' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Política: Usuários autenticados podem deletar seus próprios avatares
CREATE POLICY "Users can delete own avatars"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'avatars' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- ============================================
-- 📦 LOGOS BUCKET
-- ============================================
-- Logos de bancos/cartões

INSERT INTO storage.buckets (id, name, public)
VALUES ('logos', true)
ON CONFLICT (id) DO NOTHING;

-- Política: Usuários autenticados podem fazer upload de logos
CREATE POLICY "Users can upload logos"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'logos' AND
    auth.role() = 'authenticated'
  );

-- Política: Usuários autenticados podem ver todos os logos (público)
CREATE POLICY "Users can view logos"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'logos' AND
    auth.role() = 'authenticated'
  );

-- Política: Usuários autenticados podem atualizar logos
CREATE POLICY "Users can update logos"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'logos' AND
    auth.role() = 'authenticated'
  );

-- Política: Usuários autenticados podem deletar logos
CREATE POLICY "Users can delete logos"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'logos' AND
    auth.role() = 'authenticated'
  );

-- ============================================
-- 📦 DOCUMENTS BUCKET
-- ============================================
-- Comprovantes, recibos, documentos fiscais

INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', false)
ON CONFLICT (id) DO NOTHING;

-- Política: Apenas o usuário dono pode acessar documentos
CREATE POLICY "Users can upload own documents"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'documents' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Users can view own documents"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'documents' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Users can update own documents"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'documents' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Users can delete own documents"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'documents' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );
