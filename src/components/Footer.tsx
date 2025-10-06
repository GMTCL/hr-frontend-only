'use client';

import Link from 'next/link';

interface FooterProps {
  language: 'en' | 'th';
}

export default function Footer({ language }: FooterProps) {
  const translations = {
    en: {
      company: "Company",
      about: "About Us",
      contact: "Contact",
      careers: "Careers",
      product: "Product",
      features: "Features", 
      pricing: "Pricing",
      integrations: "Integrations",
      support: "Support",
      help: "Help Center",
      documentation: "Documentation",
      api: "API Guide",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      security: "Security",
      copyright: "© 2024 HR Management System. All rights reserved • Powered by Next.js 15 & Laravel 11"
    },
    th: {
      company: "บริษัท",
      about: "เกี่ยวกับเรา",
      contact: "ติดต่อเรา",
      careers: "สมัครงาน",
      product: "ผลิตภัณฑ์",
      features: "คุณสมบัติ",
      pricing: "ราคา", 
      integrations: "การเชื่อมต่อ",
      support: "สนับสนุน",
      help: "ศูนย์ความช่วยเหลือ",
      documentation: "เอกสารประกอบ",
      api: "คู่มือ API",
      legal: "กฎหมาย",
      privacy: "นโยบายความเป็นส่วนตัว",
      terms: "เงื่อนไขการใช้บริการ",
      security: "ความปลอดภัย",
      copyright: "© 2024 ระบบจัดการทรัพยากรมนุษย์ สงวนลิขสิทธิ์ทุกประการ • ขับเคลื่อนโดย Next.js 15 & Laravel 11"
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">{t.company}</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href={`/${language}/about`} className="hover:text-gray-900">{t.about}</Link></li>
              <li><Link href={`/${language}/contact`} className="hover:text-gray-900">{t.contact}</Link></li>
              <li><Link href={`/${language}/careers`} className="hover:text-gray-900">{t.careers}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">{t.product}</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href={`/${language}/features`} className="hover:text-gray-900">{t.features}</Link></li>
              <li><Link href={`/${language}/pricing`} className="hover:text-gray-900">{t.pricing}</Link></li>
              <li><Link href={`/${language}/integrations`} className="hover:text-gray-900">{t.integrations}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">{t.support}</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href={`/${language}/help`} className="hover:text-gray-900">{t.help}</Link></li>
              <li><Link href={`/${language}/documentation`} className="hover:text-gray-900">{t.documentation}</Link></li>
              <li><Link href={`/${language}/api`} className="hover:text-gray-900">{t.api}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">{t.legal}</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href={`/${language}/privacy`} className="hover:text-gray-900">{t.privacy}</Link></li>
              <li><Link href={`/${language}/terms`} className="hover:text-gray-900">{t.terms}</Link></li>
              <li><Link href={`/${language}/security`} className="hover:text-gray-900">{t.security}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-gray-600">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}