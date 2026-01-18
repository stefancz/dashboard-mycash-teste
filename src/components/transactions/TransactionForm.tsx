import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Modal, Button, FormInput, FormSelect } from '@/components/ui'
import { transactionSchema, TransactionFormData } from '@/utils/validations'
import { useTransactions } from '@/hooks/useTransactions'
import { useToastContext } from '@/contexts/ToastContext'
import { useState, useEffect } from 'react'
import { Transaction } from '@/types'

interface TransactionFormProps {
  isOpen: boolean
  onClose: () => void
  initialTransaction?: Transaction
}

const categories = [
  { value: 'Aluguel', label: 'Aluguel' },
  { value: 'Alimentação', label: 'Alimentação' },
  { value: 'Mercado', label: 'Mercado' },
  { value: 'Academia', label: 'Academia' },
  { value: 'Manutenção', label: 'Manutenção' },
  { value: 'Lazer', label: 'Lazer' },
  { value: 'Transporte', label: 'Transporte' },
  { value: 'Saúde', label: 'Saúde' },
  { value: 'Outros', label: 'Outros' },
]

export function TransactionForm({ isOpen, onClose, initialTransaction }: TransactionFormProps) {
  const { addTransaction, updateTransaction, refetch } = useTransactions()
  const toast = useToastContext()
  const [loading, setLoading] = useState(false)
  const isEditing = !!initialTransaction

  const methods = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      description: '',
      amount: 0,
      type: 'expense',
      category: '',
      date: new Date().toISOString().split('T')[0],
      account: '',
      card: '',
      installments: '',
    },
  })

  useEffect(() => {
    if (initialTransaction) {
      methods.reset({
        description: initialTransaction.description,
        amount: initialTransaction.amount,
        type: initialTransaction.type,
        category: initialTransaction.category,
        date: initialTransaction.date,
        account: initialTransaction.account || '',
        card: initialTransaction.card || '',
        installments: initialTransaction.installments || '',
      })
    } else {
      methods.reset({
        description: '',
        amount: 0,
        type: 'expense',
        category: '',
        date: new Date().toISOString().split('T')[0],
        account: '',
        card: '',
        installments: '',
      })
    }
  }, [initialTransaction, isOpen, methods])

  const onSubmit = async (data: TransactionFormData) => {
    setLoading(true)
    try {
      if (isEditing && initialTransaction) {
        await updateTransaction(initialTransaction.id, data)
        toast.success('Transação atualizada com sucesso!')
      } else {
        await addTransaction(data)
        toast.success('Transação criada com sucesso!')
      }
      methods.reset()
      onClose()
      refetch()
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'creating'} transaction:`, error)
      toast.error(`Erro ao ${isEditing ? 'atualizar' : 'criar'} transação. Tente novamente.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? 'Editar Transação' : 'Nova Transação'}
      size="md"
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            name="description"
            label="Descrição"
            placeholder="Ex: Conta de luz"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="amount"
              label="Valor"
              type="number"
              step="0.01"
              placeholder="0.00"
              required
            />

            <FormSelect
              name="type"
              label="Tipo"
              options={[
                { value: 'income', label: 'Receita' },
                { value: 'expense', label: 'Despesa' },
              ]}
              required
            />
          </div>

          <FormSelect
            name="category"
            label="Categoria"
            options={categories}
            placeholder="Selecione uma categoria"
            required
          />

          <FormInput
            name="date"
            label="Data"
            type="date"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="account"
              label="Conta"
              placeholder="Ex: Conta corrente"
            />

            <FormInput
              name="card"
              label="Cartão"
              placeholder="Ex: Cartão XP"
            />
          </div>

          <FormInput
            name="installments"
            label="Parcelas"
            placeholder="Ex: 1/3"
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
