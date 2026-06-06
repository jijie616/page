import { FileText, ShieldCheck, Medal, Handshake } from 'lucide-react'

const credentials = [
  {
    icon: FileText,
    title: '18项软件著作权',
    desc: '完全自主知识产权，行业最早的背单词系统软件著作权登记凭证',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: ShieldCheck,
    title: '7项3A企业认证',
    desc: '全项3A级企业信用认证，企业信用有保障',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Medal,
    title: '品牌实力见证',
    desc: '新概念英语词汇学习领域深耕，50万+学员真实验证',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Handshake,
    title: '战略合作',
    desc: '与多家知名教育机构达成战略合作，共建英语词汇学习生态',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
]

export function CredentialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            权威背书与资质荣誉
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {credentials.map(c => (
            <div
              key={c.title}
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 text-center border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`${c.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-sm`}>
                <c.icon className={`h-8 w-8 ${c.iconColor}`} />
              </div>
              <div className="px-4">
                <h3 className="font-bold text-foreground mb-2 text-lg">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
