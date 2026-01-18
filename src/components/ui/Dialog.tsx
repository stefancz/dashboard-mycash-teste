import { ReactNode } from 'react'
import { Modal } from './Modal'
import { Button } from './Button'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
  title: string
  message: ReactNode
  confirmText?: string
  cancelText?: string
  variant?: 'danger' | 'warning' | 'info'
  loading?: boolean
}

export function Dialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  variant = 'info',
  loading = false,
}: DialogProps) {
  const variantColors = {
    danger: 'text-red-600',
    warning: 'text-orange-600',
    info: 'text-blue-600',
  }

  const confirmVariants = {
    danger: 'bg-red-600 hover:bg-red-700',
    warning: 'bg-orange-600 hover:bg-orange-700',
    info: 'bg-blue-600 hover:bg-blue-700',
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      showCloseButton={!loading}
    >
      <div className="space-y-4">
        <div className={`text-sm ${variantColors[variant]}`}>{message}</div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={onClose}
            disabled={loading}
          >
            {cancelText}
          </Button>
          {onConfirm && (
            <Button
              variant="primary"
              onClick={onConfirm}
              disabled={loading}
              className={confirmVariants[variant]}
            >
              {loading ? 'Processando...' : confirmText}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  )
}
