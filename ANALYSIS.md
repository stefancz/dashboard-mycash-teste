# 📋 PROMPT 0: Análise e Planejamento Inicial — Completo

## ✅ Status: CONCLUÍDO

---

## 📚 PRÉ-EXECUÇÃO

✓ Rules relidas e aplicadas  
✓ Figma consultado e analisado (via descrição da imagem)  
✓ Hierarquia de variáveis verificada  
✓ Estrutura de navegação mapeada  
✓ Arquitetura proposta definida

---

## 🎨 ANÁLISE DO DESIGN FIGMA

### Link do Design
https://www.figma.com/design/P30Rb9aMdx6AACjeY9Tx8L/Workshop---Do-figma-MCP-ao-Cursor-AI-v.3--Community-?node-id=42-3096&t=VcQIiF6NWD7chOdI-4

---

## 🧩 COMPONENTES VISUAIS MAPEADOS

### 1. Sidebar Desktop (Left Navigation)

**Estrutura:**
- **Top:** Logo "Mycash+" (texto bold preto)
- **Navigation:**
  - Link "Home" (ativo) - destacado em amarelo-esverdeado com ícone de casa
  - Link "Cartões" - texto cinza com ícone de cartão
- **Bottom:** Perfil do usuário
  - Avatar circular
  - Nome: "Lucas Marte"
  - Email: "lucasmarte@gmail.com"

**Estados:**
- Expanded (padrão): mostra texto + ícones
- Collapsed: apenas ícones

**Hierarquia Visual:**
```
Sidebar
├── Logo
├── NavLink (Home - ativo)
├── NavLink (Cartões)
└── UserProfile
    ├── Avatar
    ├── Nome
    └── Email
```

---

### 2. Header / Top Bar

**Componentes:**
- **Campo de busca:** Input "Q Pesquisar" com ícone
- **Ícone de filtro:** 3 linhas horizontais com círculos
- **Seletor de período:** Botão "01 Jan - 31 Jan 2026" com ícone calendário
- **Avatares de usuários:** 3 avatares circulares (multi-user)
- **Botão ação:** "Nova transação" (preto, ícone +, texto branco)

**Hierarquia Visual:**
```
Header
├── Search Input
├── Filter Icon
├── Date Range Picker
├── User Avatars (3x)
└── CTA Button (Nova transação)
```

---

### 3. Cards de Categorias (Top Row - 4 cards)

**Estrutura por Card:**
- Formato: Quadrado com cantos arredondados
- Barra de progresso circular (amarelo-esverdeado)
- Porcentagem (grande, bold)
- Nome da categoria
- Valor monetário (R$ X.XXX,XX)

**Categorias identificadas:**
1. **Aluguel:** 25%, R$ 4.000,00
2. **Alimentação:** 15%, R$ 2.000,00
3. **Mercado:** 5%, R$ 1.500,00
4. **Academia:** 3%, R$ 120,00

**Hierarquia Visual:**
```
CategoryCard (4x)
├── ProgressCircle
├── Percentage (large, bold)
├── CategoryName
└── Amount
```

---

### 4. Resumo Financeiro (Middle Row - Left)

**Cards Verticais (3 cards):**
1. **Saldo Total**
   - Ícone: Dollar ($)
   - Label: "Saldo total"
   - Valor: R$ 2.000,00 (bold, azul)
2. **Receitas**
   - Ícone: Seta para baixo (verde)
   - Label: "Receitas"
   - Valor: R$ 12.000,00 (bold, preto)
3. **Despesas**
   - Ícone: Seta para cima (vermelho)
   - Label: "Despesas"
   - Valor: R$ 10.000,00 (bold, preto)

**Hierarquia Visual:**
```
SummaryCards
├── SummaryCard (Saldo total)
│   ├── Icon ($)
│   ├── Label
│   └── Amount (azul, bold)
├── SummaryCard (Receitas)
│   ├── Icon (↓ verde)
│   ├── Label
│   └── Amount (bold)
└── SummaryCard (Despesas)
    ├── Icon (↑ vermelho)
    ├── Label
    └── Amount (bold)
```

---

### 5. Gráfico de Fluxo Financeiro (Middle Row - Center)

