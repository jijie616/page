import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/lib/auth-context'
import { getAdminStats, getAdminUsers } from '@/lib/api'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Users, UserPlus, BookOpen, Activity, TrendingUp, Calendar, Mail } from 'lucide-react'

interface Stats {
  totalUsers: number
  newUsers7d: number
  newUsers30d: number
  totalWords: number
  activeUsers: number
  recentUsers: Array<{ id: string; name: string; email: string; createdAt: string }>
}

interface UserItem {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
  wordCount?: number
  studyDays?: number
}

export function AdminPage() {
  const { user, loading, isAdmin } = useAuth()
  const [stats, setStats] = useState<Stats | null>(null)
  const [users, setUsers] = useState<UserItem[]>([])
  const [dataLoading, setDataLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isAdmin) return

    Promise.all([getAdminStats(), getAdminUsers()])
      .then(([statsData, usersData]) => {
        setStats(statsData as unknown as Stats)
        setUsers((usersData as unknown as { users: UserItem[] }).users || [])
      })
      .catch(err => setError(err.message))
      .finally(() => setDataLoading(false))
  }, [isAdmin])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="min-h-[80vh] bg-muted/30 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">管理后台</h1>
          <p className="text-muted-foreground mt-1">用户数据总览</p>
        </div>

        {error && (
          <div className="text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2 mb-6">
            {error}
          </div>
        )}

        {dataLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground">加载数据中...</p>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stats?.totalUsers || 0}</div>
                      <div className="text-xs text-muted-foreground">总用户数</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <UserPlus className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stats?.newUsers7d || 0}</div>
                      <div className="text-xs text-muted-foreground">7日新增</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stats?.newUsers30d || 0}</div>
                      <div className="text-xs text-muted-foreground">30日新增</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stats?.totalWords || 0}</div>
                      <div className="text-xs text-muted-foreground">累计词汇</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stats?.activeUsers || 0}</div>
                      <div className="text-xs text-muted-foreground">活跃用户</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Users */}
            <Card className="mb-8">
              <CardHeader>
                <h2 className="font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  最近注册用户
                </h2>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="py-3 font-medium text-muted-foreground">姓名</th>
                        <th className="py-3 font-medium text-muted-foreground">邮箱</th>
                        <th className="py-3 font-medium text-muted-foreground hidden md:table-cell">注册时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats?.recentUsers?.map(u => (
                        <tr key={u.id} className="border-b last:border-0">
                          <td className="py-3 font-medium text-foreground">{u.name}</td>
                          <td className="py-3 text-muted-foreground">{u.email}</td>
                          <td className="py-3 text-muted-foreground hidden md:table-cell">
                            {new Date(u.createdAt).toLocaleString('zh-CN')}
                          </td>
                        </tr>
                      ))}
                      {(!stats?.recentUsers || stats.recentUsers.length === 0) && (
                        <tr>
                          <td colSpan={3} className="py-8 text-center text-muted-foreground">
                            暂无用户数据
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* All Users */}
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  全部用户 ({users.length})
                </h2>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="py-3 font-medium text-muted-foreground">姓名</th>
                        <th className="py-3 font-medium text-muted-foreground">邮箱</th>
                        <th className="py-3 font-medium text-muted-foreground hidden md:table-cell">角色</th>
                        <th className="py-3 font-medium text-muted-foreground hidden md:table-cell">已学单词</th>
                        <th className="py-3 font-medium text-muted-foreground hidden md:table-cell">注册时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(u => (
                        <tr key={u.id} className="border-b last:border-0">
                          <td className="py-3 font-medium text-foreground">{u.name}</td>
                          <td className="py-3 text-muted-foreground">{u.email}</td>
                          <td className="py-3 hidden md:table-cell">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              u.role === 'admin' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                            }`}>
                              {u.role === 'admin' ? '管理员' : '用户'}
                            </span>
                          </td>
                          <td className="py-3 text-muted-foreground hidden md:table-cell">{u.wordCount || 0}</td>
                          <td className="py-3 text-muted-foreground hidden md:table-cell">
                            {new Date(u.createdAt).toLocaleDateString('zh-CN')}
                          </td>
                        </tr>
                      ))}
                      {users.length === 0 && (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-muted-foreground">
                            暂无用户数据
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
