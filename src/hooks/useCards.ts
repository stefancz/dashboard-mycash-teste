import { useState, useEffect } from 'react'
import { supabase } from '@/services/api'
import { Card } from '@/types'

export function useCards() {
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchCards()
  }, [])

  const fetchCards = async () => {
    try {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        setLoading(false)
        return
      }

      const { data, error: fetchError } = await supabase
        .from('cards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError

      const transformedData: Card[] = (data || []).map((item) => ({
        id: item.id,
        name: item.name,
        brand: item.brand,
        lastDigits: item.last_digits,
        amount: item.amount,
        dueDate: item.due_date,
      }))

      setCards(transformedData)
      setError(null)
    } catch (err) {
      setError(err as Error)
      console.error('Error fetching cards:', err)
    } finally {
      setLoading(false)
    }
  }

  const addCard = async (card: Omit<Card, 'id'>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('User not authenticated')

      const { data, error: insertError } = await supabase
        .from('cards')
        .insert({
          name: card.name,
          brand: card.brand,
          last_digits: card.lastDigits,
          amount: card.amount,
          due_date: card.dueDate,
          user_id: user.id,
        })
        .select()
        .single()

      if (insertError) throw insertError

      await fetchCards()
      return data
    } catch (err) {
      console.error('Error adding card:', err)
      throw err
    }
  }

  const updateCard = async (id: string, card: Partial<Omit<Card, 'id'>>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('User not authenticated')

      const { data, error: updateError } = await supabase
        .from('cards')
        .update({
          name: card.name,
          brand: card.brand,
          last_digits: card.lastDigits,
          amount: card.amount,
          due_date: card.dueDate,
        })
        .eq('id', id)
        .eq('user_id', user.id)
        .select()
        .single()

      if (updateError) throw updateError

      await fetchCards()
      return data
    } catch (err) {
      console.error('Error updating card:', err)
      throw err
    }
  }

  const deleteCard = async (id: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('User not authenticated')

      const { error: deleteError } = await supabase
        .from('cards')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id)

      if (deleteError) throw deleteError

      await fetchCards()
    } catch (err) {
      console.error('Error deleting card:', err)
      throw err
    }
  }

  return {
    cards,
    loading,
    error,
    refetch: fetchCards,
    addCard,
    updateCard,
    deleteCard,
  }
}
