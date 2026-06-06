import { ProductSection } from '@/components/home/ProductSection'
import { Sparkles, Check, Brain, Monitor, Users, Target } from 'lucide-react'

export function ProductPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">产品中心</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            新概念AI背单词产品体系
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            两大核心产品，满足不同学习需求
          </p>
        </div>
      </section>

      <ProductSection />

      {/* Product Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">产品功能对比</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl border shadow-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold text-foreground">功能特性</th>
                    <th className="text-center p-4 font-semibold text-primary">旗舰款</th>
                    <th className="text-center p-4 font-semibold text-purple-600">独创款</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['AI科学记忆算法', true, true],
                    ['艾宾浩斯智能复习', true, true],
                    ['新概念英语全四册词库', true, true],
                    ['1对1陪伴督导', true, false],
                    ['个性化学习方案', true, true],
                    ['游戏化闯关机制', true, true],
                    ['听说读写专项训练', true, true],
                    ['打卡激励体系', true, true],
                    ['全周期学习报告', true, true],
                    ['34英寸大屏终端', false, true],
                    ['社区化学习小组', false, true],
                  ].map(([feature, flagship, pioneer]) => (
                    <tr key={feature as string} className="border-b last:border-0">
                      <td className="p-4 text-muted-foreground">{feature as string}</td>
                      <td className="text-center p-4">
                        {flagship ? <Check className="h-5 w-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                      </td>
                      <td className="text-center p-4">
                        {pioneer ? <Check className="h-5 w-5 text-purple-600 mx-auto" /> : <span className="text-muted-foreground">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
