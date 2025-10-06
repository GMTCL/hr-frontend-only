'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface SettingsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function SettingsPage({ params }: SettingsPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การตั้งค่าระบบ' : 'System Settings'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'จัดการการตั้งค่าระบบและนโยบายขององค์กร' : 'Manage system settings and organizational policies'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isThai ? 'หมวดหมู่การตั้งค่า' : 'Settings Categories'}
              </h3>
              <nav className="space-y-2">
                <a href="#general" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  {isThai ? 'การตั้งค่าทั่วไป' : 'General Settings'}
                </a>
                <a href="#security" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  {isThai ? 'ความปลอดภัย' : 'Security'}
                </a>
                <a href="#notifications" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  {isThai ? 'การแจ้งเตือน' : 'Notifications'}
                </a>
                <a href="#attendance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  {isThai ? 'การเข้างาน' : 'Attendance'}
                </a>
                <a href="#payroll" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  {isThai ? 'เงินเดือน' : 'Payroll'}
                </a>
                <a href="#integrations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  {isThai ? 'การเชื่อมต่อ' : 'Integrations'}
                </a>
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* General Settings */}
            <div id="general" className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {isThai ? 'การตั้งค่าทั่วไป' : 'General Settings'}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isThai ? 'ชื่อบริษัท' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder={isThai ? 'กรอกชื่อบริษัท' : 'Enter company name'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isThai ? 'ภาษาเริ่มต้น' : 'Default Language'}
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="th">{isThai ? 'ไทย' : 'Thai'}</option>
                    <option value="en">{isThai ? 'อังกฤษ' : 'English'}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isThai ? 'เขตเวลา' : 'Time Zone'}
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="Asia/Bangkok">Asia/Bangkok (GMT+7)</option>
                    <option value="UTC">UTC (GMT+0)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div id="security" className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {isThai ? 'การตั้งค่าความปลอดภัย' : 'Security Settings'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {isThai ? 'การเข้าสู่ระบบด้วย 2FA' : 'Two-Factor Authentication'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isThai ? 'เปิดใช้งานการยืนยันตัวตน 2 ขั้นตอน' : 'Enable two-step verification'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {isThai ? 'การบังคับใช้รหัสผ่านที่แข็งแกร่ง' : 'Strong Password Policy'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isThai ? 'บังคับให้ใช้รหัสผ่านที่ซับซ้อน' : 'Enforce complex password requirements'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isThai ? 'ระยะเวลาหมดอายุของเซสชัน (นาที)' : 'Session Timeout (minutes)'}
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue="30"
                  />
                </div>
              </div>
            </div>

            {/* Attendance Settings */}
            <div id="attendance" className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {isThai ? 'การตั้งค่าการเข้างาน' : 'Attendance Settings'}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isThai ? 'เวลาเข้างาน' : 'Work Start Time'}
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue="09:00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isThai ? 'เวลาเลิกงาน' : 'Work End Time'}
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue="18:00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isThai ? 'ระยะเวลาการมาสายที่อนุญาต (นาที)' : 'Allowed Late Time (minutes)'}
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue="15"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                {isThai ? 'บันทึกการตั้งค่า' : 'Save Settings'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
