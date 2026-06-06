import type { VercelRequest, VercelResponse } from '@vercel/node'
import { verifyToken, getAllUserIds, getUserById } from '../_lib/auth.js'

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
    if (!payload || payload.role !== 'admin') {
      return res.status(403).json({ error: '无权限访问' })
    }

    const userIds = await getAllUserIds()
    const users = (await Promise.all(userIds.map(id => getUserById(id))))
      .filter(Boolean)
      .map(({ passwordHash, ...u }) => u)
      .sort((a, b) => new Date(b!.createdAt).getTime() - new Date(a!.createdAt).getTime())

    return res.status(200).json({ users })
  } catch (error) {
    console.error('Admin users error:', error)
    return res.status(500).json({ error: '获取用户列表失败' })
  }
}
