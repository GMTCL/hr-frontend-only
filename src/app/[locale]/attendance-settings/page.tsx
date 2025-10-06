'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useApi';
import { useRouter } from 'next/navigation';

interface TimeSlot {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  penaltyScore: number;
}

interface AttendanceSettings {
  companyName: string;
  workingHours: {
    start: string;
    end: string;
  };
  breakTime: {
    start: string;
    end: string;
  };
  lateThreshold: number; // minutes
  gracePeriod: number; // minutes
  autoCheckout: boolean;
  facialRecognitionEnabled: boolean;
  notificationEnabled: boolean;
  timeSlots: TimeSlot[];
}

export default function AttendanceSettingsPage() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const router = useRouter();
  const [settings, setSettings] = useState<AttendanceSettings>({
    companyName: 'Mimshack Source Co., Ltd.',
    workingHours: {
      start: '08:00',
      end: '17:00'
    },
    breakTime: {
      start: '12:00',
      end: '13:00'
    },
    lateThreshold: 15,
    gracePeriod: 5,
    autoCheckout: true,
    facialRecognitionEnabled: true,
    notificationEnabled: true,
    timeSlots: [
      {
        id: 1,
        name: 'ช่วงเช้า (เช็คชื่อเข้า)',
        startTime: '07:30',
        endTime: '09:00',
        isActive: true,
        penaltyScore: 0
      },
      {
        id: 2,
        name: 'ช่วงเย็น (เช็คชื่อออก)',
        startTime: '16:30',
        endTime: '18:00',
        isActive: true,
        penaltyScore: 0
      }
    ]
  });
  const [loading, setLoading] = useState(false);
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);
  const [editingTimeSlot, setEditingTimeSlot] = useState<TimeSlot | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.replace('./login');
    }
  }, [isAuthenticated, authLoading, router]);

  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      // In real implementation, this would call your API
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('บันทึกการตั้งค่าเรียบร้อยแล้ว');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('เกิดข้อผิดพลาดในการบันทึก');
    } finally {
      setLoading(false);
    }
  };

  const addTimeSlot = () => {
    setEditingTimeSlot({
      id: Date.now(),
      name: '',
      startTime: '08:00',
      endTime: '17:00',
      isActive: true,
      penaltyScore: 0
    });
    setShowTimeSlotModal(true);
  };

  const editTimeSlot = (timeSlot: TimeSlot) => {
    setEditingTimeSlot({ ...timeSlot });
    setShowTimeSlotModal(true);
  };

  const saveTimeSlot = () => {
    if (editingTimeSlot) {
      if (editingTimeSlot.id && settings.timeSlots.find(ts => ts.id === editingTimeSlot.id)) {
        // Update existing
        setSettings(prev => ({
          ...prev,
          timeSlots: prev.timeSlots.map(ts => 
            ts.id === editingTimeSlot.id ? editingTimeSlot : ts
          )
        }));
      } else {
        // Add new
        setSettings(prev => ({
          ...prev,
          timeSlots: [...prev.timeSlots, editingTimeSlot]
        }));
      }
    }
    setShowTimeSlotModal(false);
    setEditingTimeSlot(null);
  };

  const deleteTimeSlot = (id: number) => {
    setSettings(prev => ({
      ...prev,
      timeSlots: prev.timeSlots.filter(ts => ts.id !== id)
    }));
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ตั้งค่าระบบการเข้างาน</h1>
              <p className="text-gray-600 mt-1">กำหนดการตั้งค่าสำหรับระบบสแกนใบหน้าและเช็คชื่อ</p>
            </div>
            <button
              onClick={handleSaveSettings}
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors"
            >
              {loading ? 'กำลังบันทึก...' : 'บันทึกการตั้งค่า'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Basic Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">การตั้งค่าพื้นฐาน</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ชื่อบริษัท
                </label>
                <input
                  type="text"
                  value={settings.companyName}
                  onChange={(e) => setSettings(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  เกณฑ์การมาสาย (นาที)
                </label>
                <input
                  type="number"
                  value={settings.lateThreshold}
                  onChange={(e) => setSettings(prev => ({ ...prev, lateThreshold: Number(e.target.value) }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  เวลาเข้างาน
                </label>
                <input
                  type="time"
                  value={settings.workingHours.start}
                  onChange={(e) => setSettings(prev => ({ 
                    ...prev, 
                    workingHours: { ...prev.workingHours, start: e.target.value }
                  }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  เวลาออกงาน
                </label>
                <input
                  type="time"
                  value={settings.workingHours.end}
                  onChange={(e) => setSettings(prev => ({ 
                    ...prev, 
                    workingHours: { ...prev.workingHours, end: e.target.value }
                  }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  เวลาพักกลางวัน (เริ่ม)
                </label>
                <input
                  type="time"
                  value={settings.breakTime.start}
                  onChange={(e) => setSettings(prev => ({ 
                    ...prev, 
                    breakTime: { ...prev.breakTime, start: e.target.value }
                  }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  เวลาพักกลางวัน (สิ้นสุด)
                </label>
                <input
                  type="time"
                  value={settings.breakTime.end}
                  onChange={(e) => setSettings(prev => ({ 
                    ...prev, 
                    breakTime: { ...prev.breakTime, end: e.target.value }
                  }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* System Features */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">ฟีเจอร์ระบบ</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">ระบบสแกนใบหน้า</h3>
                  <p className="text-sm text-gray-500">เปิดใช้งานการสแกนใบหน้าเพื่อเช็คชื่อ</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.facialRecognitionEnabled}
                    onChange={(e) => setSettings(prev => ({ ...prev, facialRecognitionEnabled: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">การแจ้งเตือนอัตโนมัติ</h3>
                  <p className="text-sm text-gray-500">ส่งการแจ้งเตือนไปยัง HR เมื่อมีการขาดงานหรือมาสาย</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notificationEnabled}
                    onChange={(e) => setSettings(prev => ({ ...prev, notificationEnabled: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">เช็คชื่อออกอัตโนมัติ</h3>
                  <p className="text-sm text-gray-500">เช็คชื่อออกอัตโนมัติเมื่อพนักงานไม่เช็คชื่อออกตามเวลา</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoCheckout}
                    onChange={(e) => setSettings(prev => ({ ...prev, autoCheckout: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">ช่วงเวลาสแกนใบหน้า</h2>
              <button
                onClick={addTimeSlot}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                เพิ่มช่วงเวลา
              </button>
            </div>

            <div className="space-y-3">
              {settings.timeSlots.map((timeSlot) => (
                <div key={timeSlot.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{timeSlot.name}</h3>
                    <p className="text-sm text-gray-500">
                      {timeSlot.startTime} - {timeSlot.endTime}
                      {timeSlot.penaltyScore > 0 && (
                        <span className="ml-2 text-red-600">(โทษ: {timeSlot.penaltyScore} คะแนน)</span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      timeSlot.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {timeSlot.isActive ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
                    </span>
                    <button
                      onClick={() => editTimeSlot(timeSlot)}
                      className="text-indigo-600 hover:text-indigo-900 text-sm"
                    >
                      แก้ไข
                    </button>
                    <button
                      onClick={() => deleteTimeSlot(timeSlot.id)}
                      className="text-red-600 hover:text-red-900 text-sm"
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Time Slot Modal */}
        {showTimeSlotModal && editingTimeSlot && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {editingTimeSlot.id && settings.timeSlots.find(ts => ts.id === editingTimeSlot.id) ? 'แก้ไขช่วงเวลา' : 'เพิ่มช่วงเวลาใหม่'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ชื่อช่วงเวลา
                    </label>
                    <input
                      type="text"
                      value={editingTimeSlot.name}
                      onChange={(e) => setEditingTimeSlot(prev => prev ? { ...prev, name: e.target.value } : null)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="เช่น ช่วงเช้า (เช็คชื่อเข้า)"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        เวลาเริ่ม
                      </label>
                      <input
                        type="time"
                        value={editingTimeSlot.startTime}
                        onChange={(e) => setEditingTimeSlot(prev => prev ? { ...prev, startTime: e.target.value } : null)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        เวลาสิ้นสุด
                      </label>
                      <input
                        type="time"
                        value={editingTimeSlot.endTime}
                        onChange={(e) => setEditingTimeSlot(prev => prev ? { ...prev, endTime: e.target.value } : null)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      คะแนนโทษ (ถ้าสแกนนอกช่วงเวลา)
                    </label>
                    <input
                      type="number"
                      value={editingTimeSlot.penaltyScore}
                      onChange={(e) => setEditingTimeSlot(prev => prev ? { ...prev, penaltyScore: Number(e.target.value) } : null)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      min="0"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingTimeSlot.isActive}
                      onChange={(e) => setEditingTimeSlot(prev => prev ? { ...prev, isActive: e.target.checked } : null)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      เปิดใช้งาน
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setShowTimeSlotModal(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={saveTimeSlot}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    บันทึก
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
