# HR Management System - Vercel Deployment Guide

## 🚀 **การ Deploy บน Vercel**

### **📁 ไฟล์ที่ต้องอัปโหลด:**
```
frontend/
├── src/                     # Source code
├── public/                  # Static assets
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── vercel.json             # Vercel configuration
├── next-intl.config.js     # Internationalization
└── tsconfig.json           # TypeScript configuration
```

---

## 🔧 **ขั้นตอนการ Deploy:**

### **1. สร้างบัญชี Vercel:**
- ไปที่ [vercel.com](https://vercel.com)
- สมัครสมาชิกหรือเข้าสู่ระบบ

### **2. Deploy ผ่าน Vercel CLI:**
```bash
# ติดตั้ง Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### **3. Deploy ผ่าน GitHub (แนะนำ):**
- Push โค้ดไป GitHub
- เชื่อมต่อ GitHub กับ Vercel
- Auto-deploy เมื่อมี commit ใหม่

---

## ⚙️ **การตั้งค่า Environment Variables:**

### **ใน Vercel Dashboard:**
```
NEXT_PUBLIC_API_URL=https://hrbackoofice.mimshack-sourc.com/api
NEXT_PUBLIC_APP_URL=https://hr.mimshack-sourc.com
```

---

## 🎯 **ข้อดีของ Vercel:**

### **✅ ข้อดี:**
- **Auto-deploy** จาก GitHub
- **CDN** ทั่วโลก
- **HTTPS** อัตโนมัติ
- **Custom Domain** ฟรี
- **Analytics** และ **Speed Insights**
- **Serverless Functions** (ถ้าต้องการ)

### **📊 Performance:**
- **Loading Speed:** เร็วมาก
- **Global CDN:** เข้าถึงได้ทั่วโลก
- **Auto-scaling:** รองรับ traffic สูง

---

## 🌐 **URLs หลัง Deploy:**

### **Vercel URL:**
```
https://hr-management-system.vercel.app
```

### **Custom Domain (ถ้าตั้งค่า):**
```
https://hr.mimshack-sourc.com
```

---

## 🔄 **การอัปเดต:**

### **Auto-deploy:**
- Push โค้ดไป GitHub
- Vercel จะ build และ deploy อัตโนมัติ

### **Manual deploy:**
```bash
vercel --prod
```

---

## 📱 **การทดสอบ:**

### **1. ทดสอบ Frontend:**
- เข้า Vercel URL
- ทดสอบการเปลี่ยนภาษา
- ทดสอบ navigation

### **2. ทดสอบ API Connection:**
- ตรวจสอบการเชื่อมต่อ Backend
- ทดสอบการ login

---

## 🎉 **เสร็จสิ้น!**

**Frontend พร้อมใช้งานบน Vercel!**

**Backend API:** `https://hrbackoofice.mimshack-sourc.com/api`

**Database:** `hr_management_new`
