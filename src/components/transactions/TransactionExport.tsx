import { Button, Icon } from '@/components/ui'
import { exportToCSV, exportToPDF } from '@/utils/export'
import { Transaction } from '@/types'
import { useState } from 'react'

interface TransactionExportProps {
  transactions: Transaction[]
}

export function TransactionExport({ transactions }: TransactionExportProps) {
  const [loading, setLoading] = useState<'csv' | 'pdf' | null>(null)

  const handleExportCSV = async () => {
    setLoading('csv')
    try {
      await new Promise((resolve) => setTimeout(resolve, 100)) // Simula processamento
      exportToCSV(transactions)
    } finally {
      setLoading(null)
    }
  }

  const handleExportPDF = async () => {
    setLoading('pdf')
    try {
      await new Promise((resolve) => setTimeout(resolve, 100)) // Simula processamento
      exportToPDF(transactions)
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="secondary"
        size="sm"
        onClick={handleExportCSV}
        disabled={loading === 'csv' || transactions.length === 0}
        icon={<Icon name="document" size={16} />}
      >
        {loading === 'csv' ? 'Exportando...' : 'Exportar CSV'}
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={handleExportPDF}
        disabled={loading === 'pdf' || transactions.length === 0}
        icon={<Icon name="document" size={16} />}
      >
        {loading === 'pdf' ? 'Exportando...' : 'Exportar PDF'}
      </Button>
    </div>
  )
}
