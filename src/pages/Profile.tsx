import { Container } from '@/components/layout/Container'
import { Card, Button, Avatar, Input } from '@/components/ui'
import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'

export function Profile() {
  const { user, signOut } = useAuth()
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')

  if (!user) {
    return (
      <Container>
        <p className="text-gray-600">Carregando perfil...</p>
      </Container>
    )
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Perfil</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card padding="lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações Pessoais</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <Avatar name={user.name} size="lg" src={user.avatar} />
              <div>
                <Button variant="secondary" size="sm">
                  Alterar foto
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                label="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
              />

              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                disabled
              />

              <Button variant="primary" className="w-full">
                Salvar alterações
              </Button>
            </div>
          </Card>

          <Card padding="lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Alterar Senha</h2>
            
            <div className="space-y-4">
              <Input
                label="Senha Atual"
                type="password"
                placeholder="••••••••"
              />

              <Input
                label="Nova Senha"
                type="password"
                placeholder="••••••••"
              />

              <Input
                label="Confirmar Nova Senha"
                type="password"
                placeholder="••••••••"
              />

              <Button variant="primary" className="w-full">
                Alterar senha
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card padding="lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Conta</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Membro desde</p>
                <p className="text-sm font-medium text-gray-900">Janeiro 2026</p>
              </div>

              <Button
                variant="ghost"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={signOut}
              >
                Sair da conta
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  )
}
