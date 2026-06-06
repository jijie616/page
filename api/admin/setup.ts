import type { VercelRequest, VercelResponse } from '@vercel/node'
import { hashPassword, generateId, getUserByEmail, saveUser, User } from '../_lib/auth.js'

// 一键创建管理员账号（仅在首次部署时使用）
// POST /api/admin/setup
// Body: { setupKey: "nce-admin-2026", email: "admin@nce.com", password: "xxx", name: "管理员" }

const SETUP_KEY = process.env.ADMIN_SETUP_KEY || 'nce-admin-2026'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { setupKey, email, password, name } = req.body || {}

    if (setupKey !== SETUP_KEY) {
      return res.status(403).json({ error: '无效的安装密钥' })
    }

    if (!email || !password || !name) {
      return res.status(400).json({ error: '请填写完整信息' })
    }

    const existing = await getUserByEmail(email)
    if (existing) {
      return res.status(409).json({ error: '该管理员已存在' })
    }

    const passwordHash = await hashPassword(password)
    const admin: User = {
      id: generateId(),
      email: email.toLowerCase(),
      name,
      passwordHash,
      role: 'admin',
      createdAt: new Date().toISOString(),
    }

    await saveUser(admin)

    const { passwordHash: _, ...adminWithoutPassword } = admin
    return res.status(201).json({
      success: true,
      message: '管理员账号创建成功',
      admin: adminWithoutPassword,
    })
  } catch (error) {
    console.error('Admin setup error:', error)
    return res.status(500).json({ error: '创建管理员失败' })
  }
}
