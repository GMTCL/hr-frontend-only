'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface SelfServicePageProps {
  params: Promise<{ locale: string }>;
}

export default async function SelfServicePage({ params }: SelfServicePageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'บริการตนเอง' : 'Self Service Portal'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'พนักงานสามารถจัดการข้อมูลส่วนตัวและงานต่างๆ ได้ด้วยตนเอง' : 'Employees can manage their personal information and tasks independently'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Self Service Features */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                👤
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ข้อมูลส่วนตัว' : 'Personal Information'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'แก้ไขข้อมูลส่วนตัว, ที่อยู่, เบอร์โทรศัพท์' : 'Update personal details, address, contact information'}
            </p>
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'เข้าถึงได้ตลอดเวลา' : 'Available Anytime'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📅
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ใบลา' : 'Leave Management'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'ยื่นใบลา, ตรวจสอบวันลาคงเหลือ' : 'Submit leave requests, check remaining leave balance'}
            </p>
            <div className="text-2xl font-bold text-green-600">15</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'วันลาคงเหลือ' : 'Days Remaining'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                💰
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ข้อมูลเงินเดือน' : 'Payroll Information'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'ดูสลิปเงินเดือน, รายการหักเงิน' : 'View payslips, deduction details'}
            </p>
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'สลิปเงินเดือน' : 'Payslips Available'}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'การดำเนินการด่วน' : 'Quick Actions'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'ยื่นใบลา' : 'Submit Leave'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'ยื่นใบลาป่วย/ลาพักร้อน' : 'Submit sick/annual leave'}
              </p>
            </a>

            <a href="#" className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'เช็คชื่อ' : 'Check In/Out'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'เช็คชื่อเข้าออกงาน' : 'Check in/out of work'}
              </p>
            </a>

            <a href="#" className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'ดูรายงาน' : 'View Reports'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'รายงานการเข้างาน' : 'Attendance reports'}
              </p>
            </a>

            <a href="#" className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'ตั้งค่า' : 'Settings'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'จัดการการตั้งค่าส่วนตัว' : 'Manage personal settings'}
              </p>
            </a>
          </div>
        </div>

        {/* Self Service Benefits */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ประโยชน์ของบริการตนเอง' : 'Self Service Benefits'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'สำหรับพนักงาน' : 'For Employees'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'เข้าถึงข้อมูลได้ตลอด 24 ชั่วโมง' : '24/7 access to personal information'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ลดขั้นตอนการทำงาน' : 'Reduced administrative burden'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ความสะดวกและรวดเร็ว' : 'Convenience and speed'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'สำหรับองค์กร' : 'For Organization'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ลดภาระงานของ HR' : 'Reduced HR workload'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ความแม่นยำของข้อมูล' : 'Improved data accuracy'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ประหยัดต้นทุน' : 'Cost savings'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
