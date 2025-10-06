'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface TimeTrackingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TimeTrackingPage({ params }: TimeTrackingPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การติดตามเวลา' : 'Time Tracking'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'ติดตามเวลาทำงานและโครงการต่างๆ อย่างละเอียด' : 'Detailed time tracking for work hours and projects'}
          </p>
        </div>

        {/* Time Tracking Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                ⏰
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เวลาทำงานวันนี้' : 'Today\'s Work Time'}
            </h3>
            <div className="text-3xl font-bold text-blue-600">7:45</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ชั่วโมง' : 'Hours'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📊
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เวลาทำงานสัปดาห์นี้' : 'This Week'}
            </h3>
            <div className="text-3xl font-bold text-green-600">38:30</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ชั่วโมง' : 'Hours'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🎯
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เป้าหมายรายสัปดาห์' : 'Weekly Target'}
            </h3>
            <div className="text-3xl font-bold text-purple-600">40:00</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ชั่วโมง' : 'Hours'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📈
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ประสิทธิภาพ' : 'Efficiency'}
            </h3>
            <div className="text-3xl font-bold text-orange-600">96%</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'ของเป้าหมาย' : 'of Target'}
            </div>
          </div>
        </div>

        {/* Time Tracking Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Timer */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {isThai ? 'ตัวจับเวลา' : 'Timer'}
            </h3>
            
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-indigo-600 mb-4">00:00:00</div>
              <div className="text-gray-600 mb-6">
                {isThai ? 'กำลังทำงานใน: โครงการ HR System' : 'Currently working on: HR System Project'}
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  {isThai ? 'เริ่ม' : 'Start'}
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  {isThai ? 'หยุด' : 'Stop'}
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  {isThai ? 'รีเซ็ต' : 'Reset'}
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isThai ? 'เลือกโครงการ' : 'Select Project'}
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>{isThai ? 'HR System Development' : 'HR System Development'}</option>
                <option>{isThai ? 'Mobile App' : 'Mobile App'}</option>
                <option>{isThai ? 'Database Design' : 'Database Design'}</option>
                <option>{isThai ? 'Testing' : 'Testing'}</option>
              </select>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {isThai ? 'กิจกรรมล่าสุด' : 'Recent Activities'}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">
                    {isThai ? 'HR System Development' : 'HR System Development'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isThai ? '09:00 - 12:00 (3 ชั่วโมง)' : '09:00 - 12:00 (3 hours)'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">
                    {isThai ? 'Mobile App Testing' : 'Mobile App Testing'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isThai ? '13:00 - 15:30 (2.5 ชั่วโมง)' : '13:00 - 15:30 (2.5 hours)'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">
                    {isThai ? 'Database Optimization' : 'Database Optimization'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isThai ? '15:45 - 17:45 (2 ชั่วโมง)' : '15:45 - 17:45 (2 hours)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Tracking Features */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การติดตามเวลา' : 'Time Tracking Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'ตัวจับเวลาอัตโนมัติ' : 'Automatic Timer'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'จับเวลาทำงานอัตโนมัติตามกิจกรรม' : 'Automatic time tracking based on activities'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'รายงานละเอียด' : 'Detailed Reports'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'รายงานการใช้งานเวลาอย่างละเอียด' : 'Comprehensive time usage reports'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'การตั้งค่าเป้าหมาย' : 'Goal Setting'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'ตั้งเป้าหมายเวลาทำงานรายวัน/สัปดาห์' : 'Set daily/weekly work time goals'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'แอปมือถือ' : 'Mobile App'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'ติดตามเวลาผ่านแอปมือถือ' : 'Track time through mobile application'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'การแจ้งเตือน' : 'Notifications'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'แจ้งเตือนเมื่อถึงเวลาพักหรือเลิกงาน' : 'Notifications for break time and work end'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {isThai ? 'การวิเคราะห์' : 'Analytics'}
              </h4>
              <p className="text-gray-600 text-sm">
                {isThai ? 'วิเคราะห์ประสิทธิภาพการทำงาน' : 'Work efficiency analysis and insights'}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
