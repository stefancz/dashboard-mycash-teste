import { Input, Button, Avatar, Icon } from '@/components/ui'
import { useSidebar } from '@/hooks/useSidebar'
import { useState } from 'react'
import { TransactionForm } from '@/components/transactions/TransactionForm'

export function HeaderDesktop() {
  const { isExpanded, isDesktop } = useSidebar()
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false)

  // Não renderizar em mobile/tablet
  if (!isDesktop) {
    return null
  }

  return (
    <header
      className={`
        sticky top-0 z-40 bg-white border-b border-gray-200
        transition-all duration-300
      `}
      style={{
        marginLeft: isExpanded ? '256px' : '80px',
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        {/* Left: Search, Filters */}
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Input
              placeholder="Q Pesquisar"
              icon={<Icon name="search" size={20} />}
              className="w-full"
            />
          </div>
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Icon name="filter" size={20} />
          </button>
          <button className="px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm font-medium">
            <Icon name="calendar" size={16} />
            01 Jan - 31 Jan 2026
          </button>
        </div>

        {/* Right: Users, Actions */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <Avatar name="User 1" size="sm" className="border-2 border-white" />
            <Avatar name="User 2" size="sm" className="border-2 border-white" />
            <Avatar name="User 3" size="sm" className="border-2 border-white" />
          </div>
          <Button
            variant="primary"
            icon={<Icon name="plus" size={18} />}
            onClick={() => setIsTransactionFormOpen(true)}
          >
            Nova transação
          </Button>
        </div>
      </div>

      <TransactionForm
        isOpen={isTransactionFormOpen}
        onClose={() => setIsTransactionFormOpen(false)}
      />
    </header>
  )
}
