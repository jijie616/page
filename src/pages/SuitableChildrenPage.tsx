import { Check, Users, BookOpen, AlertCircle, Star, Target } from 'lucide-react'

const suitableProfiles = [
  {
    icon: AlertCircle,
    title: '单词记不住、背了就忘',
    desc: '孩子花费大量时间背单词，但第二天就忘了大半，反复背诵效率低下。AI系统基于艾宾浩斯遗忘曲线自动安排复习，让记忆留存率提升3-5倍。',
  },
  {
    icon: Users,
    title: '缺少监督、学习不自觉',
    desc: '家长工作忙没时间陪孩子背单词，孩子自己又缺乏自控力。1对1陪伴督导+打卡激励体系，专职老师全程跟进，让孩子养成良好学习习惯。',
  },
  {
    icon: BookOpen,
    title: '词汇量不足、英语成绩差',
    desc: '词汇量是英语学习的根基，词汇量不足直接导致阅读看不懂、听力听不懂、作文写不出。系统覆盖新概念英语全四册+主流教材词库，快速扩充词汇量。',
  },
  {
    icon: Target,
    title: '英语学习动力弱、厌学情绪',
    desc: '传统背单词枯燥乏味，孩子提不起兴趣。游戏化闯关机制+正向激励体系，让孩子在挑战和成就感中爱上背单词。',
  },
  {
    icon: Star,
    title: '想冲刺重点学校、提分需求迫切',
    desc: '面临升学压力，需要在短时间内快速提升英语成绩。AI个性化学习方案精准定位薄弱词汇，高效突破提分瓶颈。',
  },
]

export function SuitableChildrenPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">适合哪些孩子</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            您的孩子是否也有这些问题？
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            如果您的孩子符合以下任何一种情况，新概念AI背单词将是您的理想选择
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {suitableProfiles.map(p => (
              <div key={p.title} className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-16 bg-primary/5 rounded-xl border border-primary/20 p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">新概念AI背单词能帮孩子</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                '科学记忆，告别背了就忘',
                'AI定制方案，精准高效',
                '游戏化学习，激发兴趣',
                '陪伴督导，养成好习惯',
                '听说读写，全面提升',
                '全周期报告，效果可见',
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
