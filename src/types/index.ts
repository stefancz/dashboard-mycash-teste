// Base types - will be expanded in future prompts

export type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

export type Transaction = {
  id: string
  description: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: string
  account?: string
  card?: string
  installments?: string
}

export type Card = {
  id: string
  name: string
  brand: 'nubank' | 'inter' | 'picpay'
  lastDigits: string
  amount: number
  dueDate: string
}
