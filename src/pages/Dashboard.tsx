import { Container } from '@/components/layout/Container'
import { CategoryCard } from '@/components/dashboard/CategoryCard'
import { SummaryCard } from '@/components/dashboard/SummaryCard'
import { AreaChart } from '@/components/charts/AreaChart'
import { CardsList } from '@/components/dashboard/CardsList'
import { UpcomingExpenses } from '@/components/dashboard/UpcomingExpenses'
import { TransactionTable } from '@/components/transactions/TransactionTable'
import { Card, Transaction } from '@/types'

// Mock data - will be replaced with Supabase in PROMPT 10
const categories = [
  { category: 'Aluguel', percentage: 25, amount: 4000 },
  { category: 'Alimentação', percentage: 15, amount: 2000 },
  { category: 'Mercado', percentage: 5, amount: 1500 },
  { category: 'Academia', percentage: 3, amount: 120 },
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
const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
const incomeData = [12000, 12500, 13000, 12800, 13200, 12000, 11500, 12500, 13000, 13500, 14000, 14500]
const expenseData = [10000, 10200, 10500, 9800, 11000, 10000, 10800, 10200, 10500, 10800, 11000, 11200]

export function Dashboard() {
  return (
    <Container>
      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            category={cat.category}
            percentage={cat.percentage}
            amount={cat.amount}
          />
        ))}
      </div>

      {/* Summary Cards and Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Left: Summary Cards */}
        <div className="space-y-4 order-1 lg:order-1">
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

        {/* Center: Chart */}
        <div className="lg:col-span-1 order-3 lg:order-2">
          <AreaChart
            title="Fluxo financeiro"
            incomeData={incomeData}
            expenseData={expenseData}
            months={months}
            maxValue={17500}
          />
        </div>

        {/* Right: Cards List and Upcoming Expenses */}
        <div className="space-y-6 order-2 lg:order-3">
          <CardsList cards={cards} />
          <UpcomingExpenses expenses={upcomingExpenses} />
        </div>
      </div>

      {/* Extrato detalhado */}
      <div className="mt-6">
        <TransactionTable transactions={transactions} />
      </div>
    </Container>
  )
}
