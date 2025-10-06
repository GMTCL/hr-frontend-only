'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../hooks/useAuth';
import { useDashboard } from '../../../hooks/useDashboard';

export default function DashboardPage() {
  const { user, isAuthenticated, loading: authLoading, logout } = useAuth();
  const { stats, recentActivities, loading: dashboardLoading, error, refreshData } = useDashboard();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/th/login');
    }
  }, [isAuthenticated, authLoading, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/th');
  };

  if (authLoading || dashboardLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">กำลังโหลด...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  // Format stats for display
  const displayStats = stats ? [
    { name: 'พนักงานทั้งหมด', value: stats.totalEmployees.toLocaleString(), change: '+12%', changeType: 'positive' },
    { name: 'เข้างานวันนี้', value: stats.presentToday.toLocaleString(), change: '+5%', changeType: 'positive' },
    { name: 'ใบลารออนุมัติ', value: stats.pendingLeaves.toLocaleString(), change: '-8%', changeType: 'negative' },
    { name: 'เงินเดือนเดือนนี้', value: `฿${(stats.monthlyPayroll / 1000000).toFixed(1)}M`, change: '+3%', changeType: 'positive' }
  ] : [];

  const quickActions = [
    { name: 'จัดการพนักงาน', href: '/th/employees', icon: '👥', color: 'from-blue-500 to-blue-700' },
    { name: 'ระบบลา', href: '/th/leaves', icon: '📅', color: 'from-green-500 to-green-700' },
    { name: 'การเข้างาน', href: '/th/attendance', icon: '⏰', color: 'from-purple-500 to-purple-700' },
    { name: 'เงินเดือน', href: '/th/payroll', icon: '💰', color: 'from-yellow-500 to-yellow-700' },
    { name: 'รายงาน', href: '/th/reports', icon: '📊', color: 'from-red-500 to-red-700' },
    { name: 'สแกนใบหน้า', href: '/th/facial-attendance', icon: '📷', color: 'from-indigo-500 to-indigo-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HR</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">แดชบอร์ด</h1>
                <p className="text-sm text-gray-500">ยินดีต้อนรับ, {user?.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/th" className="text-gray-600 hover:text-gray-900 transition-colors">
                หน้าหลัก
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                ออกจากระบบ
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <div className="flex items-center justify-between">
              <span>{error}</span>
              <button
                onClick={refreshData}
                className="text-red-600 hover:text-red-800 underline"
              >
                ลองใหม่
              </button>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">การดำเนินการด่วน</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    className="group p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                      {action.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {action.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">กิจกรรมล่าสุด</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/th/activities" className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors">
                  ดูทั้งหมด →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
