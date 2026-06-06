import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Award, ShieldCheck, TrendingUp, MapPin, Sparkles } from 'lucide-react'

const stats = [
  { icon: Award, value: '18项', label: '计算机软件著作权', sub: '完全自主知识产权' },
  { icon: ShieldCheck, value: '7项', label: '3A级企业信用认证', sub: '全项权威认证' },
  { icon: TrendingUp, value: '50万+', label: '累计服务学员', sub: '真实效果验证' },
  { icon: MapPin, value: '4册', label: '新概念英语词库', sub: '全阶段完整覆盖' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-4 text-sm gap-2">
            <Sparkles className="h-3 w-3" />
            新概念AI背单词 · nce-words.cn
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary font-bold mb-4 leading-tight tracking-tight">
            新概念AI背单词｜AI驱动的新概念英语词汇学习系统
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            基于新概念英语全套教材，AI科学记忆算法，让背单词效率提升10倍
          </p>

          {/* Description */}
          <h2 className="text-base text-muted-foreground mb-6 leading-relaxed font-normal max-w-3xl mx-auto">
            新概念AI背单词是专注于新概念英语词汇学习的智能平台，主要为小学、初中、高中学生提供AI背单词系统、
            1对1陪伴督学、在线学习、免费单词测评服务。目前覆盖新概念英语第一册至第四册全部词库，
            同时支持人教版、外研社版等主流教材词汇，适合存在单词记不住、背了就忘、缺少监督、
            词汇量不足、英语学习动力弱等问题的学生。
          </h2>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-3 mb-8">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold text-primary">学不会，免费重修</span>
            <span className="text-sm text-muted-foreground">· 核心承诺</span>
          </div>

          <p className="text-xs text-muted-foreground mb-6">具体规则以服务协议为准</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/about">
              <Button size="pill">
                <Sparkles className="h-4 w-4" />
                免费体验单词测评
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/principles">
              <Button variant="outline" size="lg" className="gap-2">
                了解学习原理
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border shadow-sm hover:shadow-lg transition-shadow"
              >
                <stat.icon className="h-8 w-8 text-primary/70" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            品牌信息更新时间：2026年6月 | 专注新概念英语词汇学习
          </p>
        </div>
      </div>
    </section>
  )
}