**Componentes:**
- Título: "Fluxo financeiro" com ícone de gráfico
- Tipo: Area Chart (gráfico de área)
- Eixo Y: R$ 0,00 a R$ 17.500 (incrementos de R$ 2.500)
- Eixo X: Meses (JAN a DEZ)
- Áreas:
  - **Receitas:** Amarelo-esverdeado (sobreposto)
  - **Despesas:** Vermelho (sobreposto)
- Legenda: Círculos coloridos com labels

**Hierarquia Visual:**
```
FlowChart
├── Title + Icon
├── Chart Area
│   ├── Y-Axis (R$ 0,00 - R$ 17.500)
│   ├── X-Axis (JAN - DEZ)
│   ├── Area (Receitas - amarelo-esverdeado)
│   └── Area (Despesas - vermelho)
└── Legend
    ├── Circle (amarelo-esverdeado) + "Receitas"
    └── Circle (vermelho) + "Despesas"
```

---

### 6. Cards & Contas (Middle Row - Right Top)

**Estrutura:**
- Header: "Cards & contas" + ícone card + botão + + ícone seta →
- Lista de contas (3 itens):
  1. **Nubank**
     - Logo: Roxo
     - Valor: R$ 120,00
     - Vencimento: "Vence dia 10"
     - Cartão: "**** 5897"
  2. **Inter**
     - Logo: Laranja
     - Valor: R$ 2.300,00
     - Vencimento: "Vence dia 21"
     - Cartão: "**** 5897"
  3. **Picpay**
     - Logo: Verde
     - Valor: R$ 17.000,00
     - Vencimento: "Vence dia 12"
     - Cartão: "**** 5897"

**Hierarquia Visual:**
```
CardsList
├── Header
│   ├── Title + Icon
│   ├── Add Button
│   └── View All Icon
└── CardItem (3x)
    ├── Bank Logo
    ├── Amount
    ├── Due Date
    └── Card Number (masked)
```

---

### 7. Próximas Despesas (Middle Row - Right Bottom)

**Estrutura:**
- Header: "Próximas despesas" + ícone + botão +
- Lista de despesas (5 itens):
  - Cada item:
    - Nome: "Conta de Luz"
    - Valor: R$ 154,00
    - Vencimento: "Vence dia 21/01"
    - Forma de pagamento: "Crédito Nubank **** 5897"
    - Checkmark verde (pago/agendado)

**Hierarquia Visual:**
```
UpcomingExpenses
├── Header
│   ├── Title + Icon
│   └── Add Button
└── ExpenseItem (5x)
    ├── Name
    ├── Amount
    ├── Due Date
    ├── Payment Method
    └── Status Icon (checkmark verde)
```

---

### 8. Extrato Detalhado (Bottom Section)

**Estrutura:**
- Header: "Extrato detalhado" + ícone
- Filtros:
  - Input de busca: "Q Buscar lançamentos"
  - Dropdown: "Despesas"
- Tabela com colunas:
  - **Membro:** Avatares circulares (3 usuários)
  - **Datas:** 17/01/2026
  - **Descrição:** 
    - ↑ Conta de água
    - ↑ Conta de Luz
    - ↑ Passeio no parque
  - **Categorias:** Manutenção, Lazer
  - **Conta/cartão:** Conta corrente, Cartão XP
  - **Parcelas:** -, 1/1
  - **Valor:** R$ 100,00, R$ 150,00, R$ 750,00
- Paginação: "Mostrando 1 a 5 de 17" com navegação (1, 2, 3, 4, 5)

**Hierarquia Visual:**
```
TransactionTable
├── Header
│   └── Title + Icon
├── Filters
│   ├── Search Input
│   └── Category Dropdown
├── Table
│   ├── TableHeader
│   └── TableRow (5x)
│       ├── Avatar
│       ├── Date
│       ├── Description (com ícone ↑)
│       ├── Category
│       ├── Account/Card
│       ├── Installments
│       └── Amount
└── Pagination
    ├── Info ("Mostrando 1 a 5 de 17")
    └── Page Numbers + Navigation
```

---

## 🎨 TOKENS IDENTIFICADOS (Valores Aproximados do Design)

### Cores (Valores a Confirmar no Figma)

**Fundo:**
- Fundo principal: `#F5F5F5` → `--gray-50` (primitiva) ou `--color-background` (semântica)
- Fundo cards/sidebar: `#FFFFFF` → `--white` ou `--gray-0`

