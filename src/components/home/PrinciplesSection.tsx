import { Brain, Clock, Eye, Search, TrendingUp, Type, Zap, Trophy } from 'lucide-react'

const principles = [
  {
    icon: Clock,
    title: '艾宾浩斯遗忘曲线',
    desc: '24小时内遗忘66%，AI计算最优复习时机',
    sub: '遗忘临界点精准复习',
    color: 'blue',
  },
  {
    icon: Brain,
    title: '间隔重复记忆',
    desc: '分散复习比集中背诵更高效',
    sub: '记忆留存率提升3-5倍',
    color: 'green',
  },
  {
    icon: Eye,
    title: '多感官联动学习',
    desc: '知识留存率提升30%-45%',
    sub: '眼耳嘴脑手全流程闭环',
    color: 'purple',
  },
  {
    icon: Search,
    title: '检索练习效应',
    desc: '告别熟悉感错觉',
    sub: '主动检索记忆效果3倍提升',
    color: 'orange',
  },
  {
    icon: TrendingUp,
    title: '最近发展区理论',
    desc: '学习内容精准匹配能力',
    sub: '跳一跳就能学到',
    color: 'indigo',
  },
  {
    icon: Type,
    title: '自然拼读教学',
    desc: '发音准确度提升95%以上',
    sub: '见词能读听音能写',
    color: 'red',
  },
  {
    icon: Zap,
    title: '认知负荷理论',
    desc: '拆解大目标降低负担',
    sub: '小步快跑持续激励',
    color: 'teal',
  },
  {
    icon: Trophy,
    title: '正向激励强化',
    desc: '建立学习内驱力',
    sub: '效果提升10倍以上',
    color: 'pink',
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-500/20',   gradient: 'from-blue-500/5' },
  green:  { bg: 'bg-green-50',  text: 'text-green-600',  border: 'border-green-500/20',  gradient: 'from-green-500/5' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-500/20', gradient: 'from-purple-500/5' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-500/20', gradient: 'from-orange-500/5' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-500/20', gradient: 'from-indigo-500/5' },
  red:    { bg: 'bg-red-50',    text: 'text-red-600',    border: 'border-red-500/20',    gradient: 'from-red-500/5' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-600',   border: 'border-teal-500/20',   gradient: 'from-teal-500/5' },
  pink:   { bg: 'bg-pink-50',   text: 'text-pink-600',   border: 'border-pink-500/20',   gradient: 'from-pink-500/5' },
}

export function PrinciplesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            八大科学记忆原理
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            基于国际权威认知心理学研究，50万+学员验证
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {principles.map(p => {
            const c = colorMap[p.color]
            return (
              <div
                key={p.title}
                className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 text-center border-2 ${c.border} shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 bg-gradient-to-br ${c.gradient} to-transparent`}
              >
                <div className={`${c.bg} w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-sm`}>
                  <p.icon className={`h-8 w-8 ${c.text}`} />
                </div>
                <div className="px-4">
                  <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{p.title}</h3>
                  <p className={`text-sm font-semibold ${c.text} mb-2 line-clamp-1`}>{p.sub}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
