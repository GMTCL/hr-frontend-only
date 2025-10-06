'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface BenefitsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BenefitsPage({ params }: BenefitsPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การจัดการสวัสดิการ' : 'Benefits Management'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'จัดการสวัสดิการและสิทธิประโยชน์ของพนักงาน' : 'Manage employee benefits and welfare programs'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Benefits Overview Cards */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🏥
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ประกันสุขภาพ' : 'Health Insurance'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'พนักงานที่ได้รับประกันสุขภาพ' : 'Employees with health insurance'}
            </p>
            <div className="text-2xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ของพนักงานทั้งหมด' : 'of All Employees'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                💰
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'กองทุนสำรองเลี้ยงชีพ' : 'Provident Fund'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'พนักงานที่เข้าร่วมกองทุน' : 'Employees in provident fund'}
            </p>
            <div className="text-2xl font-bold text-green-600">85%</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ของพนักงานทั้งหมด' : 'of All Employees'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🎁
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'สวัสดิการอื่นๆ' : 'Other Benefits'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'สวัสดิการเพิ่มเติมที่ให้บริการ' : 'Additional benefits provided'}
            </p>
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ประเภท' : 'Types'}
            </div>
          </div>
        </div>

        {/* Benefits Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การจัดการสวัสดิการ' : 'Benefits Management Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การจัดการสิทธิประโยชน์' : 'Benefits Administration'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การลงทะเบียนสวัสดิการ' : 'Benefits enrollment system'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การติดตามการใช้งาน' : 'Usage tracking and monitoring'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดการการเปลี่ยนแปลง' : 'Benefits change management'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การรายงานและวิเคราะห์' : 'Reporting & Analytics'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'รายงานการใช้งานสวัสดิการ' : 'Benefits usage reports'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การวิเคราะห์ต้นทุน' : 'Cost analysis and budgeting'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การเปรียบเทียบสวัสดิการ' : 'Benefits benchmarking'}
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
