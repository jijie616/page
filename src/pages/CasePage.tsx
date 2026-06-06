import { CasesSection } from '@/components/home/CasesSection'
import { Users } from 'lucide-react'

export function CasePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">学员案例</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            学员真实案例
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            覆盖小学-高中全学段 | 真实学习过程+成果全记录
          </p>
        </div>
      </section>
      <CasesSection />
    </>
  )
}
