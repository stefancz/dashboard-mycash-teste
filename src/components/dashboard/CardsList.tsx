import { Card, Icon } from '@/components/ui'
import { formatCurrency, maskCardNumber } from '@/utils/formatters'
import { Card as CardType } from '@/types'

interface CardsListProps {
  cards: CardType[]
}

const brandColors: Record<string, string> = {
  nubank: 'bg-purple-500',
  inter: 'bg-orange-500',
  picpay: 'bg-green-500',
}

const brandNames: Record<string, string> = {
  nubank: 'Nubank',
  inter: 'Inter',
  picpay: 'Picpay',
}

export function CardsList({ cards }: CardsListProps) {
  return (
    <Card padding="lg" className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon name="card" size={20} />
          <h2 className="text-lg font-semibold text-gray-900">Cards & contas</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Icon name="plus" size={18} />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Icon name="arrowRight" size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${brandColors[card.brand]} flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">
                  {brandNames[card.brand].charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{brandNames[card.brand]}</p>
                <p className="text-xs text-gray-500">{formatCurrency(card.amount)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Vence dia {card.dueDate}</p>
              <p className="text-xs text-gray-500">{maskCardNumber(card.lastDigits)}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
