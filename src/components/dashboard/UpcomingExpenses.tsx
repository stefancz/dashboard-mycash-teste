import { Card } from '@/components/ui'
import { Icon } from '@/components/ui'
import { UpcomingExpense } from './UpcomingExpense'

interface Expense {
  id: string
  name: string
  amount: number
  dueDate: string
  paymentMethod: string
  paid?: boolean
}

interface UpcomingExpensesProps {
  expenses: Expense[]
  onTogglePaid?: (id: string) => void
}

export function UpcomingExpenses({ expenses, onTogglePaid }: UpcomingExpensesProps) {
  return (
    <Card padding="lg" className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Icon name="calendar" size={20} />
          <h3 className="text-lg font-semibold text-text-primary">Próximas despesas</h3>
        </div>
        <button className="p-2 rounded-md hover:bg-background-hover transition-colors">
          <Icon name="plus" size={16} />
        </button>
      </div>

      <div className="space-y-0">
        {expenses.slice(0, 5).map((expense) => (
          <UpcomingExpense
            key={expense.id}
            description={expense.name}
            amount={expense.amount}
            dueDate={`Vence dia ${expense.dueDate}`}
            account={expense.paymentMethod}
            isPaid={expense.paid || false}
            onTogglePaid={onTogglePaid ? () => onTogglePaid(expense.id) : undefined}
          />
        ))}
      </div>
    </Card>
  )
}
