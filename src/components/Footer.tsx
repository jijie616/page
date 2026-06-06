import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react'

const productLinks = [
  { href: '/product', label: '旗舰款·AI+新概念陪伴式学习系统' },
  { href: '/product', label: '独创款·AI个性化自主学习系统' },
  { href: '/principles', label: '科学记忆原理' },
]

const serviceLinks = [
  { href: '/case', label: '学员成功案例' },
  { href: '/suitable-children', label: '适合哪些孩子' },
  { href: '/about', label: '关于我们' },
]

const areaLinks = [
  { href: '/about', label: '新概念英语第一册词库' },
  { href: '/about', label: '新概念英语第二册词库' },
  { href: '/about', label: '新概念英语第三册词库' },
  { href: '/about', label: '新概念英语第四册词库' },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-foreground">新概念AI背单词</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              专注新概念英语词汇学习，AI驱动的科学背单词系统，
              让每个孩子都能高效掌握新概念英语核心词汇。
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>service@nce-words.cn</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">产品体系</h4>
            <div className="flex flex-col space-y-2">
              {productLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block py-1 text-sm transition-colors text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">服务支持</h4>
            <div className="flex flex-col space-y-2">
              {serviceLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block py-1 text-sm transition-colors text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Word Banks */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">词库覆盖</h4>
            <div className="flex flex-col space-y-2">
              {areaLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block py-1 text-sm transition-colors text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 新概念AI背单词</span>
            <span className="text-muted-foreground/30">|</span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              京ICP备xxxxxxxx号-x
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary transition-colors">关于我们</Link>
            <Link to="/principles" className="hover:text-primary transition-colors">学习原理</Link>
            <Link to="/about" className="hover:text-primary transition-colors">联系我们</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
