import { HTMLAttributes } from 'react'

interface ProgressCircleProps extends HTMLAttributes<HTMLDivElement> {
  percentage: number
  size?: number
  strokeWidth?: number
  color?: string
}

export function ProgressCircle({
  percentage,
  size = 60,
  strokeWidth = 4,
  color = 'var(--lime-500)',
  className = '',
  ...props
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference
  
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--gray-100)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      <span className="absolute text-sm font-bold text-gray-900">
        {percentage}%
      </span>
    </div>
  )
}
