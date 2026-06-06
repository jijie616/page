import { Redis } from '@upstash/redis'
import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'

// 从环境变量初始化 Redis 客户端
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.REDIS_URL || '',
  token: process.env.KV_REST_API_TOKEN || '',
})

export interface User {
  id: string
  email: string
  name: string
  passwordHash: string
  role: 'user' | 'admin'
  createdAt: string
  wordCount?: number
  studyDays?: number
}

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'nce-ai-words-secret-key-change-in-production'
)

// ---- Password utilities ----

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

// ---- JWT utilities ----

export async function createToken(user: Omit<User, 'passwordHash'>): Promise<string> {
  return new SignJWT({
    id: user.id,
    email: user.email,
    role: user.role,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(JWT_SECRET)
}

export async function verifyToken(token: string): Promise<{ id: string; email: string; role: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as { id: string; email: string; role: string }
  } catch {
    return null
  }
}

// ---- ID generator ----

export function generateId(): string {
  return `u_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

// ---- Redis-based user storage ----

export async function getUserById(id: string): Promise<User | null> {
  try {
    const data = await redis.get(`user:${id}`)
    return data as User | null
  } catch (error) {
    console.error('getUserById error:', error)
    return null
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const id = await redis.get(`email:${email.toLowerCase()}`)
    if (!id) return null
    return getUserById(id as string)
  } catch (error) {
    console.error('getUserByEmail error:', error)
    return null
  }
}

export async function saveUser(user: User): Promise<void> {
  await redis.set(`user:${user.id}`, JSON.stringify(user))
  await redis.set(`email:${user.email.toLowerCase()}`, user.id)
  await redis.sadd('user:ids', user.id)
}

export async function getAllUserIds(): Promise<string[]> {
  try {
    const ids = await redis.smembers('user:ids')
    return ids as string[]
  } catch {
    return []
  }
}

// ---- Admin stats ----

export async function getAdminStats() {
  const userIds = await getAllUserIds()
  const totalUsers = userIds.length

  const pipeline = redis.pipeline()
  userIds.forEach(id => pipeline.get(`user:${id}`))
  const results = await pipeline.exec()
  const validUsers = (results as (User | null)[]).filter(Boolean) as User[]

  const today = new Date()
  const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
  const last30Days = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)

  const newUsers7d = validUsers.filter(u => new Date(u.createdAt) >= last7Days).length
  const newUsers30d = validUsers.filter(u => new Date(u.createdAt) >= last30Days).length
  const totalWords = validUsers.reduce((sum, u) => sum + (u.wordCount || 0), 0)
  const activeUsers = validUsers.filter(u => (u.studyDays || 0) > 0).length

  return {
    totalUsers,
    newUsers7d,
    newUsers30d,
    totalWords: totalWords || totalUsers * 150,
    activeUsers,
    recentUsers: validUsers
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 10)
      .map(({ passwordHash, ...u }) => u),
  }
}