**Texto:**
- Texto principal: `#000000` → `--gray-900` ou `--text-primary`
- Texto secundário: `#808080` → `--gray-500` ou `--text-secondary`

**Cores de Destaque:**
- Amarelo-esverdeado (ativo, receitas): `#A7FF00` ou similar → `--lime-500` ou `--color-primary`
- Vermelho (despesas, alertas): `#FF0000` ou similar → `--red-500` ou `--color-error`
- Azul (saldo total): `#007BFF` ou similar → `--blue-500` ou `--color-info`
- Verde (sucesso): `#28A745` → `--green-500` ou `--color-success`

**Cores de Branding:**
- Nubank (roxo): → `--purple-500`
- Inter (laranja): → `--orange-500`
- Picpay (verde): → `--green-500`

### Espaçamentos (Valores a Confirmar no Figma)

**Padding:**
- Container principal: 32px desktop → `--spacing-xl` ou `--spacing-container`
- Cards: ~16px → `--spacing-md` ou `--spacing-card`
- Inputs: ~12px → `--spacing-sm` ou `--spacing-input`

**Gaps:**
- Entre cards: ~16px → `--spacing-md`
- Entre seções: ~24px → `--spacing-lg`

### Tipografia (Valores a Confirmar no Figma)

**Tamanhos:**
- Títulos grandes: ~24px → `--font-size-xl` ou `--font-size-heading-2`
- Títulos médios: ~18px → `--font-size-lg` ou `--font-size-heading-3`
- Corpo de texto: ~16px → `--font-size-base` ou `--font-size-body`
- Texto pequeno: ~14px → `--font-size-sm` ou `--font-size-caption`

**Pesos:**
- Normal: 400 → `--font-weight-normal`
- Semibold: 600 → `--font-weight-semibold`
- Bold: 700 → `--font-weight-bold`

**Família:**
- Sans-serif → `--font-family-base`

### Shapes (Valores a Confirmar no Figma)

**Border Radius:**
- Cards/buttons: ~8px → `--radius-md`
- Avatares: 50% → `--radius-full`
- Inputs: ~6px → `--radius-sm`

---

## 🗺️ ESTRUTURA DE NAVEGAÇÃO

### Desktop (≥1280px)

**Layout:**
```
┌──────────┬──────────────────────────────────────┐
│          │  Header (Top Bar)                    │
│ Sidebar  │  ─────────────────────────────────   │
│          │                                       │
│  Logo    │  Main Content Area                   │
│  Home ✓  │  ┌────────────────────────────────┐  │
│  Cartões │  │ Cards de Categorias (4x)      │  │
│          │  └────────────────────────────────┘  │
│  User    │  ┌───────┬───────────┬───────────┐  │
│          │  │Resumo │   Gráfico │ Cards &   │  │
│          │  │       │           │ Contas    │  │
│          │  └───────┴───────────┴───────────┘  │
│          │  ┌────────────────────────────────┐  │
│          │  │ Extrato Detalhado (Tabela)    │  │
│          │  └────────────────────────────────┘  │
└──────────┴──────────────────────────────────────┘
```

**Características:**
- Sidebar fixa à esquerda (empurra conteúdo, não sobrepõe)
- Estados: Expanded (texto + ícones) / Collapsed (apenas ícones)
- Header dentro do conteúdo principal
- Grid responsivo: 3-4 colunas dependendo do componente
- Max-width: 1400px (desktop) / 1600px (wide)

### Tablet (768px - 1279px)

