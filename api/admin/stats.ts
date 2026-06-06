import type { VercelRequest, VercelResponse } from '@vercel/node'
import { verifyToken, getAdminStats } from '../_lib/auth.js'

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
    // 验证管理员身份
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: '未登录' })
    }

    const token = authHeader.slice(7)
    const payload = await verifyToken(token)
    if (!payload || payload.role !== 'admin') {
      return res.status(403).json({ error: '无权限访问' })
    }

    const stats = await getAdminStats()
    return res.status(200).json(stats)
  } catch (error) {
    console.error('Admin stats error:', error)
    return res.status(500).json({ error: '获取数据失败' })
  }
}
