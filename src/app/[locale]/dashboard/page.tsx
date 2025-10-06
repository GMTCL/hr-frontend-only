import Link from 'next/link';

export const dynamic = 'force-static';
export const dynamicParams = false;

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">HR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Dashboard</h1>
                <p className="text-sm text-gray-500">ระบบจัดการทรัพยากรมนุษย์</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="../login" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                ออกจากระบบ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">ยินดีต้อนรับสู่ระบบ HR</h2>
          <p className="text-gray-600">จัดการทรัพยากรมนุษย์ของคุณได้อย่างมีประสิทธิภาพ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="./employees" className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">จัดการพนักงาน</h3>
            <p className="text-gray-600 text-sm">จัดการข้อมูลพนักงานและประวัติการทำงาน</p>
          </Link>

          <Link href="./departments" className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                🏢
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">จัดการแผนก</h3>
            <p className="text-gray-600 text-sm">จัดการโครงสร้างองค์กรและแผนกต่างๆ</p>
          </Link>

          <Link href="./leaves" className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                📅
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">ระบบลา</h3>
            <p className="text-gray-600 text-sm">จัดการการลาและการอนุมัติ</p>
          </Link>

          <Link href="./attendance" className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                ⏰
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">การเข้างาน</h3>
            <p className="text-gray-600 text-sm">ติดตามการเข้างานและลงเวลา</p>
          </Link>

          <Link href="./facial-attendance" className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-700 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                📷
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">สแกนใบหน้า</h3>
            <p className="text-gray-600 text-sm">ระบบเช็คชื่อด้วยเทคโนโลยี AI</p>
          </Link>

          <Link href="./hr-attendance-management" className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">จัดการการเข้างาน</h3>
            <p className="text-gray-600 text-sm">ระบบจัดการการเข้างานสำหรับ HR</p>
          </Link>
        </div>
      </main>
    </div>
  );
}


