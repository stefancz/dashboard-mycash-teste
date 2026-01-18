import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
import { HeaderDesktop } from '@/components/layout/Header/HeaderDesktop'
import { HeaderMobile } from '@/components/layout/Header/HeaderMobile'
import { ToastProvider } from '@/contexts/ToastContext'
import { lazy, Suspense } from 'react'
import { Dashboard } from '@/pages/Dashboard'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'

// Lazy loading de páginas para code splitting
const Transactions = lazy(() => import('@/pages/Transactions').then(m => ({ default: m.Transactions })))
const Cards = lazy(() => import('@/pages/Cards').then(m => ({ default: m.Cards })))
const Profile = lazy(() => import('@/pages/Profile').then(m => ({ default: m.Profile })))
const Settings = lazy(() => import('@/pages/Settings').then(m => ({ default: m.Settings })))
import { useAuth } from '@/hooks/useAuth'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600">Carregando...</div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <HeaderDesktop />
      <HeaderMobile />
      <main>{children}</main>
    </div>
  )
}

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Carregando...</div></div>}>
                  <Transactions />
                </Suspense>
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cards"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Carregando...</div></div>}>
                  <Cards />
                </Suspense>
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Carregando...</div></div>}>
                  <Profile />
                </Suspense>
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Carregando...</div></div>}>
                  <Settings />
                </Suspense>
              </AppLayout>
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
