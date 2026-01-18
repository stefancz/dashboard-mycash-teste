# Plano de Refatoração - Enhance Financial Dashboard Layout

**Data:** 18/01/2026  
**Status:** 📋 Planejamento

---

## 📋 Análise da Documentação "Enhance Financial Dashboard Layout"

### Diferenças Identificadas

#### 1. **Cores e Tokens**
**Documentação (Enhance):**
- Usa valores hardcoded: `#d7ff00`, `#080b12`, `#C4E703`, `#E61E32`, `#e5e7eb`
- Background: `#F9FAFB`
- Border radius: `rounded-[20px]`, `rounded-[100px]`

**Nosso Projeto (MCP Compliant):**
- ✅ Usa tokens CSS: `var(--lime-500)`, `var(--gray-900)`, etc.
- ✅ Background: `var(--color-background)` ou `var(--gray-50)`
- ✅ Border radius: `var(--radius-card)`, `var(--radius-button)`

**Ação:** Manter tokens CSS, mapear cores do Enhance para nossos tokens

#### 2. **Estrutura de Componentes**
**Documentação (Enhance):**
- `BudgetCard` - Card de categoria com progresso circular
- `CashFlowChart` - Gráfico de área (Recharts)
- `AccountCard` - Card de conta/cartão
- `UpcomingExpense` - Item de despesa futura
- `AddTransactionDialog` - Dialog para adicionar transação

**Nosso Projeto:**
- ✅ Já tem componentes similares
- Ajustar para seguir exatamente o layout do Enhance

#### 3. **Layout e Espaçamento**
**Documentação (Enhance):**
- Padding: `p-[24px]`, `p-[32px]`
- Gaps: `gap-[8px]`, `gap-[12px]`, `gap-[16px]`, `gap-[20px]`, `gap-[32px]`
- Border radius: `rounded-[20px]` (cards), `rounded-[100px]` (buttons/inputs)

**Nosso Projeto:**
- ✅ Usa tokens: `var(--spacing-md)`, `var(--spacing-lg)`
- ✅ Border radius: `var(--radius-card)`, `var(--radius-button)`

**Ação:** Mapear espaçamentos do Enhance para nossos tokens

#### 4. **Tipografia**
**Documentação (Enhance):**
- Tamanhos: `text-[12px]`, `text-[14px]`, `text-[16px]`, `text-[18px]`, `text-[20px]`, `text-[24px]`, `text-[28px]`
- Pesos: `font-normal`, `font-semibold`, `font-bold`
- Fonte: Inter

**Nosso Projeto:**
- ✅ Usa tokens: `var(--font-size-xs)`, `var(--font-size-sm)`, etc.
- ✅ Fonte Inter já configurada

**Ação:** Garantir que nossos tokens correspondam aos tamanhos usados

#### 5. **Sidebar e Navegação**
**Documentação (Enhance):**
- Sidebar com logo "Mycash+"
- Menu com "Home" (ativo com bg `#d7ff00`) e "Cartões"
- Perfil do usuário na parte inferior
- Toggle para colapsar/expandir (desktop)
- Overlay no mobile

**Nosso Projeto:**
- ✅ Já tem sidebar similar
- Ajustar cores para usar tokens

---

## 🎯 Mapeamento de Cores (Enhance → Nossos Tokens)

| Enhance (Hardcoded) | Nosso Token | Valor CSS |
|---------------------|-------------|-----------|
| `#d7ff00` | `--lime-500` | `#A7FF00` (aproximado - nosso lime-500) |
| `#080b12` | `--gray-900` | `#000000` (preto) |
| `#C4E703` | `--lime-400` | `#B0FF1A` ou usar `--lime-500` |
| `#E61E32` | `--red-600` | `#E53935` (vermelho despesas) |
| `#15BE78` | `--green-600` | Verde sucesso |
| `#2a89ef` | `--blue-500` | `#007BFF` (azul saldo) |
| `#e5e7eb` | `--gray-200` | `#CCCCCC` (bordas) |
| `#F9FAFB` | `--gray-50` | `#F5F5F5` (background) |
| `#6B7280` | `--gray-600` | `#666666` (texto secundário) |

---

## 📝 Plano de Refatoração

### Fase 1: Atualizar Tokens CSS
1. ✅ Verificar se todos os tokens necessários existem
2. ✅ Adicionar tokens faltantes se necessário
3. ✅ Garantir mapeamento correto

### Fase 2: Refatorar Componentes
1. ✅ `BudgetCard` → Ajustar para usar tokens
2. ✅ `CashFlowChart` → Atualizar cores para tokens
3. ✅ `SummaryCard` → Alinhar com design Enhance
4. ✅ `AccountCard` → Seguir layout Enhance
5. ✅ `UpcomingExpense` → Atualizar estilo

### Fase 3: Layout Principal
1. ✅ Dashboard principal → Seguir estrutura Enhance
2. ✅ Header/Navbar → Atualizar layout
3. ✅ Sidebar → Ajustar cores e espaçamentos
4. ✅ Tabela de transações → Alinhar com Enhance

### Fase 4: Responsividade
1. ✅ Manter mobile-first
2. ✅ Ajustar breakpoints conforme Enhance
3. ✅ Testar em todos os tamanhos

---

## ⚠️ Regras MCP a Manter

1. ✅ **NUNCA usar valores hardcoded**
   - Converter todos `#xxx` para tokens CSS
   - Usar `var(--token-name)`

2. ✅ **Layout 100% fluido**
   - Containers com `max-w`, não `w` fixo
   - Padding responsivo

3. ✅ **Breakpoints corretos**
   - Mobile: < 768px
   - Tablet: 768px - 1279px
   - Desktop: ≥ 1280px

4. ✅ **Hierarquia de variáveis**
   - Semântica → Primitiva → Conversão

---

## 🚀 Próximos Passos

1. Verificar estado do projeto
2. Atualizar tokens CSS se necessário
3. Refatorar componentes um por um
4. Testar build e responsividade
5. Commit e push

---

**Status:** Aguardando verificação do diretório do projeto para iniciar refatoração.
