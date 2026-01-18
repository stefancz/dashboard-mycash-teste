# 🎨 Plano de Ajustes para Fidelidade ao Figma

## Análise de Conformidade com Figma

### Link do Design
https://www.figma.com/design/P30Rb9aMdx6AACjeY9Tx8L/Workshop---Do-figma-MCP-ao-Cursor-AI-v.3--Community-?node-id=42-3096&t=VcQIiF6NWD7chOdI-4

---

## 🔴 Problemas Identificados

### 1. Uso de Classes Tailwind ao invés de Tokens CSS
- ❌ Componentes usam `text-gray-900`, `bg-white`, `p-4` diretamente
- ✅ Devem usar variáveis CSS: `var(--color-text-primary)`, `var(--color-background-card)`, `var(--spacing-md)`

### 2. Cores Hardcoded
- ❌ `color="#A7FF00"` no CategoryCard
- ✅ Deve usar `var(--lime-500)` ou `var(--color-primary)`

### 3. Espaçamentos Hardcoded
- ❌ Classes Tailwind fixas: `gap-4`, `p-4`, `mb-6`
- ✅ Devem usar tokens: `var(--spacing-md)`, `var(--spacing-lg)`

### 4. Tipografia Hardcoded
- ❌ `text-xl`, `font-bold`, `text-base`
- ✅ Devem usar tokens semânticos: `var(--font-size-heading-4)`, `var(--font-weight-bold)`

---

## ✅ Plano de Correção

### Prioridade 1: Componentes Core
1. **CategoryCard** - Ajustar cores e espaçamentos
2. **SummaryCard** - Ajustar cores de variantes
3. **Sidebar** - Ajustar cores, espaçamentos e tipografia
4. **HeaderDesktop** - Ajustar layout e cores

### Prioridade 2: Componentes UI
5. **Button** - Ajustar variantes de cores
6. **Input** - Ajustar estilos de borda e padding
7. **Card** - Ajustar padding e sombras

### Prioridade 3: Componentes de Layout
8. **Container** - Ajustar espaçamentos responsivos
9. **Dashboard** - Ajustar grid e gaps

---

## 🎯 Estratégia de Implementação

### Passo 1: Configurar Tailwind para usar tokens CSS
- Atualizar `tailwind.config.ts` para mapear cores, espaçamentos e tipografia aos tokens CSS

### Passo 2: Substituir classes hardcoded
- Converter `bg-white` → `bg-[var(--color-background-card)]`
- Converter `text-gray-900` → `text-[var(--color-text-primary)]`
- Converter `p-4` → usar padding via tokens CSS

### Passo 3: Verificar valores exatos do Figma
- Acessar Figma para confirmar valores exatos de cores, espaçamentos e tipografia
- Ajustar tokens se necessário

### Passo 4: Testar visualmente
- Comparar com Figma pixel por pixel
- Ajustar até corresponder 100%

---

## 📋 Checklist de Verificação

### Cores
- [ ] Amarelo-esverdeado (ativo): `#A7FF00` → `var(--lime-500)`
- [ ] Vermelho (despesas): `#FF0000` → `var(--red-500)`
- [ ] Azul (saldo): `#007BFF` → `var(--blue-500)`
- [ ] Verde (sucesso): `#28A745` → `var(--green-500)`
- [ ] Fundo principal: `#F5F5F5` → `var(--gray-50)`
- [ ] Fundo cards: `#FFFFFF` → `var(--gray-0)`
- [ ] Texto principal: `#000000` → `var(--gray-900)`

### Espaçamentos
- [ ] Padding cards: 16px → `var(--spacing-md)`
- [ ] Gap entre cards: 16px → `var(--spacing-md)`
- [ ] Container desktop: 32px → `var(--spacing-xl)`

### Tipografia
- [ ] Títulos grandes: 24px → `var(--font-size-xl)`
- [ ] Títulos médios: 18px → `var(--font-size-lg)`
- [ ] Corpo: 16px → `var(--font-size-base)`
- [ ] Pequeno: 14px → `var(--font-size-sm)`

---

## 🚀 Próximos Passos

1. Atualizar `tailwind.config.ts` para usar tokens CSS
2. Refatorar componentes principais para usar tokens
3. Validar visualmente com Figma
4. Testar em todos os breakpoints
5. Documentar todas as conversões realizadas
