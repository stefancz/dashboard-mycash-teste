import { Container } from '@/components/layout/Container'
import { Card, Button, FormInput } from '@/components/ui'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { profileSchema, changePasswordSchema, ProfileFormData, ChangePasswordFormData } from '@/utils/validations'
import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'
import { useToastContext } from '@/contexts/ToastContext'

export function Settings() {
  const { user } = useAuth()
  const toast = useToastContext()
  const [loading, setLoading] = useState(false)

  const profileForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  })

  const passwordForm = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onProfileSubmit = async (_data: ProfileFormData) => {
    setLoading(true)
    try {
      // Aqui integraria com Supabase para atualizar perfil
      await new Promise((resolve) => setTimeout(resolve, 500))
      toast.success('Perfil atualizado com sucesso!')
    } catch (error) {
      toast.error('Erro ao atualizar perfil. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const onPasswordSubmit = async (_data: ChangePasswordFormData) => {
    setLoading(true)
    try {
      // Aqui integraria com Supabase Auth para alterar senha
      await new Promise((resolve) => setTimeout(resolve, 500))
      toast.success('Senha alterada com sucesso!')
      passwordForm.reset()
    } catch (error) {
      toast.error('Erro ao alterar senha. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Configurações</h1>

      <div className="space-y-6">
        {/* Preferências de Exibição */}
        <Card padding="lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Preferências de Exibição</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Moeda
              </label>
              <select
                defaultValue="BRL"
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
              >
                <option value="BRL">Real Brasileiro (R$)</option>
                <option value="USD">Dólar Americano ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Formato de Data
              </label>
              <select
                defaultValue="pt-BR"
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
              >
                <option value="pt-BR">DD/MM/AAAA (Brasil)</option>
                <option value="en-US">MM/DD/YYYY (EUA)</option>
                <option value="en-GB">DD/MM/YYYY (Reino Unido)</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Tema Escuro
                </label>
                <p className="text-sm text-gray-600">
                  Ativar tema escuro (em desenvolvimento)
                </p>
              </div>
              <button
                disabled
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-not-allowed rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out"
                aria-label="Tema escuro"
              >
                <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
              </button>
            </div>
          </div>
        </Card>

        {/* Perfil */}
        <Card padding="lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações do Perfil</h2>
          
          <FormProvider {...profileForm}>
            <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
              <FormInput
                name="name"
                label="Nome"
                placeholder="Seu nome"
                required
              />

              <FormInput
                name="email"
                label="Email"
                type="email"
                placeholder="seu@email.com"
                disabled
              />

              <Button
                type="submit"
                variant="primary"
                disabled={loading}
              >
                {loading ? 'Salvando...' : 'Salvar alterações'}
              </Button>
            </form>
          </FormProvider>
        </Card>

        {/* Alterar Senha */}
        <Card padding="lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Alterar Senha</h2>
          
          <FormProvider {...passwordForm}>
            <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
              <FormInput
                name="currentPassword"
                label="Senha Atual"
                type="password"
                placeholder="••••••••"
                required
              />

              <FormInput
                name="newPassword"
                label="Nova Senha"
                type="password"
                placeholder="••••••••"
                required
              />

              <FormInput
                name="confirmPassword"
                label="Confirmar Nova Senha"
                type="password"
                placeholder="••••••••"
                required
              />

              <Button
                type="submit"
                variant="primary"
                disabled={loading}
              >
                {loading ? 'Alterando...' : 'Alterar senha'}
              </Button>
            </form>
          </FormProvider>
        </Card>

        {/* Notificações */}
        <Card padding="lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notificações</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Notificações por Email
                </label>
                <p className="text-sm text-gray-600">
                  Receber notificações importantes por email
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-lime-500 focus:ring-lime-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Lembretes de Vencimento
                </label>
                <p className="text-sm text-gray-600">
                  Receber alertas sobre despesas próximas do vencimento
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-lime-500 focus:ring-lime-500"
              />
            </div>
          </div>
        </Card>
      </div>
    </Container>
  )
}
