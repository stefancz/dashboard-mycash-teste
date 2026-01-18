import { Card, ProgressCircle } from '@/components/ui'
import { formatCurrency } from '@/utils/formatters'

interface CategoryCardProps {
  category: string
  percentage: number
  amount: number
}

export function CategoryCard({ category, percentage, amount }: CategoryCardProps) {
  return (
    <Card padding="md" className="flex flex-col items-center text-center">
      <ProgressCircle percentage={percentage} size={80} color="var(--lime-500)" />
      <h3 className="mt-4 text-base font-semibold text-gray-900">{category}</h3>
      <p className="mt-1 text-xl font-bold text-gray-900">
        {formatCurrency(amount)}
      </p>
    </Card>
  )
}
