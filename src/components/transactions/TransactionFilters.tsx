import { Input, Icon, Button } from '@/components/ui'
import { DateRangePicker } from '@/components/ui/DateRangePicker'
import { useState, useCallback } from 'react'
import { debounce } from '@/utils/performance'

interface TransactionFiltersProps {
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
  onTypeChange: (type: string) => void
  onDateRangeChange: (startDate: string, endDate: string) => void
  onAccountChange: (account: string) => void
}

export function TransactionFilters({
  onSearch,
  onCategoryChange,
  onTypeChange,
  onDateRangeChange,
  onAccountChange,
}: TransactionFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedAccount, setSelectedAccount] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  // Debounce para otimizar busca
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query)
    }, 300),
    [onSearch]
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    debouncedSearch(query)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value
    setSelectedType(type)
    onTypeChange(type)
  }

  const handleAccountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const account = e.target.value
    setSelectedAccount(account)
    onAccountChange(account)
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('')
    setSelectedType('')
    setSelectedAccount('')
    onSearch('')
    onCategoryChange('')
    onTypeChange('')
    onAccountChange('')
    onDateRangeChange('', '')
  }

  const hasActiveFilters = searchQuery || selectedCategory || selectedType || selectedAccount

  return (
    <div className="space-y-4 mb-4">
      {/* Basic Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Q Buscar lançamentos"
            value={searchQuery}
            onChange={handleSearchChange}
            icon={<Icon name="search" size={18} />}
          />
        </div>
        <div className="sm:w-48">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="
              w-full rounded-md border border-gray-200 bg-white px-4 py-3
              text-base text-gray-900
              focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-0
            "
          >
            <option value="">Todas as categorias</option>
            <option value="Aluguel">Aluguel</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Mercado">Mercado</option>
            <option value="Academia">Academia</option>
            <option value="Manutenção">Manutenção</option>
            <option value="Lazer">Lazer</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div className="sm:w-40">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="
              w-full rounded-md border border-gray-200 bg-white px-4 py-3
              text-base text-gray-900
              focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-0
            "
          >
            <option value="">Todos os tipos</option>
            <option value="expense">Despesas</option>
            <option value="income">Receitas</option>
          </select>
        </div>
        <Button
          variant="ghost"
          size="md"
          onClick={() => setShowAdvanced(!showAdvanced)}
          icon={<Icon name="filter" size={18} />}
        >
          {showAdvanced ? 'Menos' : 'Mais'} filtros
        </Button>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="md"
            onClick={handleClearFilters}
            className="text-red-600 hover:text-red-700"
          >
            Limpar
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Período
            </label>
            <DateRangePicker
              onChange={onDateRangeChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Conta/Cartão
            </label>
            <select
              value={selectedAccount}
              onChange={handleAccountChange}
              className="
                w-full rounded-md border border-gray-200 bg-white px-4 py-3
                text-base text-gray-900
                focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-0
              "
            >
              <option value="">Todas as contas</option>
              <option value="Conta corrente">Conta corrente</option>
              <option value="Cartão XP">Cartão XP</option>
              <option value="Nubank">Nubank</option>
              <option value="Inter">Inter</option>
              <option value="Picpay">Picpay</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

