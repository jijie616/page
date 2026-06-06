const API_BASE = '/api'

type ApiResponse<T = unknown> = {
  success?: boolean
  error?: string
  message?: string
} & T

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = localStorage.getItem('token')

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || '请求失败')
  }

  return data
}

// Auth APIs
export async function register(name: string, email: string, password: string) {
  return request<{ token: string; user: unknown }>('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  })
}

export async function login(email: string, password: string) {
  return request<{ token: string; user: unknown }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export async function getMe() {
  return request<{ user: unknown }>('/auth/me')
}

// Admin APIs
export async function getAdminStats() {
  return request<{
    totalUsers: number
    newUsers7d: number
    newUsers30d: number
    totalWords: number
    activeUsers: number
    recentUsers: Array<{ id: string; name: string; email: string; createdAt: string }>
  }>('/admin/stats')
}

export async function getAdminUsers() {
  return request<{ users: Array<{ id: string; name: string; email: string; role: string; createdAt: string; wordCount?: number }> }>('/admin/users')
}
