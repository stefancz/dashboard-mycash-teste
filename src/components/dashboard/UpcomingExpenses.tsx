import { Card, Icon } from '@/components/ui'
import { formatCurrency } from '@/utils/formatters'

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
}

export function UpcomingExpenses({ expenses }: UpcomingExpensesProps) {
  return (
    <Card padding="lg" className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon name="document" size={20} />
          <h2 className="text-lg font-semibold text-gray-900">Próximas despesas</h2>
        </div>
        <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
          <Icon name="plus" size={18} />
        </button>
      </div>

      <div className="space-y-2">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{expense.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                Vence dia {expense.dueDate} • {expense.paymentMethod}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm font-bold text-gray-900">
                {formatCurrency(expense.amount)}
              </p>
              {expense.paid && (
                <div className="text-green-500">
                  <Icon name="checkmark" size={20} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
