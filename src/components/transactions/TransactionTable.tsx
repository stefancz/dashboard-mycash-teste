import { TransactionRow } from './TransactionRow'
import { TransactionFilters } from './TransactionFilters'
import { TransactionForm } from './TransactionForm'
import { TransactionExport } from './TransactionExport'
import { Card, Icon, Button, Avatar } from '@/components/ui'
import { Transaction } from '@/types'
import { useState, useMemo } from 'react'
import { formatCurrency, formatDate } from '@/utils/formatters'

interface TransactionTableProps {
  transactions: Transaction[]
}

export function TransactionTable({ transactions: initialTransactions }: TransactionTableProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedAccount, setSelectedAccount] = useState('')
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({ start: '', end: '' })
  const [currentPage, setCurrentPage] = useState(1)
  const [editingTransaction, setEditingTransaction] = useState<Transaction | undefined>()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const itemsPerPage = 5

  const filteredTransactions = useMemo(() => {
    let filtered = initialTransactions

    if (searchQuery) {
      filtered = filtered.filter((t) =>
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((t) =>
        t.category.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    }

    if (selectedType) {
      filtered = filtered.filter((t) => t.type === selectedType)
    }

    if (selectedAccount) {
      filtered = filtered.filter((t) =>
        (t.account && t.account.includes(selectedAccount)) ||
        (t.card && t.card.includes(selectedAccount))
      )
    }

    if (dateRange.start && dateRange.end) {
      filtered = filtered.filter((t) => {
        const transactionDate = new Date(t.date)
        const startDate = new Date(dateRange.start)
        const endDate = new Date(dateRange.end)
        return transactionDate >= startDate && transactionDate <= endDate
      })
    }

    return filtered
  }, [initialTransactions, searchQuery, selectedCategory, selectedType, selectedAccount, dateRange])

  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredTransactions.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredTransactions, currentPage])

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, filteredTransactions.length)

  return (
    <Card padding="lg" className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Icon name="document" size={20} />
          <h2 className="text-lg font-semibold text-gray-900">Extrato detalhado</h2>
        </div>
        <TransactionExport transactions={filteredTransactions} />
      </div>

      {/* Filters */}
      <TransactionFilters
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
        onAccountChange={setSelectedAccount}
        onDateRangeChange={(start, end) => setDateRange({ start, end })}
      />

      {/* Table - Mobile: Cards, Desktop: Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Membro
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Datas
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Descrição
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Categorias
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Conta/cartão
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Parcelas
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Valor
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <TransactionRow
                  transaction={transaction}
                  onEdit={(t) => {
                    setEditingTransaction(t)
                    setIsFormOpen(true)
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Card View */}
      <div className="md:hidden space-y-4">
        {paginatedTransactions.map((transaction) => {
          const isExpense = transaction.type === 'expense'
          return (
            <div
              key={transaction.id}
              className="p-4 bg-white rounded-lg border border-gray-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Avatar name={transaction.description} size="sm" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {transaction.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDate(transaction.date)}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-base font-semibold ${
                    isExpense ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {isExpense ? '-' : '+'}
                  {formatCurrency(transaction.amount)}
                </span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoria:</span>
                  <span className="text-gray-900">{transaction.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conta/Cartão:</span>
                  <span className="text-gray-900">
                    {transaction.card || transaction.account || '-'}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Mostrando {startItem} a {endItem} de {filteredTransactions.length}
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <Icon name="arrowRight" size={16} className="rotate-180" />
          </Button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = currentPage <= 3 ? i + 1 : currentPage - 2 + i
            if (page > totalPages) return null
            return (
              <Button
                key={page}
                variant={currentPage === page ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="min-w-[40px]"
              >
                {page}
              </Button>
            )
          })}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>
      </div>

      <TransactionForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setEditingTransaction(undefined)
        }}
        initialTransaction={editingTransaction}
      />
    </Card>
  )
}
