import type { VercelRequest, VercelResponse } from '@vercel/node'
import { verifyPassword, createToken, getUserByEmail } from '../_lib/auth.js'

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
    const { email, password } = req.body || {}

    if (!email || !password) {
      return res.status(400).json({ error: '请输入邮箱和密码' })
    }

    const user = await getUserByEmail(email)
    if (!user) {
      return res.status(401).json({ error: '邮箱或密码错误' })
    }

    const valid = await verifyPassword(password, user.passwordHash)
    if (!valid) {
      return res.status(401).json({ error: '邮箱或密码错误' })
    }

    const { passwordHash: _, ...userWithoutPassword } = user
    const token = await createToken(userWithoutPassword)

    return res.status(200).json({
      success: true,
      token,
      user: userWithoutPassword,
    })
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ error: '登录失败，请稍后重试' })
  }
}
