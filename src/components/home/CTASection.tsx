import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sparkles, Phone, User, BookOpen, Send } from 'lucide-react'

export function CTASection() {
  const [form, setForm] = useState({ name: '', phone: '', grade: '', book: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('感谢您的预约！我们将在24小时内与您联系。')
    setForm({ name: '', phone: '', grade: '', book: '' })
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              免费获取新概念英语单词测评
            </h2>
            <p className="text-muted-foreground">
              填写以下信息，专业学习顾问将为您安排免费单词水平测评和试学体验
            </p>
          </div>

          <div className="bg-card rounded-xl border shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <User className="h-4 w-4 inline mr-1 text-primary" />
                    孩子姓名
                  </label>
                  <Input
                    placeholder="请输入孩子姓名"
                    value={form.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Phone className="h-4 w-4 inline mr-1 text-primary" />
                    家长手机号
                  </label>
                  <Input
                    placeholder="请输入手机号码"
                    type="tel"
                    value={form.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    所在年级
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={form.grade}
                    onChange={e => setForm({ ...form, grade: e.target.value })}
                    required
                  >
                    <option value="">请选择年级</option>
                    <option value="grade1-3">小学1-3年级</option>
                    <option value="grade4-6">小学4-6年级</option>
                    <option value="grade7">初中一年级</option>
                    <option value="grade8">初中二年级</option>
                    <option value="grade9">初中三年级</option>
                    <option value="grade10">高中一年级</option>
                    <option value="grade11">高中二年级</option>
                    <option value="grade12">高中三年级</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <BookOpen className="h-4 w-4 inline mr-1 text-primary" />
                    目标词库
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={form.book}
                    onChange={e => setForm({ ...form, book: e.target.value })}
                    required
                  >
                    <option value="">请选择目标教材</option>
                    <option value="nce1">新概念英语第一册</option>
                    <option value="nce2">新概念英语第二册</option>
                    <option value="nce3">新概念英语第三册</option>
                    <option value="nce4">新概念英语第四册</option>
                    <option value="pep">人教版教材同步</option>
                    <option value="fltrp">外研社版同步</option>
                    <option value="other">其他教材</option>
                  </select>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="h-4 w-4" />
                立即预约免费测评
                <Sparkles className="h-4 w-4" />
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              提交即表示您同意我们的服务条款和隐私政策，我们承诺不会泄露您的个人信息
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
