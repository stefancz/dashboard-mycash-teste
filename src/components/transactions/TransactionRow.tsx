import { Avatar, Icon } from '@/components/ui'
import { formatCurrency, formatDate } from '@/utils/formatters'
import { Transaction } from '@/types'
import { TransactionRowActions } from './TransactionRowActions'

interface TransactionRowProps {
  transaction: Transaction
  onEdit?: (transaction: Transaction) => void
}

export function TransactionRow({ transaction, onEdit }: TransactionRowProps) {
  const isExpense = transaction.type === 'expense'
  const iconColor = isExpense ? 'text-red-600' : 'text-green-600'

  return (
    <>
      <td className="px-4 py-3">
        <Avatar name={transaction.description} size="sm" />
      </td>
      <td className="px-4 py-3 text-sm text-gray-600">
        {formatDate(transaction.date)}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <span className={iconColor}>
            <Icon name={isExpense ? 'arrowUp' : 'arrowDown'} size={16} />
          </span>
          <span className="text-sm font-medium text-gray-900">
            {transaction.description}
          </span>
        </div>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm text-gray-600">{transaction.category}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm text-gray-600">
          {transaction.card || transaction.account || '-'}
        </span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm text-gray-600">
          {transaction.installments || '-'}
        </span>
      </td>
      <td className="px-4 py-3">
        <span
          className={`text-sm font-semibold ${
            isExpense ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {isExpense ? '-' : '+'}
          {formatCurrency(transaction.amount)}
        </span>
      </td>
      {onEdit && (
        <td className="px-4 py-3">
          <TransactionRowActions transaction={transaction} onEdit={onEdit} />
        </td>
      )}
    </>
  )
}
