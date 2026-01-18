import { Container } from '@/components/layout/Container'
import { Card as UICard, Button, Icon, Dialog } from '@/components/ui'
import { CardForm } from '@/components/cards/CardForm'
import { useCards } from '@/hooks/useCards'
import { formatCurrency, maskCardNumber } from '@/utils/formatters'
import { useState } from 'react'
import { Card } from '@/types'

export function Cards() {
  const { cards, loading, deleteCard, refetch } = useCards()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCard, setEditingCard] = useState<Card | undefined>()
  const [deletingCard, setDeletingCard] = useState<Card | undefined>()
  const [deleteLoading, setDeleteLoading] = useState(false)

  if (loading) {
    return (
      <Container>
        <div className="text-center py-12">
          <p className="text-gray-600">Carregando cartões...</p>
        </div>
      </Container>
    )
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

  return (
    <Container>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Cartões</h1>
        <Button
          variant="primary"
          icon={<Icon name="plus" size={18} />}
          onClick={() => {
            setEditingCard(undefined)
            setIsFormOpen(true)
          }}
        >
          Novo cartão
        </Button>
      </div>

      {cards.length === 0 ? (
        <UICard padding="lg" className="text-center py-12">
          <Icon name="card" size={48} className="mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600 mb-4">Você ainda não tem cartões cadastrados</p>
          <Button variant="primary" icon={<Icon name="plus" size={18} />}>
            Adicionar primeiro cartão
          </Button>
        </UICard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <UICard key={card.id} padding="lg" className="hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full ${brandColors[card.brand]} flex items-center justify-center`}>
                  <span className="text-white text-lg font-bold">
                    {brandNames[card.brand].charAt(0)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setEditingCard(card)
                      setIsFormOpen(true)
                    }}
                    aria-label="Editar cartão"
                  >
                    <Icon name="search" size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDeletingCard(card)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    aria-label="Excluir cartão"
                  >
                    <Icon name="filter" size={16} />
                  </Button>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {brandNames[card.brand]}
              </h3>
              
              <p className="text-2xl font-bold text-gray-900 mb-4">
                {formatCurrency(card.amount)}
              </p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Cartão:</span>
                  <span className="font-medium">{maskCardNumber(card.lastDigits)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vencimento:</span>
                  <span className="font-medium">Dia {card.dueDate}</span>
                </div>
              </div>
          </UICard>
        ))}
      </div>
    )}

      <CardForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setEditingCard(undefined)
        }}
        initialCard={editingCard}
      />

      <Dialog
        isOpen={!!deletingCard}
        onClose={() => setDeletingCard(undefined)}
        onConfirm={async () => {
          if (deletingCard) {
            setDeleteLoading(true)
            try {
              await deleteCard(deletingCard.id)
              setDeletingCard(undefined)
              refetch()
            } catch (error) {
              console.error('Error deleting card:', error)
            } finally {
              setDeleteLoading(false)
            }
          }
        }}
        title="Excluir Cartão"
        message={`Tem certeza que deseja excluir o cartão "${deletingCard?.name}"? Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
        variant="danger"
        loading={deleteLoading}
      />
    </Container>
  )
}
