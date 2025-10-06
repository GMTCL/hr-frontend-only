'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface MobilePageProps {
  params: Promise<{ locale: string }>;
}

export default async function MobilePage({ params }: MobilePageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'แอปพลิเคชันมือถือ' : 'Mobile Application'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'เข้าถึงระบบ HR ได้ทุกที่ทุกเวลาผ่านแอปมือถือ' : 'Access HR system anywhere, anytime through mobile app'}
          </p>
        </div>

        {/* Mobile App Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="h-12 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">HR Mobile</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">HR</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {isThai ? 'ยินดีต้อนรับ' : 'Welcome Back'}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3 flex items-center">
                        <span className="text-2xl mr-3">👤</span>
                        <span className="text-sm text-gray-600">
                          {isThai ? 'ข้อมูลส่วนตัว' : 'Profile'}
                        </span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex items-center">
                        <span className="text-2xl mr-3">⏰</span>
                        <span className="text-sm text-gray-600">
                          {isThai ? 'เช็คชื่อ' : 'Check In/Out'}
                        </span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex items-center">
                        <span className="text-2xl mr-3">📅</span>
                        <span className="text-sm text-gray-600">
                          {isThai ? 'ใบลา' : 'Leave Request'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {isThai ? 'ฟีเจอร์หลัก' : 'Key Features'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {isThai ? 'การเช็คชื่อด้วย GPS' : 'GPS-based Check-in'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {isThai ? 'เช็คชื่อเข้าออกด้วยตำแหน่ง GPS ที่แม่นยำ' : 'Accurate GPS-based attendance tracking'}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {isThai ? 'การแจ้งเตือนแบบ Push' : 'Push Notifications'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {isThai ? 'รับการแจ้งเตือนทันทีสำหรับงานสำคัญ' : 'Instant notifications for important tasks'}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {isThai ? 'การทำงานแบบออฟไลน์' : 'Offline Mode'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {isThai ? 'ใช้งานได้แม้ไม่มีอินเทอร์เน็ต' : 'Works even without internet connection'}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="flex-1 bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a href="#" className="flex-1 bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* App Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📱
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ใช้งานง่าย' : 'User Friendly'}
            </h3>
            <p className="text-gray-600 text-sm">
              {isThai ? 'อินเทอร์เฟซที่ใช้งานง่าย เหมาะสำหรับทุกวัย' : 'Intuitive interface designed for all users'}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🔒
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ปลอดภัย' : 'Secure'}
            </h3>
            <p className="text-gray-600 text-sm">
              {isThai ? 'การรักษาความปลอดภัยข้อมูลระดับสูง' : 'Enterprise-grade security and data protection'}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                ⚡
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เร็วและเสถียร' : 'Fast & Reliable'}
            </h3>
            <p className="text-gray-600 text-sm">
              {isThai ? 'ประสิทธิภาพสูงและเสถียรภาพดี' : 'High performance and reliable operation'}
            </p>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
