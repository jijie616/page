import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { User, Mail, Calendar, BookOpen, TrendingUp, Clock, LogOut, ArrowRight, Shield } from 'lucide-react'

export function UserCenterPage() {
  const { user, loading, logout, isAdmin } = useAuth()

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="min-h-[80vh] bg-muted/30 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {user.name}，你好 👋
          </h1>
          <p className="text-muted-foreground mt-1">欢迎来到你的学习中心</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.role === 'admin' ? '管理员' : '学员'}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  注册于 {new Date(user.createdAt).toLocaleDateString('zh-CN')}
                </span>
              </div>
              {isAdmin && (
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <Link to="/admin" className="text-primary hover:underline font-medium">
                    进入管理后台
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{user.wordCount || 0}</div>
                      <div className="text-xs text-muted-foreground">已学单词</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{user.studyDays || 0}</div>
                      <div className="text-xs text-muted-foreground">学习天数</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-foreground">快速开始</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/product" className="flex items-center justify-between p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-foreground">开始背单词</div>
                      <div className="text-xs text-muted-foreground">选择新概念英语词库开始学习</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link to="/principles" className="flex items-center justify-between p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-foreground">了解学习原理</div>
                      <div className="text-xs text-muted-foreground">八大科学记忆方法</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </CardContent>
            </Card>

            {/* Logout */}
            <Button
              variant="outline"
              onClick={logout}
              className="w-full gap-2 text-muted-foreground"
            >
              <LogOut className="h-4 w-4" />
              退出登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
