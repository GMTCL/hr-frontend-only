# HR Management System - Frontend Deployment Guide

## 🚀 **การ Deploy Frontend ด้วย Node.js**

### **📁 ไฟล์ที่ต้องอัปโหลด:**
```
frontend/
├── dist/                    # ไฟล์ที่ build แล้ว
├── server.js               # Node.js server
├── package.json            # Dependencies
├── ecosystem.config.js     # PM2 configuration
└── logs/                   # Log files (สร้างอัตโนมัติ)
```

---

## 🔧 **ขั้นตอนการ Deploy:**

### **1. อัปโหลดไฟล์:**
```bash
# อัปโหลดโฟลเดอร์ frontend/ ทั้งหมดไปที่ server
```

### **2. ติดตั้ง Dependencies:**
```bash
cd frontend
npm install
```

### **3. ติดตั้ง PM2 (ถ้ายังไม่มี):**
```bash
npm install -g pm2
```

### **4. เริ่มต้น Server:**
```bash
# วิธีที่ 1: ใช้ PM2 (แนะนำ)
npm run start:pm2

# วิธีที่ 2: ใช้ Node.js โดยตรง
npm start
```

---

## 🎯 **คำสั่ง PM2:**

### **การจัดการ Server:**
```bash
# เริ่มต้น
npm run start:pm2

# หยุด
npm run stop:pm2

# รีสตาร์ท
npm run restart:pm2

# ดู logs
npm run logs:pm2

# ดูสถานะ
pm2 status

# ดูรายละเอียด
pm2 show hr-management-frontend
```

### **การตั้งค่า Auto-start:**
```bash
# บันทึกการตั้งค่า
pm2 save

# สร้าง startup script
pm2 startup

# รีสตาร์ท server เพื่อให้ auto-start ทำงาน
```

---

## ⚙️ **การตั้งค่าใน Plesk:**

### **1. Node.js Application:**
- **Application Root:** `/path/to/frontend`
- **Startup File:** `server.js`
- **Node.js Version:** 18.x หรือสูงกว่า

### **2. Environment Variables:**
```
NODE_ENV=production
PORT=3000
```

### **3. Domain Settings:**
- **Domain:** `hr.mimshack-sourc.com`
- **Document Root:** `/path/to/frontend/dist`

---

## 🔍 **การทดสอบ:**

### **1. ทดสอบ Server:**
```bash
curl http://localhost:3000
# ควร redirect ไป /th/
```

### **2. ทดสอบ API Connection:**
```bash
curl https://hrbackoofice.mimshack-sourc.com/api/health
```

### **3. ทดสอบ Frontend:**
- เข้า `https://hr.mimshack-sourc.com`
- ควรแสดงหน้าไทย
- ทดสอบการเปลี่ยนภาษา

---

## 📊 **การ Monitor:**

### **PM2 Monitoring:**
```bash
# ดู real-time monitoring
pm2 monit

# ดู logs แบบ real-time
pm2 logs --lines 100

# ดู memory usage
pm2 show hr-management-frontend
```

### **Log Files:**
- **Error Logs:** `./logs/err.log`
- **Output Logs:** `./logs/out.log`
- **Combined Logs:** `./logs/combined.log`

---

## 🚨 **Troubleshooting:**

### **ปัญหาที่พบบ่อย:**

#### **1. Port ถูกใช้งานแล้ว:**
```bash
# เปลี่ยน port ใน server.js
const PORT = process.env.PORT || 3001;
```

#### **2. PM2 ไม่ทำงาน:**
```bash
# ติดตั้ง PM2 ใหม่
npm install -g pm2
pm2 update
```

#### **3. ไฟล์ไม่พบ:**
```bash
# ตรวจสอบ path
ls -la dist/
ls -la dist/th/
```

#### **4. Permission Error:**
```bash
# ตั้งค่า permission
chmod +x server.js
chmod -R 755 dist/
```

---

## ✅ **Checklist การ Deploy:**

- [ ] อัปโหลดไฟล์ `frontend/` ทั้งหมด
- [ ] ติดตั้ง dependencies (`npm install`)
- [ ] ติดตั้ง PM2 (`npm install -g pm2`)
- [ ] เริ่มต้น server (`npm run start:pm2`)
- [ ] ตั้งค่า auto-start (`pm2 save && pm2 startup`)
- [ ] ทดสอบเว็บไซต์
- [ ] ทดสอบ API connection
- [ ] ตรวจสอบ logs

---

## 🎉 **เสร็จสิ้น!**

**Frontend พร้อมใช้งานที่:** `https://hr.mimshack-sourc.com`

**Backend API:** `https://hrbackoofice.mimshack-sourc.com/api`

**Database:** `hr_management_new`