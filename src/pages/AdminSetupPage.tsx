import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Shield, Check, X } from 'lucide-react'

export function AdminSetupPage() {
  const [setupKey, setSetupKey] = useState('nce-admin-2026')
  const [email, setEmail] = useState('admin@nce.com')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('管理员')
  const [result, setResult] = useState<'success' | 'error' | null>(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      const res = await fetch('/api/admin/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ setupKey, email, password, name }),
      })
      const data = await res.json()
      if (res.ok) {
        setResult('success')
        setMessage('管理员账号创建成功！请前往 /login 登录。')
      } else {
        setResult('error')
        setMessage(data.error || '创建失败')
      }
    } catch {
      setResult('error')
      setMessage('网络错误，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">初始化管理员账号</h1>
          <p className="text-muted-foreground mt-2">仅首次使用，创建后请用此账号登录管理后台</p>
        </div>

        <div className="bg-card rounded-xl border shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">安装密钥</label>
              <Input
                value={setupKey}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSetupKey(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">管理员邮箱</label>
              <Input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">管理员密码</label>
              <Input
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="至少6位"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">名称</label>
              <Input
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
              />
            </div>

            {result && (
              <div className={`text-sm rounded-lg px-3 py-2 flex items-center gap-2 ${
                result === 'success' ? 'text-green-600 bg-green-50' : 'text-destructive bg-destructive/10'
              }`}>
                {result === 'success' ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                {message}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? '创建中...' : '创建管理员账号'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
