'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface AssetsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AssetsPage({ params }: AssetsPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การจัดการทรัพย์สิน' : 'Asset Management'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'จัดการทรัพย์สินและอุปกรณ์ขององค์กร' : 'Manage company assets and equipment efficiently'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Asset Overview Cards */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                💻
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'อุปกรณ์ IT' : 'IT Equipment'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'จัดการคอมพิวเตอร์, โน๊ตบุ๊ค และอุปกรณ์ IT' : 'Manage computers, laptops and IT equipment'}
            </p>
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'รายการทั้งหมด' : 'Total Items'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🪑
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เฟอร์นิเจอร์' : 'Furniture'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'จัดการโต๊ะ, เก้าอี้ และเฟอร์นิเจอร์สำนักงาน' : 'Manage desks, chairs and office furniture'}
            </p>
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'รายการทั้งหมด' : 'Total Items'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📱
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'อุปกรณ์มือถือ' : 'Mobile Devices'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'จัดการโทรศัพท์, แท็บเล็ต และอุปกรณ์มือถือ' : 'Manage phones, tablets and mobile devices'}
            </p>
            <div className="text-2xl font-bold text-purple-600">45</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'รายการทั้งหมด' : 'Total Items'}
            </div>
          </div>
        </div>

        {/* Asset Management Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การจัดการทรัพย์สิน' : 'Asset Management Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การติดตามทรัพย์สิน' : 'Asset Tracking'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ติดตามตำแหน่งทรัพย์สินแบบเรียลไทม์' : 'Real-time asset location tracking'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ระบบ QR Code สำหรับการสแกน' : 'QR Code system for easy scanning'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ประวัติการใช้งานทรัพย์สิน' : 'Asset usage history tracking'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การบำรุงรักษา' : 'Maintenance Management'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'กำหนดการบำรุงรักษาตามกำหนด' : 'Scheduled maintenance reminders'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'รายงานการซ่อมแซม' : 'Repair and maintenance reports'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดการค่าใช้จ่าย' : 'Cost management and budgeting'}
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
