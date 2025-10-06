'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface PayrollPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PayrollPage({ params }: PayrollPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การจ่ายเงินเดือน' : 'Payroll Management'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'จัดการการจ่ายเงินเดือนและสวัสดิการพนักงาน' : 'Manage employee payroll and benefits efficiently'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Payroll Overview Cards */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                💰
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เงินเดือนรวม' : 'Total Payroll'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'ยอดเงินเดือนรวมทั้งเดือน' : 'Total monthly payroll amount'}
            </p>
            <div className="text-2xl font-bold text-blue-600">฿2,847,500</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'บาท' : 'THB'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                👥
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'จำนวนพนักงาน' : 'Total Employees'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'พนักงานที่ได้รับเงินเดือน' : 'Employees receiving salary'}
            </p>
            <div className="text-2xl font-bold text-green-600">156</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'คน' : 'People'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📊
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เงินเดือนเฉลี่ย' : 'Average Salary'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'เงินเดือนเฉลี่ยต่อคน' : 'Average salary per employee'}
            </p>
            <div className="text-2xl font-bold text-purple-600">฿18,253</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'บาท' : 'THB'}
            </div>
          </div>
        </div>

        {/* Payroll Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การจ่ายเงินเดือน' : 'Payroll Management Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การคำนวณเงินเดือน' : 'Salary Calculation'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'คำนวณเงินเดือนอัตโนมัติ' : 'Automatic salary calculation'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การคำนวณภาษีและประกันสังคม' : 'Tax and social security calculations'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การคำนวณโอทีและค่าล่วงเวลา' : 'Overtime and bonus calculations'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การจัดการสวัสดิการ' : 'Benefits Management'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดการประกันสุขภาพ' : 'Health insurance management'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดการกองทุนสำรองเลี้ยงชีพ' : 'Provident fund management'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดการสวัสดิการอื่นๆ' : 'Other benefits management'}
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