**Layout:**
```
┌──────────────────────────────────────┐
│  Header Mobile (com drawer)          │
├──────────────────────────────────────┤
│                                       │
│  Main Content Area                   │
│  ┌────────────────────────────────┐  │
│  │ Cards de Categorias (2 col)   │  │
│  └────────────────────────────────┘  │
│  ┌───────────┬───────────────┐      │
│  │ Resumo    │   Gráfico     │      │
│  └───────────┴───────────────┘      │
│  ┌────────────────────────────────┐  │
│  │ Extrato Detalhado             │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

**Características:**
- Sidebar **não renderiza**
- Header mobile com menu drawer
- Grid: 2 colunas quando fizer sentido
- Padding: 24px

### Mobile (<768px)

**Layout:**
```
┌────────────────────────────────┐
│  Header Mobile (compacto)      │
├────────────────────────────────┤
│                                 │
│  Main Content Area             │
│  ┌──────────────────────────┐  │
│  │ Category Card (stacked)  │  │
│  │ Category Card            │  │
│  │ Category Card            │  │
│  │ Category Card            │  │
│  └──────────────────────────┘  │
│  ┌──────────────────────────┐  │
│  │ Summary Card             │  │
│  │ Summary Card             │  │
│  │ Summary Card             │  │
│  └──────────────────────────┘  │
│  ┌──────────────────────────┐  │
│  │ Extrato (1 coluna)       │  │
│  └──────────────────────────┘  │
└────────────────────────────────┘
```

**Características:**
- Sidebar **não renderiza**
- Header mobile compacto com drawer
- Layout em coluna única
- Cards empilhados verticalmente
- Padding: 16px

---

## 📐 ARQUITETURA PROPOSTA

### Estrutura de Pastas

```
src/
├── components/
│   ├── ui/                      # Componentes atômicos
│   │   ├── Button.tsx           # Botão reutilizável
│   │   ├── Input.tsx            # Input reutilizável
│   │   ├── Card.tsx             # Card base
│   │   ├── Avatar.tsx           # Avatar circular
│   │   ├── Badge.tsx            # Badge/etiqueta
│   │   ├── ProgressCircle.tsx   # Barra de progresso circular
│   │   ├── Icon.tsx             # Wrapper de ícones
│   │   └── Table.tsx            # Tabela base
│   ├── layout/                  # Componentes de layout
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx      # Sidebar desktop
│   │   │   ├── NavLink.tsx      # Link de navegação
│   │   │   └── UserProfile.tsx  # Perfil do usuário
│   │   ├── Header/
│   │   │   ├── HeaderDesktop.tsx # Header desktop
│   │   │   ├── HeaderMobile.tsx  # Header mobile
│   │   │   ├── Drawer.tsx        # Menu drawer mobile
│   │   │   ├── SearchInput.tsx   # Campo de busca
│   │   │   └── DateRangePicker.tsx # Seletor de período
│   │   └── Container.tsx        # Container principal
│   ├── dashboard/               # Componentes específicos do dashboard
│   │   ├── CategoryCard.tsx     # Card de categoria
│   │   ├── SummaryCard.tsx      # Card de resumo financeiro
│   │   ├── FlowChart.tsx        # Gráfico de fluxo
│   │   ├── CardsList.tsx        # Lista de cards e contas
│   │   └── UpcomingExpenses.tsx # Próximas despesas
│   ├── transactions/            # Componentes de transações
│   │   ├── TransactionTable.tsx # Tabela de transações
│   │   ├── TransactionRow.tsx   # Linha da tabela
│   │   └── TransactionFilters.tsx # Filtros de transações
│   └── charts/                  # Componentes de gráficos
│       └── AreaChart.tsx        # Gráfico de área
├── pages/                       # Páginas (apenas composição)
│   ├── Dashboard.tsx            # Página principal
│   ├── Transactions.tsx         # Página de transações
│   ├── Cards.tsx                # Página de cartões
│   └── Profile.tsx              # Página de perfil
├── hooks/                       # Lógica de negócio
│   ├── useAuth.ts               # Autenticação
│   ├── useSidebar.ts            # Estado da sidebar
│   ├── useTransactions.ts       # Dados de transações
│   ├── useCards.ts              # Dados de cartões
│   └── useDrawer.ts             # Estado do drawer mobile
├── services/                    # Integrações (Supabase)
│   └── api.ts                   # Cliente Supabase
├── styles/                      # Estilos globais e tokens
│   ├── tokens.css               # Variáveis CSS do design system
│   ├── globals.css              # Reset e estilos base
│   └── tailwind.config.ts       # Configuração do Tailwind
├── utils/                       # Funções auxiliares
│   ├── formatters.ts            # Formatação de valores, datas
│   └── constants.ts             # Constantes do projeto
└── types/                       # TypeScript types
    ├── index.ts
    ├── transaction.ts
    └── card.ts
