// Supabase API client
import { createClient } from '@supabase/supabase-js'

// These should be set as environment variables in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (should match your Supabase schema)
export interface Database {
  public: {
    Tables: {
      transactions: {
        Row: {
          id: string
          description: string
          amount: number
          type: 'income' | 'expense'
          category: string
          date: string
          account?: string
          card?: string
          installments?: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          description: string
          amount: number
          type: 'income' | 'expense'
          category: string
          date: string
          account?: string
          card?: string
          installments?: string
          user_id: string
        }
        Update: {
          id?: string
          description?: string
          amount?: number
          type?: 'income' | 'expense'
          category?: string
          date?: string
          account?: string
          card?: string
          installments?: string
        }
      }
      cards: {
        Row: {
          id: string
          name: string
          brand: 'nubank' | 'inter' | 'picpay'
          last_digits: string
          amount: number
          due_date: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          brand: 'nubank' | 'inter' | 'picpay'
          last_digits: string
          amount: number
          due_date: string
          user_id: string
        }
        Update: {
          id?: string
          name?: string
          brand?: 'nubank' | 'inter' | 'picpay'
          last_digits?: string
          amount?: number
          due_date?: string
        }
      }
      users: {
        Row: {
          id: string
          name: string
          email: string
          avatar?: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          avatar?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          avatar?: string
        }
      }
    }
  }
}
