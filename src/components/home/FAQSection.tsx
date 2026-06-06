import { AccordionItem } from '@/components/ui/accordion'
import { CircleHelp } from 'lucide-react'

const faqs = [
  {
    q: '新概念AI背单词适合多大的孩子？',
    a: '新概念AI背单词主要面向小学一年级至高中三年级（K12）的学生。我们根据不同年龄段和英语水平，匹配新概念英语第一册至第四册的相应词库，并提供个性化的学习方案。同时支持人教版、外研社版等主流教材词汇同步学习。',
  },
  {
    q: '新概念英语四册词库有什么区别？',
    a: '第一册（约800词）适合小学阶段，以基础日常词汇为主；第二册（约1500词）适合初中阶段，覆盖中考核心词汇；第三册（约2500词）适合高中阶段，涵盖高考重点词汇；第四册（约3500词）适合高中拔高和大学预备，包含大量高级词汇和学术词汇。AI系统会根据学生水平自动匹配合适的起始词库。',
  },
  {
    q: 'AI是如何帮助孩子背单词的？',
    a: '我们的AI系统基于八大科学记忆原理（艾宾浩斯遗忘曲线、间隔重复、多感官联动等），为每个学生生成个性化学习路径。AI会根据孩子的记忆曲线自动安排复习时机，在遗忘临界点前精准推送复习内容，同时通过游戏化机制激发学习兴趣，让背单词更高效、更有趣。',
  },
  {
    q: '每天需要学习多长时间？',
    a: '我们建议每天20-30分钟的高效学习，这个时长既能保证学习效果，又不会给孩子造成过大负担。AI系统会根据孩子的学习节奏和掌握情况自动调整每日任务量，确保在舒适区内持续进步。',
  },
  {
    q: '可以和其他教材配合使用吗？',
    a: '当然可以！除了新概念英语全四册词库外，我们的系统还内置了人教版（PEP）、外研社版等主流教材的同步词库。孩子可以在学习新概念英语的同时，同步巩固学校教材中的词汇，实现课内外双线并进。',
  },
  {
    q: '如何开始使用？',
    a: '您只需要填写上方的免费测评预约表单，我们的学习顾问会在24小时内与您联系，为孩子安排免费的单词水平测评。测评后，我们会根据孩子的具体情况推荐合适的学习方案和起始词库。',
  },
  {
    q: '学习效果如何保证？',
    a: '我们承诺「学不会，免费重修」。AI系统会全程追踪每个孩子的学习数据，包括词汇掌握率、复习完成度、测试成绩等，并生成全周期学习报告。家长可以随时查看孩子的学习进度和效果。如果按照系统规划的学习方案未能达到预期效果，可申请免费重修。',
  },
  {
    q: '支持哪些学习设备？',
    a: '我们支持全平台学习：电脑（Windows/Mac）、平板（iPad/Android平板）、手机（iOS/Android）均可使用。学习数据实时云端同步，孩子可以随时随地切换设备继续学习，不受时间和地点限制。',
  },
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-4">
              <CircleHelp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">常见问题</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              家长最关心的问题
            </h2>
          </div>

          <div className="bg-card rounded-xl border shadow-sm p-6">
            {faqs.map(faq => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                trigger={
                  <span className="flex items-start gap-3 text-left">
                    <CircleHelp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-semibold text-foreground">{faq.q}</span>
                  </span>
                }
              >
                {faq.a}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
