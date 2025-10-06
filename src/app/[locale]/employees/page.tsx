import Link from 'next/link';

export const dynamic = 'force-static';
export const dynamicParams = false;

export default function EmployeesPage() {
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">จัดการพนักงาน</h1>
                <p className="text-sm text-gray-500">ระบบจัดการข้อมูลพนักงาน</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="../dashboard" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                กลับสู่ Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">จัดการพนักงาน</h2>
          <p className="text-gray-600">จัดการข้อมูลพนักงานและประวัติการทำงาน</p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">ระบบจัดการพนักงาน</h3>
            <p className="text-gray-600 mb-6">ระบบนี้จะเชื่อมต่อกับ Backend API เพื่อแสดงข้อมูลพนักงาน</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>หมายเหตุ:</strong> หน้านี้จะแสดงข้อมูลพนักงานจริงเมื่อเชื่อมต่อกับ Backend API
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


