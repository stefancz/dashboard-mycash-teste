import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@/components/ui'

interface NavLinkProps {
  to: string
  icon: string
  children: ReactNode
  collapsed?: boolean
  className?: string
}

export function NavLink({
  to,
  icon,
  children,
  collapsed = false,
  className = '',
}: NavLinkProps) {
  const location = useLocation()
  const active = location.pathname === to

  return (
    <Link
      to={to}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-all
        ${active 
          ? 'bg-lime-500 text-gray-900' 
          : 'text-gray-700 hover:bg-gray-100'
        }
        ${collapsed ? 'justify-center' : ''}
        ${className}
      `}
    >
      <Icon name={icon} size={20} />
      {!collapsed && <span>{children}</span>}
    </Link>
  )
}
