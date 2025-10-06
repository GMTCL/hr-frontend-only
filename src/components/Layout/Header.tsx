'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const isThai = locale === 'th';

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">HR</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {isThai ? 'ระบบจัดการทรัพยากรมนุษย์' : 'HR Management System'}
              </h1>
              <p className="text-sm text-gray-500">
                {isThai ? 'โซลูชั่นครบครัน สำหรับการจัดการ HR' : 'Enterprise-grade human resources platform'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-full p-1">
              <Link 
                href="/en/" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  locale === 'en' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                English
              </Link>
              <Link 
                href="/th/" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  locale === 'th' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                ไทย
              </Link>
            </div>
            
            <Link 
              href={`/${locale}/login/`}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isThai ? 'เข้าสู่ระบบ' : 'Sign In'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
