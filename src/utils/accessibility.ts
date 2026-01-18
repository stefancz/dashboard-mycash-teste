// Utilitários de acessibilidade

/**
 * Foca o primeiro elemento focável dentro de um container
 */
export function focusFirstElement(container: HTMLElement) {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ')

  const firstFocusable = container.querySelector<HTMLElement>(focusableSelectors)
  if (firstFocusable) {
    firstFocusable.focus()
  }
}

/**
 * Foca o último elemento focável dentro de um container
 */
export function focusLastElement(container: HTMLElement) {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ')

  const focusable = Array.from(
    container.querySelectorAll<HTMLElement>(focusableSelectors)
  )
  if (focusable.length > 0) {
    focusable[focusable.length - 1].focus()
  }
}

/**
 * Trava o foco dentro de um container (para modais)
 */
export function trapFocus(container: HTMLElement) {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ')

  const focusable = Array.from(
    container.querySelectorAll<HTMLElement>(focusableSelectors)
  )

  if (focusable.length === 0) return

  const firstElement = focusable[0]
  const lastElement = focusable[focusable.length - 1]

  const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  container.addEventListener('keydown', handleTab)
  firstElement.focus()

  return () => {
    container.removeEventListener('keydown', handleTab)
  }
}

/**
 * Formata valor monetário para leitores de tela
 */
export function formatCurrencyForScreenReader(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value)
}
