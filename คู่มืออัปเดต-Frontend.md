# คู่มืออัปเดต Frontend สำหรับ Backend ใหม่

## 🎯 **การอัปเดต Frontend ให้เชื่อมต่อกับ Backend ใหม่**

ผมได้อัปเดตไฟล์ Frontend ให้เชื่อมต่อกับ Backend ใหม่แล้วครับ:

### 📁 **ไฟล์ที่อัปเดต:**

#### **1. `src/lib/api.ts`**
- ✅ เปลี่ยน API URL จาก `http://localhost:8000/api` เป็น `https://hrbackoofice.mimshack-sourc.com/api`
- ✅ ใช้ Backend URL ใหม่ที่ตั้งค่าไว้

#### **2. `env.production`**
- ✅ เปลี่ยน `NEXT_PUBLIC_API_URL` เป็น `https://hrbackoofice.mimshack-sourc.com/api`
- ✅ เปลี่ยน `NEXT_PUBLIC_APP_URL` เป็น `https://hr.mimshack-sourc.com`

#### **3. `env.local.example`**
- ✅ อัปเดตตัวอย่างการตั้งค่าให้ใช้ Backend URL ใหม่

#### **4. `env.production.example`**
- ✅ อัปเดตตัวอย่างการตั้งค่าสำหรับ Production

#### **5. `next.config.js`**
- ✅ เพิ่ม domain ใหม่ใน `images.domains`
- ✅ รองรับ `hrbackoofice.mimshack-sourc.com` และ `hr.mimshack-sourc.com`

---

## 🚀 **การตั้งค่าใหม่**

### **Backend URL:**
```
https://hrbackoofice.mimshack-sourc.com/api
```

### **Frontend URL:**
```
https://hr.mimshack-sourc.com
```

### **Database:**
```
hr_management_new
```

---

## 📋 **ขั้นตอนการอัปโหลด Frontend ใหม่**

### **ขั้นตอนที่ 1: Build Frontend ใหม่**
```bash
cd frontend
npm run build
```

### **ขั้นตอนที่ 2: อัปโหลดไฟล์**
1. **อัปโหลดโฟลเดอร์ `out/` ทั้งหมด**
2. **อัปโหลดไฟล์ `server.js`** (ถ้าใช้ Node.js)
3. **อัปโหลดไฟล์ `package.json`** (ถ้าใช้ Node.js)
4. **อัปโหลดไฟล์ `ecosystem.config.js`** (ถ้าใช้ PM2)

### **ขั้นตอนที่ 3: ตั้งค่า Environment Variables**
ใน Plesk หรือ Hosting Control Panel:
```
NEXT_PUBLIC_API_URL=https://hrbackoofice.mimshack-sourc.com/api
NEXT_PUBLIC_APP_URL=https://hr.mimshack-sourc.com
```

---

## 🔧 **การตั้งค่าใน Plesk**

### **1. อัปโหลดไฟล์ Frontend**
- อัปโหลดโฟลเดอร์ `out/` ทั้งหมด
- อัปโหลดไฟล์ `server.js`, `package.json`, `ecosystem.config.js`

### **2. ตั้งค่า Environment Variables**
```
NEXT_PUBLIC_API_URL=https://hrbackoofice.mimshack-sourc.com/api
NEXT_PUBLIC_APP_URL=https://hr.mimshack-sourc.com
NODE_ENV=production
```

### **3. ตั้งค่า Node.js (ถ้าใช้)**
- ตั้งค่า Node.js version
- ตั้งค่า Start command: `node server.js`
- ตั้งค่า Application root

---

## ✅ **การทดสอบ**

### **1. ทดสอบ Frontend**
- เข้า `https://hr.mimshack-sourc.com`
- ตรวจสอบว่าหน้าแรกโหลดได้
- ทดสอบการเปลี่ยนภาษา

### **2. ทดสอบ API Connection**
- เปิด Developer Tools
- ดู Network tab
- ตรวจสอบ API calls ไปที่ `https://hrbackoofice.mimshack-sourc.com/api`

### **3. ทดสอบการ Login**
- ทดสอบ Login ผ่าน API
- ตรวจสอบ Authentication token

---

## 🎯 **สรุปการอัปเดต**

### **สิ่งที่อัปเดต:**
1. ✅ **API URL** - เชื่อมต่อกับ Backend ใหม่
2. ✅ **Environment Variables** - ตั้งค่า URL ใหม่
3. ✅ **Image Domains** - รองรับ domain ใหม่
4. ✅ **Configuration** - อัปเดตการตั้งค่าทั้งหมด

### **Backend ใหม่:**
- **URL:** `https://hrbackoofice.mimshack-sourc.com/api`
- **Database:** `hr_management_new`
- **Status:** พร้อมใช้งาน

### **Frontend ใหม่:**
- **URL:** `https://hr.mimshack-sourc.com`
- **API Connection:** เชื่อมต่อกับ Backend ใหม่
- **Status:** พร้อมอัปโหลด

---

## 📝 **หมายเหตุ**

- Frontend จะเชื่อมต่อกับ Backend ใหม่โดยอัตโนมัติ
- ไม่ต้องแก้ไขโค้ดเพิ่มเติม
- พร้อมอัปโหลดและใช้งานทันที

**ไฟล์ที่อัปเดต:** `src/lib/api.ts`, `env.production`, `env.local.example`, `env.production.example`, `next.config.js`  
**วันที่อัปเดต:** ตุลาคม 2024  
**สถานะ:** พร้อมใช้งาน
