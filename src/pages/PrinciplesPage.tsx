import { PrinciplesSection } from '@/components/home/PrinciplesSection'
import { Brain, Clock, TrendingUp, BookOpen, Target, Zap } from 'lucide-react'

const details = [
  {
    icon: Clock,
    title: '艾宾浩斯遗忘曲线',
    subtitle: '为什么孩子背了就忘？',
    content: '德国心理学家艾宾浩斯发现，人类在学习新知识后的24小时内会遗忘约66%的内容。我们的AI系统精确计算每个单词的最佳复习时机，在遗忘临界点前自动推送复习任务，将记忆留存率提升至90%以上。',
  },
  {
    icon: Brain,
    title: '间隔重复记忆',
    subtitle: '科学安排复习节奏',
    content: '研究表明，分散在多个时间段的短时复习效果远优于一次长时间集中背诵。AI根据每个孩子的记忆特征，自动安排1天、3天、7天、30天的递进式复习计划，让单词从短期记忆转化为长期记忆。',
  },
  {
    icon: Zap,
    title: '多感官联动学习',
    subtitle: '听说读写全面激活',
    content: '认知科学证实，多感官参与的学习方式能将知识留存率提升30%-45%。我们的系统同时调用视觉（看单词）、听觉（听发音）、动觉（拼写训练）、口语（跟读评分），形成「眼耳嘴手脑」全流程学习闭环。',
  },
]

export function PrinciplesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-6">
            <Brain className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">科学记忆原理</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            八大科学记忆原理
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            基于国际权威认知心理学研究，50万+学员验证有效
          </p>
        </div>
      </section>

      {/* Detailed Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {details.map(d => (
              <div key={d.title} className="bg-card rounded-xl border shadow-sm p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <d.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{d.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrinciplesSection />
    </>
  )
}
