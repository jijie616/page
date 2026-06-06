// 微信 JS-SDK 类型声明
declare global {
  interface Window {
    wx?: {
      config: (config: WxConfig) => void
      ready: (callback: () => void) => void
      error: (callback: (err: unknown) => void) => void
      miniProgram?: {
        navigateTo: (options: { url: string }) => void
        navigateBack: (options: { delta: number }) => void
        redirectTo: (options: { url: string }) => void
        postMessage: (options: { data: Record<string, unknown> }) => void
        getEnv: (callback: (res: { miniprogram: boolean }) => void) => void
      }
      updateAppMessageShareData?: (config: ShareConfig) => void
      updateTimelineShareData?: (config: ShareConfig) => void
      onMenuShareAppMessage?: (config: ShareConfig) => void
      onMenuShareTimeline?: (config: ShareConfig) => void
    }
  }
}

interface WxConfig {
  debug: boolean
  appId: string
  timestamp: number
  nonceStr: string
  signature: string
  jsApiList: string[]
}

interface ShareConfig {
  title: string
  desc: string
  link: string
  imgUrl: string
  success?: () => void
  cancel?: () => void
}

// 检测是否在微信浏览器中
export function isWechat(): boolean {
  if (typeof navigator === 'undefined') return false
  return /micromessenger/i.test(navigator.userAgent)
}

// 检测是否在小程序 web-view 中
export function isMiniProgram(): Promise<boolean> {
  return new Promise((resolve) => {
    if (!isWechat() || !window.wx?.miniProgram) {
      resolve(false)
      return
    }
    window.wx.miniProgram.getEnv((res) => {
      resolve(res.miniprogram)
    })
  })
}

// 初始化微信 JS-SDK（用于分享等）
export function initWxConfig(config: WxConfig): void {
  if (!window.wx) {
    console.warn('微信 JS-SDK 未加载')
    return
  }

  window.wx.config(config)

  window.wx.ready(() => {
    console.log('微信 JS-SDK 初始化成功')

    // 自定义分享给朋友
    const shareConfig: ShareConfig = {
      title: '新概念AI背单词 - AI驱动的新概念英语词汇学习系统',
      desc: '基于新概念英语全套教材，AI科学记忆算法，让背单词效率提升10倍！',
      link: window.location.href,
      imgUrl: `${window.location.origin}/share-icon.png`,
    }

    window.wx?.updateAppMessageShareData?.(shareConfig)
    window.wx?.updateTimelineShareData?.(shareConfig)
    window.wx?.onMenuShareAppMessage?.(shareConfig)
    window.wx?.onMenuShareTimeline?.({ ...shareConfig, title: '新概念AI背单词 - 科学高效背单词' })
  })

  window.wx.error((err: unknown) => {
    console.error('微信 JS-SDK 初始化失败:', err)
  })
}

// 动态加载微信 JS-SDK
export function loadWxJSSDK(): Promise<void> {
  return new Promise((resolve) => {
    if (window.wx) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js'
    script.onload = () => resolve()
    script.onerror = () => {
      console.warn('微信 JS-SDK 加载失败（非微信环境可忽略）')
      resolve()
    }
    document.head.appendChild(script)
  })
}
