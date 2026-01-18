import { Card } from '@/components/ui'
import { Icon } from '@/components/ui'
import { AccountCard } from './AccountCard'
import { Card as CardType } from '@/types'

interface CardsListProps {
  cards: CardType[]
}

const brandColors: Record<string, string> = {
  nubank: 'var(--purple-500)',
  inter: 'var(--orange-500)',
  picpay: 'var(--green-500)',
}

export function CardsList({ cards }: CardsListProps) {
  return (
    <Card padding="lg" className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Icon name="card" size={20} />
          <h3 className="text-lg font-semibold text-text-primary">Cards & contas</h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-3 rounded-md hover:bg-background-hover transition-colors">
            <Icon name="plus" size={16} />
          </button>
          <button className="p-3 rounded-md hover:bg-background-hover transition-colors">
            <Icon name="arrowRight" size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-1">
        {cards.map((card) => (
          <AccountCard
            key={card.id}
            name={card.name}
            balance={card.amount}
            dueDate={`Vence dia ${card.dueDate}`}
            lastDigits={card.lastDigits}
            color={brandColors[card.brand]}
          />
        ))}
      </div>
    </Card>
  )
}
