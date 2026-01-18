import { Container } from '@/components/layout/Container'
import { BudgetCard } from '@/components/dashboard/CategoryCard'
import { SummaryCard } from '@/components/dashboard/SummaryCard'
import { CashFlowChart } from '@/components/charts/AreaChart'
import { CardsList } from '@/components/dashboard/CardsList'
import { UpcomingExpenses } from '@/components/dashboard/UpcomingExpenses'
import { TransactionTable } from '@/components/transactions/TransactionTable'
import { Card, Transaction } from '@/types'

// Mock data - will be replaced with Supabase in PROMPT 10
const budgetCategories = [
  { category: 'Aluguel', allocated: 4000, spent: 4000 },
  { category: 'Alimentação', allocated: 2000, spent: 2000 },
  { category: 'Mercado', allocated: 1500, spent: 1500 },
  { category: 'Academia', allocated: 120, spent: 120 },
]

const cards: Card[] = [
  {
    id: '1',
    name: 'Nubank',
    brand: 'nubank',
    lastDigits: '5897',
    amount: 120,
    dueDate: '10',
  },
  {
    id: '2',
    name: 'Inter',
    brand: 'inter',
    lastDigits: '5897',
    amount: 2300,
    dueDate: '21',
  },
  {
    id: '3',
    name: 'Picpay',
    brand: 'picpay',
    lastDigits: '5897',
    amount: 17000,
    dueDate: '12',
  },
]

const upcomingExpenses = [
  {
    id: '1',
    name: 'Conta de Luz',
    amount: 154,
    dueDate: '21/01',
    paymentMethod: 'Crédito Nubank **** 5897',
    paid: true,
  },
  {
    id: '2',
    name: 'Conta de Luz',
    amount: 154,
    dueDate: '21/01',
    paymentMethod: 'Crédito Nubank **** 5897',
    paid: true,
  },
  {
    id: '3',
    name: 'Conta de Luz',
    amount: 154,
    dueDate: '21/01',
    paymentMethod: 'Crédito Nubank **** 5897',
    paid: true,
  },
  {
    id: '4',
    name: 'Conta de Luz',
    amount: 154,
    dueDate: '21/01',
    paymentMethod: 'Crédito Nubank **** 5897',
    paid: true,
  },
  {
    id: '5',
    name: 'Conta de Luz',
    amount: 154,
    dueDate: '21/01',
    paymentMethod: 'Crédito Nubank **** 5897',
    paid: true,
  },
]

// Mock transactions
const transactions: Transaction[] = [
  {
    id: '1',
    description: 'Conta de água',
    amount: 100,
    type: 'expense',
    category: 'Manutenção',
    date: '2026-01-17',
    account: 'Conta corrente',
  },
  {
    id: '2',
    description: 'Conta de Luz',
    amount: 150,
    type: 'expense',
    category: 'Manutenção',
    date: '2026-01-17',
    account: 'Conta corrente',
  },
  {
    id: '3',
    description: 'Passeio no parque',
    amount: 750,
    type: 'expense',
    category: 'Lazer',
    date: '2026-01-17',
    card: 'Cartão XP',
    installments: '1/1',
  },
]

// Mock chart data
const monthlyData = [
  { month: 'JAN', receitas: 12000, despesas: 8000 },
  { month: 'FEV', receitas: 12500, despesas: 9500 },
  { month: 'MAR', receitas: 13000, despesas: 11000 },
  { month: 'ABR', receitas: 12000, despesas: 10500 },
  { month: 'MAI', receitas: 14000, despesas: 9000 },
  { month: 'JUN', receitas: 12500, despesas: 10000 },
  { month: 'JUL', receitas: 12000, despesas: 8500 },
  { month: 'AGO', receitas: 13500, despesas: 9500 },
  { month: 'SET', receitas: 12000, despesas: 10000 },
  { month: 'OUT', receitas: 12500, despesas: 8000 },
  { month: 'NOV', receitas: 13000, despesas: 9000 },
  { month: 'DEZ', receitas: 12000, despesas: 10000 },
]

export function Dashboard() {
  return (
    <Container>
      {/* Budget Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-8">
        {budgetCategories.map((budget, index) => (
          <BudgetCard
            key={index}
            category={budget.category}
            allocated={budget.allocated}
            spent={budget.spent}
          />
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-8">
        <SummaryCard
          label="Saldo total"
          amount={2000}
          icon="dollar"
          variant="info"
        />
        <SummaryCard
          label="Receitas"
          amount={12000}
          icon="arrowDown"
          variant="success"
        />
        <SummaryCard
          label="Despesas"
          amount={10000}
          icon="arrowUp"
          variant="error"
        />
      </div>

      {/* Chart and Cards Section */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-5 sm:gap-8 mb-5 sm:mb-8">
        {/* Cash Flow Chart */}
        <CashFlowChart data={monthlyData} />

        {/* Cards & Accounts */}
        <CardsList cards={cards} />
      </div>

      {/* Upcoming Expenses */}
      <div className="mb-5 sm:mb-8">
        <UpcomingExpenses expenses={upcomingExpenses} />
      </div>

      {/* Extrato detalhado */}
      <div>
        <TransactionTable transactions={transactions} />
      </div>
    </Container>
  )
}
