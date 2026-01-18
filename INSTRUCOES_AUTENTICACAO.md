# 🔐 Instruções de Autenticação GitHub

## Como fazer o push para o GitHub

### Opção 1: Personal Access Token (Recomendado)

#### Passo 1: Criar o Token no GitHub

1. Acesse: **https://github.com/settings/tokens**
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Preencha:
   - **Note:** `dashboard-mycash-teste` (nome descritivo)
   - **Expiration:** Escolha um prazo (90 dias, 1 ano, ou sem expiração)
   - **Scopes:** Marque `repo` (acesso completo aos repositórios)
4. Clique em **"Generate token"** (rolar até o final da página)
5. **COPIE O TOKEN** imediatamente (você não verá novamente!)
   - Formato: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

#### Passo 2: Executar o Push

Abra o terminal e execute:

```bash
cd /Users/stefanczernorucki/Desktop/Dashboard-mycash-js
git push -u origin main
```

Quando solicitado:
- **Username:** `stefancz`
- **Password:** Cole o token que você copiou (não sua senha do GitHub!)

---

### Opção 2: Usar SSH (Se já tiver configurado)

Se você já tem uma chave SSH configurada no GitHub:

```bash
# Mudar para SSH
git remote set-url origin git@github.com:stefancz/dashboard-mycash-teste.git

# Fazer push
git push -u origin main
```

---

### Opção 3: GitHub CLI (Se tiver instalado)

```bash
# Instalar GitHub CLI (se não tiver)
brew install gh

# Autenticar
gh auth login

# Fazer push
git push -u origin main
```

---

## 🔍 Verificar Status

Para verificar se tudo está configurado:

```bash
# Ver remote configurado
git remote -v

# Ver último commit
git log --oneline -1

# Ver status
git status
```

---

## 📝 Observação Importante

O token funciona como uma **senha temporária**. Mantenha-o seguro e não compartilhe publicamente!

Se perder o token ou ele expirar, basta criar um novo seguindo o Passo 1.
