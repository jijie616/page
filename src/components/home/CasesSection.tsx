import { useState } from 'react'
import { TrendingUp, Clock, Target, BookOpen } from 'lucide-react'

const tabs = [
  { id: 'elementary', label: '小学段案例' },
  { id: 'middle', label: '初中段案例' },
  { id: 'high', label: '高中段案例' },
]

const cases: Record<string, Array<{
  name: string; grade: string; book: string; duration: string;
  words: string; improvement: string; story: string;
}>> = {
  elementary: [
    {
      name: '小明', grade: '小学四年级', book: '新概念英语第一册',
      duration: '3个月', words: '800+', improvement: '英语成绩从72分提升至95分',
      story: '学习新概念英语第一册核心词汇，每周3次AI背单词训练，3个月内掌握了800+词汇，英语成绩大幅提升，从班级中等跃升至前列。',
    },
    {
      name: '小红', grade: '小学五年级', book: '新概念英语第一册',
      duration: '6个月', words: '1200+', improvement: '词汇量从300提升至1200+',
      story: '通过AI个性化学习方案，结合自然拼读教学法，6个月内词汇量增长了4倍，英语阅读能力显著提高，开始自主阅读英文绘本。',
    },
  ],
  middle: [
    {
      name: '小华', grade: '初中二年级', book: '新概念英语第二册',
      duration: '4个月', words: '1500+', improvement: '英语成绩从68分提升至88分',
      story: '系统学习新概念英语第二册词汇，配合艾宾浩斯智能复习系统，4个月内掌握了1500+核心词汇，英语听说读写能力全面提升。',
    },
    {
      name: '小丽', grade: '初中一年级', book: '新概念英语第二册',
      duration: '5个月', words: '2000+', improvement: '期末英语年级前10%',
      story: '从零基础开始，通过游戏化背单词闯关机制激发学习兴趣，5个月积累2000+词汇，英语成绩进入年级前10%。',
    },
  ],
  high: [
    {
      name: '小强', grade: '高中二年级', book: '新概念英语第三册',
      duration: '6个月', words: '3000+', improvement: '英语成绩从95分提升至125分（满分150）',
      story: '针对高考英语词汇需求，系统学习新概念英语第三册核心词汇，配合检索练习效应强化记忆，6个月内词汇量突破3000，英语成绩大幅提升。',
    },
    {
      name: '小美', grade: '高中三年级', book: '新概念英语第四册',
      duration: '3个月', words: '2500+', improvement: '高考英语模拟提分30+',
      story: '高考冲刺阶段，通过AI智能复习系统快速巩固新概念英语第四册高级词汇，3个月内成绩提升30+分，成功考入理想大学。',
    },
  ],
}

export function CasesSection() {
  const [activeTab, setActiveTab] = useState('elementary')

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            新概念AI背单词学员真实案例
          </h2>
          <p className="text-muted-foreground">
            覆盖小学-高中全学段 | 真实学习过程+成果全记录 | 科学方法帮孩子解决背单词难题
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:text-primary border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases[activeTab].map(c => (
            <div
              key={c.name}
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="px-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{c.name}</div>
                    <div className="text-sm text-muted-foreground">{c.grade} · {c.book}</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">学习时长</span>
                    </div>
                    <div className="font-bold text-blue-600">{c.duration}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <BookOpen className="h-4 w-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">掌握词汇</span>
                    </div>
                    <div className="font-bold text-green-600">{c.words}</div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-xs text-primary font-medium">提升效果</span>
                  </div>
                  <div className="font-bold text-primary text-sm">{c.improvement}</div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{c.story}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8">
          以上学员数据为真实案例，仅供参考，不构成效果承诺；具体学习效果因学员个人情况、学习时长、配合程度不同存在差异。
        </p>
      </div>
    </section>
  )
}
