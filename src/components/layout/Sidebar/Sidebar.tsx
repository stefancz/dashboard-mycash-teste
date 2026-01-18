import { NavLink } from './NavLink'
import { UserProfile } from './UserProfile'
import { Icon } from '@/components/ui'
import { useSidebar } from '@/hooks/useSidebar'

export function Sidebar() {
  const { isExpanded, isDesktop, toggle } = useSidebar()

  // Não renderizar em mobile/tablet
  if (!isDesktop) {
    return null
  }

  return (
    <aside
      className={`
        fixed left-0 top-0 h-full bg-white border-r border-gray-200
        flex flex-col transition-all duration-300 z-50
        ${isExpanded ? 'w-64' : 'w-20'}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        {isExpanded && (
          <h1 className="text-xl font-bold text-gray-900">Mycash+</h1>
        )}
        <button
          onClick={toggle}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <Icon name="filter" size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <NavLink to="/" icon="home" collapsed={!isExpanded}>
          Home
        </NavLink>
        <NavLink to="/transactions" icon="document" collapsed={!isExpanded}>
          Transações
        </NavLink>
        <NavLink to="/cards" icon="card" collapsed={!isExpanded}>
          Cartões
        </NavLink>
        <NavLink to="/profile" icon="home" collapsed={!isExpanded}>
          Perfil
        </NavLink>
        <NavLink to="/settings" icon="filter" collapsed={!isExpanded}>
          Configurações
        </NavLink>
      </nav>

      {/* User Profile */}
      <UserProfile
        name="Lucas Marte"
        email="lucasmarte@gmail.com"
        collapsed={!isExpanded}
      />
    </aside>
  )
}
