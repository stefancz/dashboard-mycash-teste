import { useState } from 'react'
import { Input } from './Input'
import { Icon } from './Icon'

interface DateRangePickerProps {
  startDate?: string
  endDate?: string
  onChange: (startDate: string, endDate: string) => void
  className?: string
}

export function DateRangePicker({
  startDate,
  endDate,
  onChange,
  className = '',
}: DateRangePickerProps) {
  const [localStartDate, setLocalStartDate] = useState(startDate || '')
  const [localEndDate, setLocalEndDate] = useState(endDate || '')

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLocalStartDate(value)
    if (value && localEndDate) {
      onChange(value, localEndDate)
    }
  }

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLocalEndDate(value)
    if (localStartDate && value) {
      onChange(localStartDate, value)
    }
  }

  const formatDisplayDate = (date: string) => {
    if (!date) return ''
    const d = new Date(date)
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
  }

  const displayValue = localStartDate && localEndDate
    ? `${formatDisplayDate(localStartDate)} - ${formatDisplayDate(localEndDate)}`
    : ''

  return (
    <div className={`relative ${className}`}>
      <Input
        type="date"
        value={localStartDate}
        onChange={handleStartDateChange}
        placeholder="Data inicial"
        icon={<Icon name="calendar" size={18} />}
        className="w-full"
      />
      <Input
        type="date"
        value={localEndDate}
        onChange={handleEndDateChange}
        placeholder="Data final"
        icon={<Icon name="calendar" size={18} />}
        className="w-full mt-2"
      />
      {displayValue && (
        <div className="mt-2 text-sm text-gray-600">
          {displayValue}
        </div>
      )}
    </div>
  )
}
