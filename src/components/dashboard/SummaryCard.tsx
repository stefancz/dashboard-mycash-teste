import { Card, Icon } from '@/components/ui'
import { formatCurrency } from '@/utils/formatters'

interface SummaryCardProps {
  label: string
  amount: number
  icon: string
  variant?: 'default' | 'success' | 'error' | 'info'
}

export function SummaryCard({
  label,
  amount,
  icon,
  variant = 'default',
}: SummaryCardProps) {
  const variants = {
    default: 'text-gray-900',
    success: 'text-green-600',
    error: 'text-red-600',
    info: 'text-blue-600',
  }

  const iconColors = {
    default: 'text-gray-700',
    success: 'text-green-600',
    error: 'text-red-600',
    info: 'text-blue-600',
  }

  return (
    <Card padding="md" className="flex flex-col">
      <div className={`flex items-center gap-2 ${iconColors[variant]}`}>
        <Icon name={icon} size={20} />
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <p className={`mt-2 text-2xl font-bold ${variants[variant]}`}>
        {formatCurrency(amount)}
      </p>
    </Card>
  )
}
