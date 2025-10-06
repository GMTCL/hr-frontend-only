'use client';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

interface DocumentsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DocumentsPage({ params }: DocumentsPageProps) {
  const { locale } = await params;
  const isThai = locale === 'th';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header locale={locale} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isThai ? 'ศูนย์เอกสาร' : 'Document Hub'}
          </h2>
          <p className="text-gray-600">
            {isThai ? 'จัดการเอกสารและไฟล์ขององค์กรอย่างมีประสิทธิภาพ' : 'Efficiently manage organizational documents and files'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Document Categories */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📄
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'เอกสาร HR' : 'HR Documents'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'สัญญาจ้าง, ใบลา, เอกสารประเมินผล' : 'Employment contracts, leave forms, performance reviews'}
            </p>
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'เอกสารทั้งหมด' : 'Total Documents'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📋
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'นโยบายบริษัท' : 'Company Policies'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'คู่มือพนักงาน, นโยบายต่างๆ' : 'Employee handbook, company policies'}
            </p>
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'เอกสารทั้งหมด' : 'Total Documents'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl mb-2">
                📊
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isThai ? 'รายงาน' : 'Reports'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isThai ? 'รายงานการเข้างาน, รายงานเงินเดือน' : 'Attendance reports, payroll reports'}
            </p>
            <div className="text-2xl font-bold text-purple-600">456</div>
            <div className="text-sm text-gray-500">
              {isThai ? 'เอกสารทั้งหมด' : 'Total Documents'}
            </div>
          </div>
        </div>

        {/* Document Management Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isThai ? 'ฟีเจอร์การจัดการเอกสาร' : 'Document Management Features'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การจัดเก็บและค้นหา' : 'Storage & Search'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'ระบบจัดเก็บเอกสารแบบคลาวด์' : 'Cloud-based document storage'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การค้นหาเอกสารแบบอัจฉริยะ' : 'Intelligent document search'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การจัดหมวดหมู่อัตโนมัติ' : 'Automatic categorization'}
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isThai ? 'การควบคุมเวอร์ชัน' : 'Version Control'}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การติดตามการเปลี่ยนแปลง' : 'Change tracking and history'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การอนุมัติเอกสาร' : 'Document approval workflow'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {isThai ? 'การรักษาความปลอดภัย' : 'Security and access control'}
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
