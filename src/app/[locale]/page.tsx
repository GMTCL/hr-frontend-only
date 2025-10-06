import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ModuleCard from '../../components/UI/ModuleCard';

export const dynamic = 'force-static';
export const dynamicParams = false;

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;
  const isThai = locale === 'th';

  const modules = [
    {
      href: `/${locale}/employees`,
      icon: '👥',
      title: isThai ? 'การจัดการพนักงาน' : 'Employee Management',
      description: isThai ? 'จัดการข้อมูลพนักงาน, ประวัติการทำงาน และข้อมูลส่วนตัว' : 'Comprehensive employee lifecycle management with advanced profile system',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500'
    },
    {
      href: `/${locale}/leaves`,
      icon: '📅',
      title: isThai ? 'ระบบลาป่วย/ลาพักร้อน' : 'Leave Management',
      description: isThai ? 'จัดการใบลา, อนุมัติการลา และติดตามวันลา' : 'Smart leave management with automated approval workflows',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500'
    },
    {
      href: `/${locale}/attendance`,
      icon: '⏰',
      title: isThai ? 'การเข้างาน/ลงเวลา' : 'Attendance Tracking',
      description: isThai ? 'ติดตามเวลาเข้างาน, การมาสาย และสถิติการเข้างาน' : 'Real-time attendance monitoring with GPS tracking and shift management',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-violet-500'
    },
    {
      href: `/${locale}/payroll`,
      icon: '💰',
      title: isThai ? 'การจ่ายเงินเดือน' : 'Payroll Management',
      description: isThai ? 'คำนวณเงินเดือน, ภาษี และสวัสดิการ' : 'Automated payroll processing with tax calculations and compliance',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-red-500'
    },
    {
      href: `/${locale}/performance`,
      icon: '📊',
      title: isThai ? 'การประเมินผล' : 'Performance Review',
      description: isThai ? 'ประเมินผลการปฏิบัติงาน KPI และเป้าหมาย' : '360-degree performance evaluations with goal tracking and analytics',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-rose-500'
    },
    {
      href: `/${locale}/training`,
      icon: '🎓',
      title: isThai ? 'การอบรม' : 'Training & Development',
      description: isThai ? 'จัดการหลักสูตรอบรม, การลงทะเบียน และผลการอบรม' : 'Learning management system with skill tracking and certifications',
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-blue-500'
    },
    {
      href: `/${locale}/benefits`,
      icon: '🎁',
      title: isThai ? 'สวัสดิการ' : 'Benefits Portal',
      description: isThai ? 'จัดการสิทธิประโยชน์ประกันสังคม และสวัสดิการ' : 'Comprehensive benefits management with enrollment and tracking',
      gradientFrom: 'from-teal-500',
      gradientTo: 'to-cyan-500'
    },
    {
      href: `/${locale}/recruitment`,
      icon: '🔍',
      title: isThai ? 'การรับสมัครงาน' : 'Recruitment',
      description: isThai ? 'ประกาศรับสมัคร, คัดเลือก และบรรจุพนักงาน' : 'AI-powered recruitment with applicant tracking and candidate scoring',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500'
    },
    {
      href: `/${locale}/reports`,
      icon: '📈',
      title: isThai ? 'รายงานและสถิติ' : 'Reports & Analytics',
      description: isThai ? 'รายงานข้อมูล HR, สถิติ และการวิเคราะห์' : 'Advanced reporting suite with real-time dashboards and insights',
      gradientFrom: 'from-gray-500',
      gradientTo: 'to-slate-500'
    },
    {
      href: `/${locale}/facial-attendance`,
      icon: '📷',
      title: isThai ? 'ระบบสแกนใบหน้า' : 'Facial Recognition',
      description: isThai ? 'เช็คชื่อเข้าออกด้วยเทคโนโลยี Facial Recognition' : 'Advanced facial recognition system for attendance tracking',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500'
    },
    {
      href: `/${locale}/hr-attendance-management`,
      icon: '👥',
      title: isThai ? 'จัดการการเข้างาน - HR' : 'HR Attendance Management',
      description: isThai ? 'ระบบติดตามและจัดการการเข้างานของพนักงาน' : 'Comprehensive attendance management system for HR professionals',
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-blue-500'
    },
    {
      href: `/${locale}/attendance-settings`,
      icon: '⚙️',
      title: isThai ? 'ตั้งค่าระบบการเข้างาน' : 'Attendance Settings',
      description: isThai ? 'กำหนดการตั้งค่าสำหรับระบบสแกนใบหน้าและเช็คชื่อ' : 'Configure attendance policies, schedules, and system settings',
      gradientFrom: 'from-teal-500',
      gradientTo: 'to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      </div>

      <Header locale={locale} />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                {isThai ? 'ระบบ HR ที่ทันสมัย' : 'Modern HR System'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {isThai ? 'จัดการ HR' : 'Transform Your'}
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {isThai ? 'อย่างมืออาชีพ' : 'HR Operations'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {isThai 
                ? 'ระบบจัดการทรัพยากรมนุษย์ที่ครบครัน ทันสมัย และใช้งานง่าย สำหรับองค์กรทุกขนาด เพื่อเพิ่มประสิทธิภาพในการทำงาน'
                : 'Streamline your human resources management with our comprehensive platform featuring 18 integrated modules designed for modern enterprises.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`/${locale}/login/`}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                {isThai ? 'เริ่มต้นใช้งาน' : 'Get Started Today'}
              </a>
              <a 
                href="#modules"
                className="group inline-flex items-center px-8 py-4 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
              >
                <svg className="w-6 h-6 mr-3 group-hover:bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
                {isThai ? 'ดูโมดูลทั้งหมด' : 'View All Modules'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {isThai ? '2,847' : '18'}
                </div>
                <div className="text-gray-900 font-semibold mb-1">
                  {isThai ? 'พนักงานทั้งหมด' : 'Integrated Modules'}
                </div>
                <div className="text-sm text-gray-600">
                  {isThai ? 'บุคลากรในองค์กร' : 'Complete HR Suite'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {isThai ? '18' : '99.9%'}
                </div>
                <div className="text-gray-900 font-semibold mb-1">
                  {isThai ? 'หน่วยงาน' : 'Uptime Guarantee'}
                </div>
                <div className="text-sm text-gray-600">
                  {isThai ? 'แผนกต่างๆ' : 'Reliable Service'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {isThai ? '156' : '2'}
                </div>
                <div className="text-gray-900 font-semibold mb-1">
                  {isThai ? 'ตำแหน่งงาน' : 'Languages'}
                </div>
                <div className="text-sm text-gray-600">
                  {isThai ? 'ตำแหน่งทั้งหมด' : 'Thai & English'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {isThai ? '95.8%' : '24/7'}
                </div>
                <div className="text-gray-900 font-semibold mb-1">
                  {isThai ? 'อัตราการเข้างาน' : 'Support'}
                </div>
                <div className="text-sm text-gray-600">
                  {isThai ? 'เฉลี่ยรายเดือน' : 'Always Available'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {isThai ? 'โมดูลระบบ HR' : 'Complete HR Suite'}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isThai 
                ? 'โซลูชั่นครบครันสำหรับการจัดการทุกด้านของทรัพยากรมนุษย์ในองค์กร'
                : 'Everything you need to manage your workforce efficiently with cutting-edge technology'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                href={module.href}
                icon={module.icon}
                title={module.title}
                description={module.description}
                gradientFrom={module.gradientFrom}
                gradientTo={module.gradientTo}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isThai ? 'พร้อมเริ่มต้นแล้วหรือยัง?' : 'Ready to Transform Your HR Operations?'}
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              {isThai 
                ? 'เข้าใช้งานระบบ HR ที่จะเปลี่ยนวิธีการทำงานของทีมคุณให้ดีขึ้น'
                : 'Join thousands of companies already using our platform to streamline their workforce management'
              }
            </p>
            <a 
              href={`/${locale}/login/`}
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
              {isThai ? 'เริ่มใช้งานทันที' : 'Start Free Trial'}
            </a>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}