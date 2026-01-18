import { useState } from 'react'
import { Button, Icon, Dialog } from '@/components/ui'
import { useTransactions } from '@/hooks/useTransactions'
import { Transaction } from '@/types'

interface TransactionRowActionsProps {
  transaction: Transaction
  onEdit: (transaction: Transaction) => void
}

export function TransactionRowActions({ transaction, onEdit }: TransactionRowActionsProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [loading, setLoading] = useState(false)
  const { deleteTransaction, refetch } = useTransactions()

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteTransaction(transaction.id)
      setShowDeleteDialog(false)
      refetch()
    } catch (error) {
      console.error('Error deleting transaction:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEdit(transaction)}
          aria-label="Editar transação"
        >
          <Icon name="search" size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowDeleteDialog(true)}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
          aria-label="Excluir transação"
        >
          <Icon name="filter" size={16} />
        </Button>
      </div>

      <Dialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDelete}
        title="Excluir Transação"
        message={`Tem certeza que deseja excluir a transação "${transaction.description}"? Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
        variant="danger"
        loading={loading}
      />
    </>
  )
}
