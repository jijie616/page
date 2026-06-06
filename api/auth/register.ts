import type { VercelRequest, VercelResponse } from '@vercel/node'
import { hashPassword, createToken, generateId, getUserByEmail, saveUser, User } from '../_lib/auth.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
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
    const { email, password, name } = req.body || {}

    if (!email || !password || !name) {
      return res.status(400).json({ error: '请填写完整信息' })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: '密码至少6位' })
    }

    // 检查是否已注册
    const existing = await getUserByEmail(email)
    if (existing) {
      return res.status(409).json({ error: '该邮箱已注册' })
    }

    const passwordHash = await hashPassword(password)
    const user: User = {
      id: generateId(),
      email: email.toLowerCase(),
      name,
      passwordHash,
      role: 'user',
      createdAt: new Date().toISOString(),
    }

    await saveUser(user)

    const { passwordHash: _, ...userWithoutPassword } = user
    const token = await createToken(userWithoutPassword)

    return res.status(201).json({
      success: true,
      token,
      user: userWithoutPassword,
    })
  } catch (error) {
    console.error('Register error:', error)
    return res.status(500).json({ error: '注册失败，请稍后重试' })
  }
}
