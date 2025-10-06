// HR Modules configuration
export interface HRModule {
  id: number;
  title: string;
  description: string;
  icon: string;
  path: string;
  color: string;
  category?: string;
}

export const hrModulesEn: HRModule[] = [
  {
    id: 1,
    title: "Employee Management",
    description: "Comprehensive employee lifecycle management with full profiles",
    icon: "👥",
    path: "/en/employees",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    category: "core"
  },
  {
    id: 2,
    title: "Attendance Tracking", 
    description: "Advanced attendance system with GPS tracking and shift support",
    icon: "⏰",
    path: "/en/attendance",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    category: "core"
  },
  {
    id: 3,
    title: "Payroll Management",
    description: "Complete payroll processing with automated calculations",
    icon: "💰",
    path: "/en/payroll",
    color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
    category: "core"
  },
  {
    id: 4,
    title: "Leave Management",
    description: "Full leave management system with approval workflows",
    icon: "📅",
    path: "/en/leaves",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    category: "core"
  },
  {
    id: 5,
    title: "Performance Evaluation",
    description: "360-degree performance reviews with goal tracking",
    icon: "📊",
    path: "/en/performance",
    color: "bg-red-50 border-red-200 hover:bg-red-100",
    category: "core"
  },
  {
    id: 6,
    title: "Reports & Analytics",
    description: "Comprehensive reporting with export capabilities",
    icon: "📈",
    path: "/en/reports",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
    category: "core"
  },
  {
    id: 7,
    title: "Training & Development",
    description: "Manage training programs and skill development",
    icon: "🎓",
    path: "/en/training",
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    category: "core"
  },
  {
    id: 8,
    title: "Recruitment",
    description: "End-to-end recruitment process management",
    icon: "🔍",
    path: "/en/recruitment",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    category: "core"
  },
  {
    id: 9,
    title: "Department Management",
    description: "Organize and manage company departments",
    icon: "🏢",
    path: "/en/departments",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100",
    category: "core"
  }
];

export const hrModulesTh: HRModule[] = [
  {
    id: 1,
    title: "จัดการพนักงาน",
    description: "จัดการข้อมูลพนักงานแบบครบวงจรพร้อมโปรไฟล์ที่สมบูรณ์",
    icon: "👥",
    path: "/th/employees",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    category: "core"
  },
  {
    id: 2,
    title: "ติดตามการเข้างาน",
    description: "ระบบติดตามการเข้างานขั้นสูงพร้อม GPS และรองรับหลายกะ",
    icon: "⏰",
    path: "/th/attendance",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    category: "core"
  },
  {
    id: 3,
    title: "จัดการเงินเดือน",
    description: "ระบบประมวลผลเงินเดือนครบวงจรพร้อมการคำนวณอัตโนมัติ",
    icon: "💰",
    path: "/th/payroll",
    color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
    category: "core"
  },
  {
    id: 4,
    title: "จัดการการลา",
    description: "ระบบจัดการการลาแบบครบวงจรพร้อมขั้นตอนการอนุมัติ",
    icon: "📅",
    path: "/th/leaves",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    category: "core"
  },
  {
    id: 5,
    title: "ประเมินผลการปฏิบัติงาน",
    description: "ระบบประเมินผล 360 องศา พร้อมการติดตามเป้าหมาย",
    icon: "📊",
    path: "/th/performance",
    color: "bg-red-50 border-red-200 hover:bg-red-100",
    category: "core"
  },
  {
    id: 6,
    title: "รายงานและการวิเคราะห์",
    description: "ระบบรายงานครบวงจรพร้อมความสามารถในการส่งออกข้อมูล",
    icon: "📈",
    path: "/th/reports",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
    category: "core"
  },
  {
    id: 7,
    title: "การฝึกอบรมและพัฒนา",
    description: "จัดการโปรแกรมการฝึกอบรมและการพัฒนาทักษะ",
    icon: "🎓",
    path: "/th/training",
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    category: "core"
  },
  {
    id: 8,
    title: "การสรรหาบุคลากร",
    description: "จัดการกระบวนการสรรหาบุคลากรแบบครบวงจร",
    icon: "🔍",
    path: "/th/recruitment",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    category: "core"
  },
  {
    id: 9,
    title: "จัดการแผนก",
    description: "จัดระเบียบและจัดการแผนกต่างๆ ของบริษัท",
    icon: "🏢",
    path: "/th/departments",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100",
    category: "core"
  }
];

export const additionalFeaturesEn = [
  { name: "Asset Management", icon: "🏷️", path: "/en/assets" },
  { name: "Document Management", icon: "📄", path: "/en/documents" },
  { name: "Time Tracking", icon: "⏱️", path: "/en/timetracking" },
  { name: "Benefits Management", icon: "🎁", path: "/en/benefits" },
  { name: "Compliance Tracking", icon: "✅", path: "/en/compliance" },
  { name: "Employee Self-Service", icon: "👤", path: "/en/self-service" },
  { name: "Mobile App", icon: "📱", path: "/en/mobile" },
  { name: "API Integrations", icon: "🔗", path: "/en/integrations" },
  { name: "System Settings", icon: "⚙️", path: "/en/settings" }
];

export const additionalFeaturesTh = [
  { name: "จัดการทรัพย์สิน", icon: "🏷️", path: "/th/assets" },
  { name: "จัดการเอกสาร", icon: "📄", path: "/th/documents" },
  { name: "ติดตามเวลา", icon: "⏱️", path: "/th/timetracking" },
  { name: "จัดการสวัสดิการ", icon: "🎁", path: "/th/benefits" },
  { name: "ติดตามการปฏิบัติตาม", icon: "✅", path: "/th/compliance" },
  { name: "บริการตนเองพนักงาน", icon: "👤", path: "/th/self-service" },
  { name: "แอปมือถือ", icon: "📱", path: "/th/mobile" },
  { name: "การเชื่อมต่อ API", icon: "🔗", path: "/th/integrations" },
  { name: "ตั้งค่าระบบ", icon: "⚙️", path: "/th/settings" }
];