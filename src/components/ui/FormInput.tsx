import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from './Input'

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: string
  label?: string
  icon?: React.ReactNode
}

export function FormInput({ name, label, icon, ...props }: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined

  return (
    <Input
      {...register(name)}
      label={label}
      error={error}
      icon={icon}
      {...props}
    />
  )
}
