'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface ReportsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ReportsPage({ params }: ReportsPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'รายงานและสถิติ' : 'Reports & Analytics'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'รายงานข้อมูล HR และการวิเคราะห์สถิติ' : 'HR reports and statistical analysis'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reports Overview Cards */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📊
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'รายงานที่สร้าง' : 'Generated Reports'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'รายงานที่สร้างในเดือนนี้' : 'Reports generated this month'}
            </p>
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'รายงาน' : 'Reports'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📈
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'การวิเคราะห์ข้อมูล' : 'Data Analytics'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'การวิเคราะห์ข้อมูล HR' : 'HR data analysis'}
            </p>
            <div className="text-2xl font-bold text-green-600">156</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'การวิเคราะห์' : 'Analyses'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📋
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'Dashboard' : 'Dashboards'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'Dashboard ที่ใช้งาน' : 'Active dashboards'}
            </p>
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'Dashboard' : 'Dashboards'}
            </div>
          </div>
        </div>

        {/* Reports Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์รายงานและสถิติ' : 'Reports & Analytics Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'รายงานมาตรฐาน' : 'Standard Reports'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'รายงานการเข้างาน' : 'Attendance reports'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'รายงานเงินเดือน' : 'Payroll reports'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'รายงานการลา' : 'Leave reports'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การวิเคราะห์ขั้นสูง' : 'Advanced Analytics'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การวิเคราะห์แนวโน้ม' : 'Trend analysis and forecasting'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'Dashboard แบบเรียลไทม์' : 'Real-time dashboards'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การส่งออกข้อมูล' : 'Data export and sharing'}
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
