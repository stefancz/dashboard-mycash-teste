import { formatCurrency } from '@/utils/formatters'

interface AccountCardProps {
  name: string
  balance: number
  dueDate: string
  lastDigits: string
  logo?: string
  color?: string
}

const brandColors: Record<string, string> = {
  nubank: 'var(--purple-500)',
  inter: 'var(--orange-500)',
  picpay: 'var(--green-500)',
}

export function AccountCard({ name, balance, dueDate, lastDigits, logo, color }: AccountCardProps) {
  // Determinar cor baseada no nome se não fornecido
  const cardColor = color || brandColors[name.toLowerCase()] || 'var(--gray-500)'

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        {cardColor && (
          <div 
            className="w-2 h-2 rounded-sm shrink-0"
            style={{ backgroundColor: cardColor }}
          />
        )}
        {logo ? (
          <img 
            src={logo} 
            alt={name} 
            className="w-6 h-6 object-contain"
          />
        ) : (
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-primary">{name}</span>
          <span className="text-xs text-text-secondary">{dueDate}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-base font-bold text-text-primary">
            {formatCurrency(balance)}
          </p>
          <p className="text-xs text-text-secondary">**** {lastDigits}</p>
        </div>
      </div>
    </div>
  )
}
