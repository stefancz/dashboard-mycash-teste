import { HTMLAttributes, ReactNode } from 'react'
import { Icon } from '@/components/ui'

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function Drawer({ isOpen, onClose, children, className = '' }: DrawerProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`
          fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${className}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Mycash+</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <Icon name="filter" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          {children}
        </div>
      </div>
    </>
  )
}
