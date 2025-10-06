'use client';

import Link from 'next/link';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const isThai = locale === 'th';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HR</span>
              </div>
              <span className="text-xl font-bold">
                {isThai ? 'ระบบจัดการ HR' : 'HR Management System'}
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {isThai 
                ? 'โซลูชั่นการจัดการทรัพยากรมนุษย์ที่ครบครัน ทันสมัย และเหมาะสำหรับองค์กรทุกขนาด'
                : 'The most comprehensive human resources management platform designed for modern enterprises.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <span className="text-sm">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <span className="text-sm">💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <span className="text-sm">🐦</span>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-4">
              {isThai ? 'โมดูลหลัก' : 'Product'}
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href={`/${locale}/employees`} className="hover:text-white transition-colors">
                  {isThai ? 'จัดการพนักงาน' : 'Employee Management'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/attendance`} className="hover:text-white transition-colors">
                  {isThai ? 'เข้างาน/ลงเวลา' : 'Attendance Tracking'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/payroll`} className="hover:text-white transition-colors">
                  {isThai ? 'จ่ายเงินเดือน' : 'Payroll Management'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/leaves`} className="hover:text-white transition-colors">
                  {isThai ? 'ระบบลา' : 'Leave Management'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-4">
              {isThai ? 'ติดต่อเรา' : 'Support'}
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                {isThai ? 'อีเมล: info@hr-system.com' : 'Email: info@hr-system.com'}
              </li>
              <li>
                {isThai ? 'โทร: 02-123-4567' : 'Phone: +66 2-123-4567'}
              </li>
              <li>
                {isThai ? 'ที่อยู่: กรุงเทพมหานคร' : 'Address: Bangkok, Thailand'}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 HR Management System. {isThai ? 'สงวนสิทธิ์ทั้งหมด' : 'All rights reserved'} • Built with Next.js 15 & Laravel 11
          </p>
        </div>
      </div>
    </footer>
  );
}
