import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/lib/auth-context'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WechatEntry } from '@/components/WechatEntry'
import { loadWxJSSDK } from '@/lib/wechat'
import { HomePage } from '@/pages/HomePage'
import { PrinciplesPage } from '@/pages/PrinciplesPage'
import { ProductPage } from '@/pages/ProductPage'
import { SuitableChildrenPage } from '@/pages/SuitableChildrenPage'
import { CasePage } from '@/pages/CasePage'
import { AboutPage } from '@/pages/AboutPage'
import { LoginPage } from '@/pages/LoginPage'
import { RegisterPage } from '@/pages/RegisterPage'
import { UserCenterPage } from '@/pages/UserCenterPage'
import { AdminPage } from '@/pages/AdminPage'
import { AdminSetupPage } from '@/pages/AdminSetupPage'

function Sparkles({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
      <path d="M18 14l.7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7L18 14z" />
    </svg>
  )
}

export default function App() {
  useEffect(() => {
    loadWxJSSDK()
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="antialiased min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/principles" element={<PrinciplesPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/suitable-children" element={<SuitableChildrenPage />} />
              <Route path="/case" element={<CasePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/user" element={<UserCenterPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/setup" element={<AdminSetupPage />} />
            </Routes>
          </main>
          <Footer />
          <WechatEntry />

          {/* Mobile floating CTA */}
          <a
            href="/register"
            className="fixed bottom-6 right-6 z-40 md:hidden inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 rounded-full shadow-lg"
          >
            <Sparkles className="h-4 w-4" />
            免费注册
          </a>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
