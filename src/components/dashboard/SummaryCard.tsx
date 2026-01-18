import { Card } from '@/components/ui'
import { Icon } from '@/components/ui'
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
    default: 'text-text-primary',
    success: 'text-text-primary', // Receitas em preto conforme Enhance
    error: 'text-text-primary', // Despesas em preto conforme Enhance
    info: 'text-blue-500', // Saldo em azul conforme Enhance
  }

  const iconColors = {
    default: 'text-text-primary',
    success: 'text-green-500', // ArrowDown verde
    error: 'text-red-600', // ArrowUp vermelho
    info: 'text-blue-500', // Dollar azul
  }

  return (
    <Card padding="lg" className="flex flex-col justify-center gap-6 sm:gap-8">
      <div className={`flex items-center gap-2 ${iconColors[variant]}`}>
        <Icon name={icon} size={24} />
        <span className="text-base sm:text-lg text-text-primary">{label}</span>
      </div>
      <p className={`text-2xl sm:text-3xl font-bold ${variants[variant]}`}>
        {formatCurrency(amount)}
      </p>
    </Card>
  )
}
