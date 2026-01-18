import { SelectHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface FormSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name'> {
  name: string
  label?: string
  options: Array<{ value: string; label: string }>
  placeholder?: string
}

export function FormSelect({ name, label, options, placeholder, ...props }: FormSelectProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-900 mb-1.5">
          {label}
        </label>
      )}
      <select
        {...register(name)}
        className={`
          w-full rounded-md border bg-white px-4 py-3
          text-base text-gray-900
          focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-0
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200'}
        `}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1.5 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
