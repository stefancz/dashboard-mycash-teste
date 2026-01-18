import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
import { HeaderDesktop } from '@/components/layout/Header/HeaderDesktop'
import { HeaderMobile } from '@/components/layout/Header/HeaderMobile'
import { ToastProvider } from '@/contexts/ToastContext'
import { lazy, Suspense } from 'react'
import { Dashboard } from '@/pages/Dashboard'

// Lazy loading de páginas para code splitting
const Transactions = lazy(() => import('@/pages/Transactions').then(m => ({ default: m.Transactions })))
const Cards = lazy(() => import('@/pages/Cards').then(m => ({ default: m.Cards })))
const Profile = lazy(() => import('@/pages/Profile').then(m => ({ default: m.Profile })))
const Settings = lazy(() => import('@/pages/Settings').then(m => ({ default: m.Settings })))

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
        {/* Routes */}
        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route
          path="/transactions"
          element={
            <AppLayout>
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Carregando...</div></div>}>
                <Transactions />
              </Suspense>
            </AppLayout>
          }
        />
        <Route
          path="/cards"
          element={
            <AppLayout>
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Carregando...</div></div>}>
                <Cards />
              </Suspense>
            </AppLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <AppLayout>
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Carregando...</div></div>}>
                <Profile />
              </Suspense>
            </AppLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <AppLayout>
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Carregando...</div></div>}>
                <Settings />
              </Suspense>
            </AppLayout>
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
