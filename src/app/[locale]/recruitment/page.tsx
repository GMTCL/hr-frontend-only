'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface RecruitmentPageProps {
  params: Promise<{ locale: string }>;
}

export default async function RecruitmentPage({ params }: RecruitmentPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การรับสมัครงาน' : 'Recruitment Management'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'จัดการกระบวนการรับสมัครงานและคัดเลือกบุคลากร' : 'Manage recruitment process and talent acquisition'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recruitment Overview Cards */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📋
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ตำแหน่งที่เปิดรับ' : 'Open Positions'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'ตำแหน่งงานที่กำลังรับสมัคร' : 'Job positions currently open'}
            </p>
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ตำแหน่ง' : 'Positions'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                👥
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ผู้สมัครงาน' : 'Applicants'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'จำนวนผู้สมัครงานทั้งหมด' : 'Total number of applicants'}
            </p>
            <div className="text-2xl font-bold text-green-600">156</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'คน' : 'People'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                ✅
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'การบรรจุสำเร็จ' : 'Successful Hires'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'การบรรจุงานที่สำเร็จในเดือนนี้' : 'Successful hires this month'}
            </p>
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'คน' : 'People'}
            </div>
          </div>
        </div>

        {/* Recruitment Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การรับสมัครงาน' : 'Recruitment Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การจัดการตำแหน่งงาน' : 'Job Management'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การสร้างและจัดการตำแหน่งงาน' : 'Create and manage job positions'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การประกาศรับสมัครออนไลน์' : 'Online job posting and advertising'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดการใบสมัคร' : 'Application form management'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การคัดเลือกและสัมภาษณ์' : 'Selection & Interview'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การคัดกรองใบสมัคร' : 'Application screening and filtering'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดตารางสัมภาษณ์' : 'Interview scheduling system'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การประเมินและให้คะแนน' : 'Candidate evaluation and scoring'}
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
