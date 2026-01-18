import { z } from 'zod'

// Schema de transação
export const transactionSchema = z.object({
  description: z.string().min(1, 'Descrição é obrigatória').max(255, 'Descrição muito longa'),
  amount: z.number().positive('Valor deve ser maior que zero'),
  type: z.enum(['income', 'expense'], {
    message: 'Tipo é obrigatório',
  }),
  category: z.string().min(1, 'Categoria é obrigatória'),
  date: z.string().min(1, 'Data é obrigatória'),
  account: z.string().optional(),
  card: z.string().optional(),
  installments: z.string().optional(),
})

export type TransactionFormData = z.infer<typeof transactionSchema>

// Schema de cartão
export const cardSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  brand: z.enum(['nubank', 'inter', 'picpay'], {
    message: 'Bandeira é obrigatória',
  }),
  lastDigits: z.string().length(4, 'Deve ter 4 dígitos').regex(/^\d+$/, 'Apenas números'),
  amount: z.number().min(0, 'Valor deve ser positivo'),
  dueDate: z.string().min(1, 'Data de vencimento é obrigatória').regex(/^\d{1,2}$/, 'Digite apenas o dia (1-31)'),
})

export type CardFormData = z.infer<typeof cardSchema>

// Schema de login
export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Schema de perfil
export const profileSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
})

export type ProfileFormData = z.infer<typeof profileSchema>

// Schema de alteração de senha
export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Senha atual é obrigatória'),
  newPassword: z.string().min(6, 'Nova senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
})

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>
