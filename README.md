# mycash+ Dashboard

Dashboard financeiro desenvolvido com React, TypeScript, Tailwind CSS e Supabase.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Roteamento
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Recharts** - Biblioteca de gráficos
- **Supabase** - Backend (banco de dados, autenticação)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes atômicos (Button, Input, Card, etc.)
│   ├── layout/          # Componentes de layout (Sidebar, Header, Container)
│   ├── dashboard/       # Componentes específicos do dashboard
│   ├── transactions/    # Componentes de transações
│   ├── cards/           # Componentes de cartões
│   └── charts/          # Componentes de gráficos
├── pages/               # Páginas (Dashboard, Transactions, Cards, Profile, Settings)
├── hooks/               # Custom hooks (useAuth, useTransactions, useCards, etc.)
├── services/            # Serviços (Supabase API)
├── contexts/            # Contextos React (ToastContext)
├── styles/              # Estilos globais e tokens CSS
├── utils/               # Funções auxiliares (formatters, validations, export)
└── types/               # TypeScript types
```

## 🎨 Design System

O projeto utiliza um design system baseado em tokens:

- **Tokens Primitivos** (`tokens.css`): Cores, espaçamentos, tipografia, shapes
- **Tokens Semânticos** (`semantic-tokens.css`): Variáveis semânticas mapeadas para primitivas

### Hierarquia de Variáveis

1. **Variável SEMÂNTICA** do Figma → Usar diretamente
2. **Variável PRIMITIVA** do Figma → Usar diretamente
3. **Valor local** (hex, px) → Converter para primitiva mais próxima
4. **NUNCA** usar valores hardcoded

## 🔧 Configuração

### Instalação

```bash
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua-url-do-supabase
VITE_SUPABASE_ANON_KEY=sua-chave-anon-do-supabase
```

### Desenvolvimento

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📐 Breakpoints

- **Mobile (base)**: < 768px
- **Tablet**: ≥ 768px e < 1280px
- **Desktop**: ≥ 1280px e < 1920px
- **Wide / 4K**: ≥ 1920px

## 🎯 Funcionalidades

### ✅ Implementado

- [x] Autenticação completa (Login/Register/Logout)
- [x] Dashboard com resumo financeiro
- [x] Gestão de transações (CRUD completo)
- [x] Gestão de cartões (CRUD completo)
- [x] Filtros avançados e busca
- [x] Gráficos interativos (Area, Pie, Bar)
- [x] Exportação de dados (CSV/PDF)
- [x] Notificações e feedback (Toasts)
- [x] Responsividade completa (mobile-first)
- [x] Formulários com validação
- [x] Modal e Dialog reutilizáveis
- [x] Páginas de Perfil e Configurações

### 🚧 Em Desenvolvimento

- [ ] Tema escuro
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)
- [ ] Notificações push

## 📝 Regras do Projeto

### Layout Fluido

- Containers principais: `width: 100%` (NUNCA fixo)
- Limitação de leitura: usar `max-width`, nunca `width` fixa
- Overflow horizontal é proibido em qualquer resolução

### Sidebar

- **Desktop (≥1280px)**: Sidebar fixa com estados expanded/collapsed
- **Mobile/Tablet (<1280px)**: Sidebar não renderiza, usa Header Mobile com Drawer

### Validação

- Todos os formulários usam react-hook-form + zod
- Mensagens de erro amigáveis
- Validação em tempo real

### Performance

- Code splitting implementado
- Lazy loading de rotas (planejado)
- Otimização de chunks

## 🔐 Supabase Setup

### Tabelas Necessárias

1. **users**
   - id (uuid, primary key)
   - name (text)
   - email (text)
   - avatar (text, nullable)

2. **transactions**
   - id (uuid, primary key)
   - user_id (uuid, foreign key -> users.id)
   - description (text)
   - amount (numeric)
   - type (enum: 'income' | 'expense')
   - category (text)
   - date (date)
   - account (text, nullable)
   - card (text, nullable)
   - installments (text, nullable)
   - created_at (timestamp)

3. **cards**
   - id (uuid, primary key)
   - user_id (uuid, foreign key -> users.id)
   - name (text)
   - brand (enum: 'nubank' | 'inter' | 'picpay')
   - last_digits (text)
   - amount (numeric)
   - due_date (text)
   - created_at (timestamp)

## 📚 Documentação

Veja `DOCUMENTATION.md` para detalhes completos de cada prompt implementado.

## 🤝 Contribuindo

1. Siga as regras definidas em `.cursor/skills/regras-figma/SKILL.md`
2. Mantenha a hierarquia de variáveis (semântica → primitiva → conversão)
3. Garanta que todos os builds passem
4. Teste em diferentes breakpoints

## 📄 Licença

Este projeto é privado.

---

**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**
