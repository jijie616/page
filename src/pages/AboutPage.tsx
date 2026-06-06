import { Sparkles, MapPin, Phone, Mail, Shield, Award, Users, Target } from 'lucide-react'
import { CredentialsSection } from '@/components/home/CredentialsSection'
import { CTASection } from '@/components/home/CTASection'

export function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">关于我们</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            关于新概念AI背单词
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            专注新概念英语词汇学习，AI驱动的科学背单词系统
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">品牌故事</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  新概念AI背单词诞生于一个简单的观察：无数中国学生在学习新概念英语时，
                  最大的痛点不是语法、不是阅读，而是——记不住单词。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  创始团队深耕英语教育10年，服务超过50万学员，深刻理解中国学生背单词的核心困境。
                  我们基于国际权威认知心理学研究成果，结合AI人工智能技术，
                  打造了这套专为新概念英语学员设计的科学背单词系统。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  我们相信，每个孩子都能通过科学的方法高效掌握单词。
                  我们的使命是：让背单词不再痛苦，让每个孩子享受英语学习的成就感。
                </p>
              </div>
              <div className="bg-card rounded-xl border shadow-sm p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">联系我们</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-foreground">咨询热线</div>
                      <div className="text-sm text-muted-foreground">400-xxx-xxxx</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-foreground">电子邮箱</div>
                      <div className="text-sm text-muted-foreground">service@nce-words.cn</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-foreground">公司地址</div>
                      <div className="text-sm text-muted-foreground">北京市海淀区中关村科技园区</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CredentialsSection />
      <CTASection />
    </>
  )
}