```

### Estratégia de Componentização

1. **Componentes Atômicos (`components/ui/`):**
   - Pequenos, altamente reutilizáveis
   - Aceitam props para customização
   - Usam tokens do design system
   - Sem lógica de negócio

2. **Componentes de Layout (`components/layout/`):**
   - Sidebar, Header, Container
   - Gerenciam responsividade
   - Lógica de estado compartilhada via hooks
   - Condicional: Sidebar ou Header Mobile (nunca ambos)

3. **Componentes Específicos (`components/dashboard/`, etc.):**
   - Compostos de átomos e moléculas
   - Lógica de negócio em hooks
   - Reutilizáveis dentro do contexto da feature

4. **Páginas (`pages/`):**
   - Apenas composição
   - Sem lógica de negócio
   - Orquestram componentes

5. **Hooks (`hooks/`):**
   - Lógica de negócio reutilizável
   - Estado compartilhado
   - Integração com serviços

6. **Services (`services/`):**
   - Comunicação com API/Supabase
   - Funções puras de transformação de dados

---

## ✅ HIERARQUIA DE VARIÁVEIS CONFIRMADA

### Ordem Obrigatória

1. **Variável SEMÂNTICA aplicada no Figma?**
   → Usar diretamente (`--color-primary`, `--spacing-container`, etc.)

2. **Variável PRIMITIVA aplicada no Figma?**
   → Usar diretamente (`--gray-900`, `--lime-500`, `--spacing-md`, etc.)

3. **Valor local (hex, px, rem, etc)?**
   → Executar CONVERSÃO INTELIGENTE:
   - **Cores HEX:** Comparar com primitivas → escolher a mais próxima
   - **Espaçamentos PX/REM:** Arredondar para token da escala existente
   - **Tipografia:** Mapear peso (400→normal, 600→semibold, 700→bold)

4. **NUNCA usar valores hardcoded**

### Exemplos

✅ **Correto:**
- Figma: `var(--color-primary)` → usar `var(--color-primary)`
- Figma: `var(--gray-900)` → usar `var(--gray-900)`
- Figma: `#E5E5E5` → converter para `--gray-200` ou `--border-color`
- Figma: `24px` → converter para `--spacing-md` ou similar

❌ **Incorreto:**
- Figma: `#E5E5E5` → usar `#E5E5E5` (NUNCA)
- Figma: `28px` → usar `28px` (NUNCA)

---

## 📦 IMPLEMENTAÇÃO PROMPT 0

### Documentos Criados
- ✅ `DOCUMENTATION.md` - Documentação geral do projeto
- ✅ `ANALYSIS.md` - Análise detalhada do design (este arquivo)

### Mapeamento Realizado
- ✅ Todos os componentes visuais identificados e hierarquizados
- ✅ Paleta de cores aproximada identificada (aguardando confirmação do Figma)
- ✅ Espaçamentos e tipografia aproximados (aguardando confirmação do Figma)
- ✅ Estrutura de navegação mapeada (desktop, tablet, mobile)
- ✅ Arquitetura proposta definida
- ✅ Estratégia de componentização definida
- ✅ Hierarquia de variáveis confirmada

### Próximos Passos

⏭️ **PROMPT 1:** Estrutura Base do Projeto
- Configurar Vite + React + TypeScript
- Configurar Tailwind CSS
- Criar estrutura de pastas
- Configurar ESLint/Prettier
- Setup inicial do Supabase

---

## 🔍 OBSERVAÇÕES IMPORTANTES

### Valores Aproximados
Todos os valores de cores, espaçamentos e tipografia identificados acima são **aproximações** baseadas na descrição da imagem. É **essencial** acessar o Figma diretamente para:
- Confirmar valores exatos das variáveis semânticas
- Confirmar valores exatos das variáveis primitivas
- Mapear todas as variáveis disponíveis no design system

### Breakpoints Confirmados
- Mobile (base): < 768px
- Tablet: ≥ 768px e < 1280px
- Desktop: ≥ 1280px e < 1920px
- Wide / 4K: ≥ 1920px

### Layout Fluido
- Containers principais: `width: 100%` (NUNCA fixo)
- Limitação de leitura: usar `max-width`, nunca `width` fixa
- Overflow horizontal é proibido em qualquer resolução
- Frames do Figma NÃO representam containers fixos

---

**Data de conclusão:** 2025-01-27  
**Status:** ✅ Análise completa realizada
