import { useState, useEffect } from 'react'
import { supabase } from '@/services/api'
import { Transaction } from '@/types'

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    try {
      setLoading(true)
      // Get current user
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        setLoading(false)
        return
      }

      // Fetch transactions
      const { data, error: fetchError } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false })

      if (fetchError) throw fetchError

      // Transform to Transaction type
      const transformedData: Transaction[] = (data || []).map((item) => ({
        id: item.id,
        description: item.description,
        amount: item.amount,
        type: item.type,
        category: item.category,
        date: item.date,
        account: item.account,
        card: item.card,
        installments: item.installments,
      }))

      setTransactions(transformedData)
      setError(null)
    } catch (err) {
      setError(err as Error)
      console.error('Error fetching transactions:', err)
    } finally {
      setLoading(false)
    }
  }

  const addTransaction = async (transaction: Omit<Transaction, 'id'>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('User not authenticated')

      const { data, error: insertError } = await supabase
        .from('transactions')
        .insert({
          description: transaction.description,
          amount: transaction.amount,
          type: transaction.type,
          category: transaction.category,
          date: transaction.date,
          account: transaction.account,
          card: transaction.card,
          installments: transaction.installments,
          user_id: user.id,
        })
        .select()
        .single()

      if (insertError) throw insertError

      // Refresh transactions
      await fetchTransactions()
      return data
    } catch (err) {
      console.error('Error adding transaction:', err)
      throw err
    }
  }

  const updateTransaction = async (id: string, transaction: Partial<Omit<Transaction, 'id'>>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('User not authenticated')

      const { data, error: updateError } = await supabase
        .from('transactions')
        .update({
          description: transaction.description,
          amount: transaction.amount,
          type: transaction.type,
          category: transaction.category,
          date: transaction.date,
          account: transaction.account,
          card: transaction.card,
          installments: transaction.installments,
        })
        .eq('id', id)
        .eq('user_id', user.id)
        .select()
        .single()

      if (updateError) throw updateError

      // Refresh transactions
      await fetchTransactions()
      return data
    } catch (err) {
      console.error('Error updating transaction:', err)
      throw err
    }
  }

  const deleteTransaction = async (id: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('User not authenticated')

      const { error: deleteError } = await supabase
        .from('transactions')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id)

      if (deleteError) throw deleteError

      // Refresh transactions
      await fetchTransactions()
    } catch (err) {
      console.error('Error deleting transaction:', err)
      throw err
    }
  }

  return {
    transactions,
    loading,
    error,
    refetch: fetchTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  }
}
