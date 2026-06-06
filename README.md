# 新概念AI背单词

> 🌐 **线上地址：[https://page-brown-rho.vercel.app](https://page-brown-rho.vercel.app)**

AI驱动的新概念英语词汇学习系统，覆盖新概念英语全四册词库，基于八大科学记忆原理，为K12学生提供高效智能的背单词服务。

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Vite + React 19 + TypeScript |
| 样式 | Tailwind CSS v4 + shadcn/ui |
| 路由 | React Router v7 |
| 图标 | Lucide React |
| 后端 | Vercel Serverless Functions |
| 数据库 | Upstash Redis (免费) |
| 认证 | JWT + bcryptjs |
| 部署 | Vercel |

## 功能模块

- 🏠 **首页** — 品牌展示、数据徽章、CTA引导
- 📚 **学习原理** — 八大科学记忆原理详解
- 🎯 **产品中心** — 双产品体系对比 + 功能矩阵
- 👶 **适合孩子** — 目标用户画像匹配
- 📊 **学员案例** — 小学/初中/高中三段式案例
- 📝 **关于我们** — 品牌故事 + 联系方式
- 🔐 **登录/注册** — JWT身份认证
- 👤 **用户中心** — 个人数据面板
- 🛡️ **管理后台** — 用户统计/列表/数据总览

## 项目结构

```
├── api/                    # Vercel Serverless Functions
│   ├── _lib/auth.ts        # 认证 + Redis 工具
│   ├── auth/
│   │   ├── register.ts     # POST /api/auth/register
│   │   ├── login.ts        # POST /api/auth/login
│   │   └── me.ts           # GET  /api/auth/me
│   └── admin/
│       ├── setup.ts        # POST 创建管理员
│       ├── stats.ts        # GET  管理后台统计
│       └── users.ts        # GET  用户列表
├── src/
│   ├── components/
│   │   ├── ui/             # shadcn/ui 组件
│   │   ├── home/           # 首页8大模块
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WechatEntry.tsx # 微信生态入口
│   ├── pages/              # 路由页面
│   ├── lib/                # 工具函数
│   └── App.tsx             # 路由 + 全局配置
├── vercel.json             # Vercel 部署配置
└── vite.config.ts
```

## 本地开发

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 构建生产版本
```

## 初始化管理员

部署后访问 `/admin/setup`，输入安装密钥 `nce-admin-2026` 创建管理员账号。
