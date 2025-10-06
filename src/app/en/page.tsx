'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EnglishHomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, []);

  const modules = [
    {
      id: 1,
      title: "Employee Management",
      description: "Comprehensive employee lifecycle management with advanced profile system",
      icon: "👥",
      path: "/en/employees",
      gradient: "from-blue-500 to-blue-700",
      category: "Core Module"
    },
    {
      id: 2,
      title: "Attendance Tracking",
      description: "Real-time attendance monitoring with GPS tracking and shift management",
      icon: "⏰",
      path: "/en/attendance",
      gradient: "from-green-500 to-emerald-700",
      category: "Core Module"
    },
    {
      id: 3,
      title: "Payroll Management",
      description: "Automated payroll processing with tax calculations and compliance",
      icon: "💰",
      path: "/en/payroll",
      gradient: "from-yellow-500 to-orange-700",
      category: "Core Module"
    },
    {
      id: 4,
      title: "Leave Management",
      description: "Smart leave management with automated approval workflows",
      icon: "📅",
      path: "/en/leaves",
      gradient: "from-purple-500 to-purple-700",
      category: "Core Module"
    },
    {
      id: 5,
      title: "Performance Review",
      description: "360-degree performance evaluations with goal tracking and analytics",
      icon: "📊",
      path: "/en/performance",
      gradient: "from-red-500 to-pink-700",
      category: "Analytics"
    },
    {
      id: 6,
      title: "Reports & Analytics",
      description: "Advanced reporting suite with real-time dashboards and insights",
      icon: "📈",
      path: "/en/reports",
      gradient: "from-indigo-500 to-indigo-700",
      category: "Analytics"
    },
    {
      id: 7,
      title: "Training & Development",
      description: "Learning management system with skill tracking and certifications",
      icon: "🎓",
      path: "/en/training",
      gradient: "from-pink-500 to-rose-700",
      category: "Development"
    },
    {
      id: 8,
      title: "Recruitment",
      description: "AI-powered recruitment with applicant tracking and candidate scoring",
      icon: "🔍",
      path: "/en/recruitment",
      gradient: "from-orange-500 to-red-700",
      category: "Acquisition"
    },
    {
      id: 9,
      title: "Department Management",
      description: "Organizational structure management with hierarchy visualization",
      icon: "🏢",
      path: "/en/departments",
      gradient: "from-teal-500 to-cyan-700",
      category: "Organization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Advanced Header */}
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
                  HR Management System
                </h1>
                <p className="text-sm text-gray-500">Enterprise-grade human resources platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex bg-gray-100 rounded-full p-1">
                <Link href="/en" className="px-4 py-2 bg-white text-indigo-600 rounded-full text-sm font-medium shadow-sm">
                  English
                </Link>
                <Link href="/th" className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full text-sm font-medium transition-colors">
                  ไทย
                </Link>
              </div>
              
              {!isLoggedIn ? (
                <Link
                  href="/en/login"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign In
                </Link>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    href="/en/dashboard"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Dashboard
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Content */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Enterprise HR Solutions
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                HR Operations
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline your human resources management with our comprehensive platform featuring 18 integrated modules designed for modern enterprises.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              {!isLoggedIn ? (
                <>
                  <Link
                    href="/en/login"
                    className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-indigo-500/25 flex items-center"
                  >
                    Get Started Today
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/en/demo"
                    className="group bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 100-5H9v5zm0 0v6M9 10h.5a2.5 2.5 0 110 5H9v-5z" />
                    </svg>
                    Watch Demo
                  </Link>
                </>
              ) : (
                <Link
                  href="/en/dashboard"
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-indigo-500/25 flex items-center"
                >
                  Access Dashboard
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">18</div>
                <div className="text-sm text-gray-600 font-medium">Integrated Modules</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">2</div>
                <div className="text-sm text-gray-600 font-medium">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete HR Suite</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage your workforce efficiently with cutting-edge technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => (
                <Link
                  key={module.id}
                  href={module.path}
                  className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${module.gradient} rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {module.icon}
                      </div>
                      <div className="ml-4">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-2">
                          {module.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {module.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {module.description}
                    </p>
                    <div className="mt-6 flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Extended Capabilities</h3>
              <p className="text-lg text-gray-600">
                Additional tools to enhance your HR management experience
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Facial Attendance", icon: "📷", path: "/en/facial-attendance" },
                { name: "HR Attendance Mgmt", icon: "👥", path: "/en/hr-attendance-management" },
                { name: "Attendance Settings", icon: "⚙️", path: "/en/attendance-settings" },
                { name: "Asset Management", icon: "🏷️", path: "/en/assets" },
                { name: "Document Hub", icon: "📄", path: "/en/documents" },
                { name: "Time Tracking", icon: "⏱️", path: "/en/timetracking" },
                { name: "Benefits Portal", icon: "🎁", path: "/en/benefits" },
                { name: "Compliance", icon: "✅", path: "/en/compliance" },
                { name: "Self Service", icon: "👤", path: "/en/self-service" },
                { name: "Mobile App", icon: "📱", path: "/en/mobile" },
                { name: "Integrations", icon: "🔗", path: "/en/integrations" },
                { name: "Admin Panel", icon: "⚙️", path: "/en/settings" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="group bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-indigo-50 border border-gray-200 hover:border-indigo-200 rounded-xl p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your HR Operations?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using our platform to streamline their workforce management
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {!isLoggedIn ? (
                <>
                  <Link
                    href="/en/login"
                    className="group bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                  >
                    Start Free Trial
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/en/demo"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  >
                    Schedule Demo
                  </Link>
                </>
              ) : (
                <Link
                  href="/en/dashboard"
                  className="group bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                >
                  Go to Dashboard
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">HR</span>
                </div>
                <span className="text-xl font-bold">HR Management System</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The most comprehensive human resources management platform designed for modern enterprises.
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
              <h5 className="font-semibold text-white mb-4">Product</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/en/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/en/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/en/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link href="/en/security" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Support</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/en/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/en/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/en/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/en/api" className="hover:text-white transition-colors">API Reference</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 HR Management System. All rights reserved • Built with Next.js 15 & Laravel 11
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}