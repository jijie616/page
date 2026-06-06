import { useState, useEffect } from 'react'
import { X, ChevronUp } from 'lucide-react'

// 检测是否在微信浏览器中
function isWechatBrowser(): boolean {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}

export function WechatFloatingButton() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // 非微信浏览器中显示引导入口
    if (!isWechatBrowser() && !dismissed) {
      const timer = setTimeout(() => setVisible(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [dismissed])

  if (!visible) return null

  return (
    <div className="fixed bottom-24 right-6 z-50 animate-bounce">
      <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-xl p-4 max-w-[200px]">
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-2 bg-white text-gray-600 rounded-full w-5 h-5 flex items-center justify-center shadow text-xs hover:bg-gray-100"
        >
          <X className="h-3 w-3" />
        </button>
        <div className="flex items-center gap-2 mb-2">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18z" />
          </svg>
          <span className="text-xs font-bold">微信小程序</span>
        </div>
        <p className="text-xs opacity-90 mb-2">打开微信扫一扫，用小程序背单词更方便！</p>
        <button
          onClick={() => setDismissed(true)}
          className="text-xs bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1.5 w-full text-center transition-colors"
        >
          知道了
        </button>
      </div>
      <div className="absolute -bottom-2 right-8 w-4 h-4 bg-green-600 rotate-45" />
    </div>
  )
}

export function WechatBottomBanner() {
  const [visible, setVisible] = useState(true)

  // 只在微信浏览器中显示
  if (!isWechatBrowser() || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <ChevronUp className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">在小程序中打开</div>
            <div className="text-xs text-muted-foreground">体验更流畅的背单词功能</div>
          </div>
        </div>
        <button
          onClick={() => {
            // 微信 JS-SDK 打开小程序
            if (window.wx && window.wx.miniProgram) {
              window.wx.miniProgram.navigateTo({ url: '/pages/index/index' })
            }
          }}
          className="bg-green-500 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-green-600 transition-colors"
        >
          打开
        </button>
        <button
          onClick={() => setVisible(false)}
          className="absolute top-1 right-2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export function WechatEntry() {
  return (
    <>
      <WechatFloatingButton />
      <WechatBottomBanner />
    </>
  )
}
