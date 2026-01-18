import { formatCurrency } from '@/utils/formatters'
import { Icon } from '@/components/ui'

interface UpcomingExpenseProps {
  description: string
  amount: number
  dueDate: string
  account: string
  isPaid: boolean
  onTogglePaid?: () => void
}

export function UpcomingExpense({ 
  description, 
  amount, 
  dueDate, 
  account, 
  isPaid,
  onTogglePaid 
}: UpcomingExpenseProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <div className="flex-1">
        <p className="text-sm font-semibold text-text-primary">{description}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-text-secondary">{dueDate}</span>
          <span className="text-xs text-text-secondary">•</span>
          <span className="text-xs text-text-secondary">{account}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-base font-bold text-text-primary">
          {formatCurrency(amount)}
        </p>
        <button
          onClick={onTogglePaid}
          className={`h-6 w-6 rounded-full border-2 transition-all flex items-center justify-center ${
            isPaid
              ? 'bg-green-600 border-green-600 text-white'
              : 'border-gray-400 hover:border-green-600'
          }`}
        >
          {isPaid && <Icon name="checkmark" size={14} />}
        </button>
      </div>
    </div>
  )
}
