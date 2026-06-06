import type { VercelRequest, VercelResponse } from '@vercel/node'
import { verifyToken, getUserById } from '../_lib/auth.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: '未登录' })
    }

    const token = authHeader.slice(7)
    const payload = await verifyToken(token)
    if (!payload) {
      return res.status(401).json({ error: '登录已过期，请重新登录' })
    }

    const user = await getUserById(payload.id)
    if (!user) {
      return res.status(404).json({ error: '用户不存在' })
    }

    const { passwordHash: _, ...userWithoutPassword } = user
    return res.status(200).json({ user: userWithoutPassword })
  } catch (error) {
    console.error('Auth me error:', error)
    return res.status(500).json({ error: '获取用户信息失败' })
  }
}
