import { formatCurrency } from '@/utils/formatters'

interface BudgetCardProps {
  category: string
  spent: number
  allocated: number
}

export function BudgetCard({ category, spent, allocated }: BudgetCardProps) {
  const percentage = allocated > 0 ? Math.round((spent / allocated) * 100) : 0
  const circumference = 2 * Math.PI * 32 // radius = 32
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="bg-background-card flex-1 min-h-0 min-w-0 relative rounded-card border border-border">
      <div className="flex flex-col items-center justify-center size-full p-6 gap-3">
        {/* Circular Progress */}
        <div className="relative w-18 h-18">
          <svg className="w-full h-full -rotate-90">
            {/* Background circle */}
            <circle
              cx="36"
              cy="36"
              r="32"
              fill="none"
              stroke="var(--gray-100)"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="36"
              cy="36"
              r="32"
              fill="none"
              stroke="var(--lime-400)"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-normal text-text-primary">{percentage}%</span>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <p className="text-sm font-normal leading-5 text-text-primary text-center">
            {category}
          </p>
          <p className="text-xl font-bold leading-7 text-text-primary text-center">
            {formatCurrency(spent)}
          </p>
        </div>
      </div>
    </div>
  )
}
