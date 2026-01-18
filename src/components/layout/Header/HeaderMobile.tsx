import { Button, Icon } from '@/components/ui'
import { Drawer } from './Drawer'
import { NavLink } from '../Sidebar/NavLink'
import { UserProfile } from '../Sidebar/UserProfile'
import { TransactionForm } from '@/components/transactions/TransactionForm'
import { useDrawer } from '@/hooks/useDrawer'
import { useEffect, useState } from 'react'

export function HeaderMobile() {
  const { isOpen, open, close } = useDrawer()
  const [isMobile, setIsMobile] = useState(false)
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Não renderizar em desktop
  if (!isMobile) {
    return null
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: Menu Button */}
          <button
            onClick={open}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <Icon name="filter" size={20} />
          </button>

          {/* Center: Logo */}
          <h1 className="text-lg font-bold text-gray-900">Mycash+</h1>

          {/* Right: Action Button */}
          <Button
            variant="primary"
            size="sm"
            icon={<Icon name="plus" size={16} />}
            onClick={() => setIsTransactionFormOpen(true)}
          >
            Nova transação
          </Button>
        </div>
      </header>

      {/* Drawer Menu */}
      <Drawer isOpen={isOpen} onClose={close}>
        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavLink to="/" icon="home">
            Home
          </NavLink>
          <NavLink to="/transactions" icon="document">
            Transações
          </NavLink>
          <NavLink to="/cards" icon="card">
            Cartões
          </NavLink>
          <NavLink to="/profile" icon="home">
            Perfil
          </NavLink>
          <NavLink to="/settings" icon="filter">
            Configurações
          </NavLink>
        </nav>

        <UserProfile
          name="Lucas Marte"
          email="lucasmarte@gmail.com"
        />
      </Drawer>

      <TransactionForm
        isOpen={isTransactionFormOpen}
        onClose={() => setIsTransactionFormOpen(false)}
      />
    </>
  )
}
