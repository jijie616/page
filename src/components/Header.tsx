import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { Menu, X, Sparkles, User, LogOut, Shield } from 'lucide-react'

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/principles', label: '学习原理' },
  { href: '/product', label: '产品中心' },
  { href: '/suitable-children', label: '适合孩子' },
  { href: '/case', label: '学员案例' },
  { href: '/about', label: '关于我们' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { user, logout, isAdmin } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:block">
            新概念AI背单词
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-primary bg-muted'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              {isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <Shield className="h-3 w-3" />
                  管理后台
                </Link>
              )}
              <Link
                to="/user"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-3.5 w-3.5 text-primary" />
                </div>
                <span>{user.name}</span>
              </Link>
              <button
                onClick={logout}
                className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                title="退出登录"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">登录</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">注册</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[32rem] border-t' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
          {navLinks.map(link => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-primary bg-muted'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          {/* Mobile auth */}
          <div className="border-t mt-2 pt-2">
            {user ? (
              <>
                <Link
                  to="/user"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium rounded-md transition-colors flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-muted"
                >
                  <User className="h-4 w-4" />
                  {user.name}的个人中心
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium rounded-md transition-colors flex items-center gap-2 text-primary hover:bg-muted"
                  >
                    <Shield className="h-4 w-4" />
                    管理后台
                  </Link>
                )}
                <button
                  onClick={() => { logout(); setMobileOpen(false) }}
                  className="w-full px-4 py-3 text-sm font-medium rounded-md transition-colors flex items-center gap-2 text-muted-foreground hover:text-destructive hover:bg-muted text-left"
                >
                  <LogOut className="h-4 w-4" />
                  退出登录
                </button>
              </>
            ) : (
              <div className="flex gap-2 px-4 py-2">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="flex-1">
                  <Button variant="outline" className="w-full" size="sm">登录</Button>
                </Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="flex-1">
                  <Button className="w-full" size="sm">注册</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
