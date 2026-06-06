import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Sparkles, Zap, Users, Monitor, Brain, Target } from 'lucide-react'

const flagshipFeatures = [
  '自研科学记忆算法',
  '艾宾浩斯智能复习',
  '听说读写专项训练',
  '6关检测与章节复习',
  '游戏化背诵关卡',
  '打卡激励体系',
  '全周期学习报告',
  'AI个性化内容生成',
]

const pioneerFeatures = [
  '游戏化驱动，激发原生学习动力',
  '沉浸式学习界面，定义学习新范式',
  '社区化学习小组，构建学习第三空间',
  'AI智能精灵，7×24小时全程陪伴',
  'AI生成千人千面学习路径与定制词库',
  '专职督导老师全程跟进',
  '新概念英语全四册词库全覆盖',
  '人教版/外研社等主流教材同步支持',
]

export function ProductSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            覆盖新概念英语全阶段的双产品体系
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            支持在线、离线、混合三种学习场景，可根据学员特点个性化匹配
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Flagship Card */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 text-center border-2 border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="px-6">
              <Badge className="mb-4">旗舰款</Badge>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                AI+1对1陪伴式学习系统
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                面向有深度提分需求的新概念英语学员
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                线下1对1教练全程陪伴督导，自研AI系统定制个性化学习方案，
                解决孩子背单词难、记不住、效率低、不爱背的核心痛点
              </p>
            </div>

            {/* Features */}
            <div className="px-6 text-left space-y-2">
              {flagshipFeatures.map(f => (
                <div key={f} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="px-6">
              <Link to="/product">
                <Button variant="outline" className="w-full">了解详情</Button>
              </Link>
            </div>
          </div>

          {/* Pioneer Card */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 text-center border-2 border-purple-500/20 shadow-sm hover:shadow-lg hover:border-purple-500/40 transition-all duration-300 bg-gradient-to-br from-purple-500/5 to-transparent">
            <div className="px-6">
              <Badge variant="secondary" className="mb-4">独创款</Badge>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                AI个性化自主学习系统（督导版）
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                行业内率先开辟的全新赛道产品
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                面向需培养自主学习习惯的新概念英语学员，游戏化闯关机制，
                AI生成千人千面学习路径与定制词库，专职督导老师全程跟进，
                让孩子从「要我学」变为「我要学」
              </p>
            </div>

            <div className="px-6 text-left space-y-2">
              {pioneerFeatures.map(f => (
                <div key={f} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="px-6">
              <Link to="/product">
                <Button variant="outline" className="w-full">了解详情</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
