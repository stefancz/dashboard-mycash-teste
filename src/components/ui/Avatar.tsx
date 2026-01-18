import { HTMLAttributes } from 'react'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  className = '',
  ...props
}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  }
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }
  
  return (
    <div
      className={`
        flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-semibold
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || name} className="w-full h-full rounded-full object-cover" />
      ) : (
        <span>{name ? getInitials(name) : '?'}</span>
      )}
    </div>
  )
}
