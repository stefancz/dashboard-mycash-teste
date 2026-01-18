import { ReactNode, useEffect } from 'react'
import { Icon } from './Icon'

interface ToastProps {
  id: string
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  onClose: (id: string) => void
  icon?: ReactNode
}

export function Toast({
  id,
  message,
  type = 'info',
  duration = 3000,
  onClose,
  icon,
}: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, id, onClose])

  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-orange-50 border-orange-200 text-orange-800',
  }

  const typeIcons = {
    success: 'checkmark',
    error: 'filter',
    info: 'search',
    warning: 'filter',
  }

  return (
    <div
        className={`
        flex items-center gap-3 p-4 rounded-lg border shadow-lg
        min-w-[300px] max-w-[400px]
        ${typeStyles[type]}
      `}
    >
      {icon || <Icon name={typeIcons[type]} size={20} />}
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Fechar"
      >
        <Icon name="filter" size={18} />
      </button>
    </div>
  )
}
