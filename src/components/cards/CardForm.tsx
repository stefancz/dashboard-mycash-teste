import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Modal, Button, FormInput, FormSelect } from '@/components/ui'
import { cardSchema, CardFormData } from '@/utils/validations'
import { useCards } from '@/hooks/useCards'
import { useState, useEffect } from 'react'
import { Card } from '@/types'

interface CardFormProps {
  isOpen: boolean
  onClose: () => void
  initialCard?: Card
}

export function CardForm({ isOpen, onClose, initialCard }: CardFormProps) {
  const { addCard, updateCard, refetch } = useCards()
  const [loading, setLoading] = useState(false)
  const isEditing = !!initialCard

  const methods = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      name: '',
      brand: 'nubank',
      lastDigits: '',
      amount: 0,
      dueDate: '',
    },
  })

  useEffect(() => {
    if (initialCard) {
      methods.reset({
        name: initialCard.name,
        brand: initialCard.brand,
        lastDigits: initialCard.lastDigits,
        amount: initialCard.amount,
        dueDate: initialCard.dueDate,
      })
    } else {
      methods.reset({
        name: '',
        brand: 'nubank',
        lastDigits: '',
        amount: 0,
        dueDate: '',
      })
    }
  }, [initialCard, isOpen, methods])

  const onSubmit = async (data: CardFormData) => {
    setLoading(true)
    try {
      if (isEditing && initialCard) {
        await updateCard(initialCard.id, {
          name: data.name,
          brand: data.brand,
          lastDigits: data.lastDigits,
          amount: data.amount,
          dueDate: data.dueDate,
        })
      } else {
        await addCard({
          name: data.name,
          brand: data.brand,
          lastDigits: data.lastDigits,
          amount: data.amount,
          dueDate: data.dueDate,
        })
      }
      methods.reset()
      onClose()
      refetch()
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'creating'} card:`, error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? 'Editar Cartão' : 'Novo Cartão'}
      size="md"
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            name="name"
            label="Nome do Cartão"
            placeholder="Ex: Nubank"
            required
          />

          <FormSelect
            name="brand"
            label="Bandeira"
            options={[
              { value: 'nubank', label: 'Nubank' },
              { value: 'inter', label: 'Inter' },
              { value: 'picpay', label: 'Picpay' },
            ]}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="lastDigits"
              label="Últimos 4 dígitos"
              placeholder="5897"
              maxLength={4}
              required
            />

            <FormInput
              name="dueDate"
              label="Dia de vencimento"
              placeholder="10"
              maxLength={2}
              required
            />
          </div>

          <FormInput
            name="amount"
            label="Limite/Valor"
            type="number"
            step="0.01"
            placeholder="0.00"
            required
          />

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? 'Salvando...' : isEditing ? 'Atualizar' : 'Criar'}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  )
}
