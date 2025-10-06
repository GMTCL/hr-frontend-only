'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface CompliancePageProps {
  params: Promise<{ locale: string }>;
}

export default async function CompliancePage({ params }: CompliancePageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การปฏิบัติตามกฎระเบียบ' : 'Compliance Management'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'จัดการการปฏิบัติตามกฎหมายและกฎระเบียบขององค์กร' : 'Ensure compliance with laws and organizational regulations'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Compliance Status Cards */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                ✅
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'กฎหมายแรงงาน' : 'Labor Law'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'การปฏิบัติตามกฎหมายแรงงานและสิทธิพนักงาน' : 'Compliance with labor laws and employee rights'}
            </p>
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ระดับการปฏิบัติตาม' : 'Compliance Rate'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🛡️
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ความปลอดภัย' : 'Safety Standards'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'มาตรฐานความปลอดภัยในการทำงาน' : 'Workplace safety standards and protocols'}
            </p>
            <div className="text-2xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ระดับการปฏิบัติตาม' : 'Compliance Rate'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🔒
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ข้อมูลส่วนตัว' : 'Data Privacy'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'การปกป้องข้อมูลส่วนตัวตาม PDPA' : 'Data protection compliance with PDPA'}
            </p>
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ระดับการปฏิบัติตาม' : 'Compliance Rate'}
            </div>
          </div>
        </div>

        {/* Compliance Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การจัดการ Compliance' : 'Compliance Management Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การตรวจสอบและรายงาน' : 'Audit & Reporting'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การตรวจสอบภายในอัตโนมัติ' : 'Automated internal audits'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'รายงานการปฏิบัติตามกฎระเบียบ' : 'Compliance reporting dashboard'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การแจ้งเตือนเมื่อมีการเปลี่ยนแปลง' : 'Change notification alerts'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การฝึกอบรม' : 'Training & Education'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'หลักสูตรการฝึกอบรม Compliance' : 'Compliance training programs'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การทดสอบความรู้' : 'Knowledge assessment tests'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ใบรับรองการฝึกอบรม' : 'Training certification tracking'}
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
