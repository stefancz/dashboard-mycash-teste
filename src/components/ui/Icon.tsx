import { HTMLAttributes } from 'react'

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: number
}

// Simple icon component - can be extended with react-icons or similar library
export function Icon({
  name,
  size = 20,
  className = '',
  ...props
}: IconProps) {
  // Placeholder icons using Unicode symbols
  // In production, replace with actual icon library (react-icons, heroicons, etc.)
  const icons: Record<string, string> = {
    home: '🏠',
    card: '💳',
    search: '🔍',
    calendar: '📅',
    plus: '+',
    arrowUp: '↑',
    arrowDown: '↓',
    dollar: '$',
    chart: '📊',
    document: '📄',
    checkmark: '✓',
    filter: '☰',
    arrowRight: '→',
  }
  
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size, fontSize: size }}
      {...props}
    >
      {icons[name] || '•'}
    </span>
  )
}
