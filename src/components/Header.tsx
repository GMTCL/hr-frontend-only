'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  language: 'en' | 'th';
  isLoggedIn?: boolean;
  onLoginChange?: (status: boolean) => void;
}

export default function Header({ language, isLoggedIn = false, onLoginChange }: HeaderProps) {
  const [loginStatus, setLoginStatus] = useState(isLoggedIn);
  const pathname = usePathname();

  // Function to get current path without language prefix
  const getCurrentPath = () => {
    if (!pathname) return '';
    return pathname.replace(/^\/(en|th)/, '') || '';
  };

  useEffect(() => {
    // Check login status from localStorage
    const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setLoginStatus(storedLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setLoginStatus(false);
    onLoginChange?.(false);
    // Redirect to home page
    window.location.href = `/${language}`;
  };

  const translations = {
    en: {
      title: "HR Management System",
      login: "Login",
      dashboard: "Dashboard",
      logout: "Logout"
    },
    th: {
      title: "ระบบจัดการทรัพยากรมนุษย์",
      login: "เข้าสู่ระบบ",
      dashboard: "หน้าแดชบอร์ด", 
      logout: "ออกจากระบบ"
    }
  };

  const t = translations[language];

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-indigo-900">
                {t.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex space-x-2">
              <Link 
                href={`/en${getCurrentPath()}`}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                English
              </Link>
              <Link 
                href={`/th${getCurrentPath()}`}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  language === 'th' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                ไทย
              </Link>
            </div>
            
            {!loginStatus ? (
              <div className="space-x-2">
                <Link
                  href={`/${language}/login`}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t.login}
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href={`/${language}/dashboard`}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t.dashboard}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >
                  {t.logout}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}