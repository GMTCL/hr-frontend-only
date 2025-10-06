'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface IntegrationsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function IntegrationsPage({ params }: IntegrationsPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'การเชื่อมต่อระบบ' : 'System Integrations'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'เชื่อมต่อระบบ HR กับแอปพลิเคชันและบริการอื่นๆ' : 'Connect HR system with other applications and services'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Integration Categories */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                💼
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ระบบบัญชี' : 'Accounting Systems'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'เชื่อมต่อกับระบบบัญชีและเงินเดือน' : 'Connect with accounting and payroll systems'}
            </p>
            <div className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {isThai ? 'เชื่อมต่อแล้ว' : 'Connected'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📧
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'อีเมลและแชท' : 'Email & Chat'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'เชื่อมต่อกับระบบอีเมลและแชท' : 'Connect with email and chat systems'}
            </p>
            <div className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {isThai ? 'เชื่อมต่อแล้ว' : 'Connected'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                🔐
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'ระบบความปลอดภัย' : 'Security Systems'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'เชื่อมต่อกับระบบความปลอดภัย' : 'Connect with security and access systems'}
            </p>
            <div className="flex items-center text-yellow-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              {isThai ? 'รอการเชื่อมต่อ' : 'Pending'}
            </div>
          </div>
        </div>

        {/* Available Integrations */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'การเชื่อมต่อที่มีให้' : 'Available Integrations'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'SAP', status: 'connected', icon: '🔵' },
              { name: 'Oracle', status: 'connected', icon: '🔴' },
              { name: 'Microsoft 365', status: 'connected', icon: '🔵' },
              { name: 'Google Workspace', status: 'connected', icon: '🔵' },
              { name: 'Slack', status: 'connected', icon: '🟣' },
              { name: 'Teams', status: 'connected', icon: '🔵' },
              { name: 'Zoom', status: 'pending', icon: '🔵' },
              { name: 'Salesforce', status: 'pending', icon: '🔵' }
            ].map((integration, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 text-center">
                <div className="text-3xl mb-3">{integration.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{integration.name}</h4>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  integration.status === 'connected' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {integration.status === 'connected' 
                    ? (isThai ? 'เชื่อมต่อแล้ว' : 'Connected')
                    : (isThai ? 'รอการเชื่อมต่อ' : 'Pending')
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การเชื่อมต่อ' : 'Integration Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การซิงค์ข้อมูล' : 'Data Synchronization'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การซิงค์ข้อมูลแบบเรียลไทม์' : 'Real-time data synchronization'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การแปลงข้อมูลอัตโนมัติ' : 'Automatic data transformation'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การตรวจสอบความถูกต้อง' : 'Data validation and verification'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การจัดการ API' : 'API Management'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'RESTful API ที่ปลอดภัย' : 'Secure RESTful APIs'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดการการเข้าถึง' : 'Access control and permissions'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การติดตามการใช้งาน' : 'Usage monitoring and analytics'}
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
