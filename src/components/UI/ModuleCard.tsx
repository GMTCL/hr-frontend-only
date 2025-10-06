'use client';

import Link from 'next/link';

interface ModuleCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  locale: string;
}

export default function ModuleCard({ 
  href, 
  icon, 
  title, 
  description, 
  gradientFrom, 
  gradientTo,
  locale 
}: ModuleCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
        <div className={`w-16 h-16 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
          {locale === 'th' ? 'เข้าใช้งาน' : 'Learn more'}
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
}
