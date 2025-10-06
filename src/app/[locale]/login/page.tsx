export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">HR</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">เข้าสู่ระบบ</h1>
            <p className="text-gray-600">ยินดีต้อนรับสู่ระบบจัดการ HR</p>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">อีเมล</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                placeholder="กรอกอีเมลของคุณ"
                required 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">รหัสผ่าน</label>
              <input 
                type="password" 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                placeholder="กรอกรหัสผ่านของคุณ"
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              เข้าสู่ระบบ
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <a href="../" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              ← กลับสู่หน้าหลัก
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


