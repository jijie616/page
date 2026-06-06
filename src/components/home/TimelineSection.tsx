const milestones = [
  {
    year: '2016',
    title: '团队创立',
    desc: '创始团队开创「软件+人工陪伴背单词」模式，成为赛道早期开创者',
  },
  {
    year: '2017',
    title: '产品上线',
    desc: '产品正式投放市场，获得首批种子用户认可',
  },
  {
    year: '2019',
    title: 'AI技术迭代',
    desc: 'AI技术重构背单词系统，完成核心技术迭代',
  },
  {
    year: '2020',
    title: '首家线下中心开业',
    desc: '首家直营学习中心正式开业，开启线上线下融合模式',
  },
  {
    year: '2023',
    title: '品牌升级',
    desc: '签约品牌代言人，完成品牌战略升级',
  },
  {
    year: '2024',
    title: '新赛道开辟',
    desc: '推出AI个性化自主学习系统，开辟K12自主学习全新赛道',
  },
  {
    year: '2026',
    title: '新概念AI背单词上线',
    desc: '专注新概念英语词汇学习，覆盖全四册词库，配套主流教材同步支持',
  },
]

export function TimelineSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            品牌发展里程碑
          </h2>
          <p className="text-muted-foreground">10年教育市场深耕，专注英语词汇学习</p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative flex items-start gap-8">
                {/* Left side (desktop) */}
                <div className="hidden md:block flex-1 text-right md:pr-8">
                  {i % 2 === 0 && (
                    <>
                      <div className="font-bold text-foreground">{m.title}</div>
                      <div className="text-sm text-muted-foreground">{m.desc}</div>
                    </>
                  )}
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-4" />

                {/* Right side (always on mobile) */}
                <div className="flex-1 ml-12 md:ml-0 md:pl-8">
                  {i % 2 === 0 ? (
                    <div className="md:hidden">
                      <div className="font-bold text-foreground">{m.title}</div>
                      <div className="text-sm text-muted-foreground">{m.desc}</div>
                    </div>
                  ) : (
                    <>
                      <div className="font-bold text-foreground">{m.title}</div>
                      <div className="text-sm text-muted-foreground">{m.desc}</div>
                    </>
                  )}
                </div>

                {/* Desktop left side for odd items */}
                <div className="hidden md:block flex-1 md:pr-8">
                  {i % 2 !== 0 && (
                    <div className="text-right">
                      <div className="font-bold text-foreground">{m.title}</div>
                      <div className="text-sm text-muted-foreground">{m.desc}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
