'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface PerformancePageProps {
  params: Promise<{ locale: string }>;
}

export default async function PerformancePage({ params }: PerformancePageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การประเมินผลการปฏิบัติงาน' : 'Performance Management'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'ประเมินและติดตามผลการปฏิบัติงานของพนักงาน' : 'Evaluate and track employee performance effectively'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Performance Overview Cards */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📊
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'การประเมินที่เสร็จสิ้น' : 'Completed Reviews'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'การประเมินผลที่เสร็จสิ้นในไตรมาสนี้' : 'Reviews completed this quarter'}
            </p>
            <div className="text-2xl font-bold text-blue-600">89%</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ของเป้าหมาย' : 'of Target'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🎯
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เป้าหมายที่บรรลุ' : 'Goals Achieved'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'เป้าหมายที่บรรลุในไตรมาสนี้' : 'Goals achieved this quarter'}
            </p>
            <div className="text-2xl font-bold text-green-600">76%</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ของเป้าหมายทั้งหมด' : 'of All Goals'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                ⭐
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'คะแนนเฉลี่ย' : 'Average Score'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'คะแนนการประเมินเฉลี่ย' : 'Average performance score'}
            </p>
            <div className="text-2xl font-bold text-purple-600">4.2</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'จาก 5 คะแนน' : 'out of 5'}
            </div>
          </div>
        </div>

        {/* Performance Management Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การประเมินผล' : 'Performance Management Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การประเมิน 360 องศา' : '360-Degree Reviews'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การประเมินจากเพื่อนร่วมงาน' : 'Peer evaluation system'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การประเมินจากหัวหน้า' : 'Manager evaluation'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การประเมินตนเอง' : 'Self-assessment'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การติดตามเป้าหมาย' : 'Goal Tracking'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การตั้งเป้าหมาย SMART' : 'SMART goal setting'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การติดตามความคืบหน้า' : 'Progress tracking'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การวิเคราะห์ผลการปฏิบัติงาน' : 'Performance analytics'}
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
