import { HTMLAttributes, ReactNode } from 'react'
import { useSidebar } from '@/hooks/useSidebar'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({
  children,
  className = '',
  ...props
}: ContainerProps) {
  const { isExpanded, isDesktop } = useSidebar()

  const getMarginLeft = () => {
    if (!isDesktop) return '0px'
    return isExpanded ? '256px' : '80px'
  }

  return (
    <div
      className={`
        min-h-screen bg-gray-50
        transition-all duration-300
        px-4 md:px-6 lg:px-8
        ${className}
      `}
      style={{
        marginLeft: getMarginLeft(),
      }}
      {...props}
    >
      <div className="max-w-[1400px] mx-auto py-8">
        {children}
      </div>
    </div>
  )
}
