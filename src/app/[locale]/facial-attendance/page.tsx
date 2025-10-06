'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../../hooks/useApi';
import { useRouter } from 'next/navigation';

export default function FacialAttendancePage() {
  const { isAuthenticated, loading: authLoading, user } = useAuth();
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [attendanceStatus, setAttendanceStatus] = useState<'checkin' | 'checkout' | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scanHistory, setScanHistory] = useState<any[]>([]);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.replace('./login');
    }
  }, [isAuthenticated, authLoading, router]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: 640, 
          height: 480,
          facingMode: 'user'
        } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('ไม่สามารถเข้าถึงกล้องได้ กรุณาอนุญาตการเข้าถึงกล้อง');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        
        // Convert to base64 for API call
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        return imageData;
      }
    }
    return null;
  };

  const performFacialRecognition = async () => {
    const imageData = capturePhoto();
    if (!imageData) return;

    setIsScanning(true);
    setScanResult(null);

    try {
      // Simulate facial recognition API call
      // In real implementation, this would call your backend API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock result - in real implementation, this would come from your API
      const mockResult = {
        success: true,
        employeeId: user?.id || 1,
        employeeName: user?.name || 'John Doe',
        confidence: 0.95,
        timestamp: new Date().toISOString(),
        type: attendanceStatus || 'checkin'
      };

      setScanResult(JSON.stringify(mockResult, null, 2));
      
      // Add to scan history
      setScanHistory(prev => [mockResult, ...prev.slice(0, 9)]);
      
      // Determine if it's check-in or check-out based on time
      const hour = currentTime.getHours();
      if (hour < 12) {
        setAttendanceStatus('checkin');
      } else {
        setAttendanceStatus('checkout');
      }

    } catch (error) {
      setScanResult('เกิดข้อผิดพลาดในการสแกนใบหน้า');
    } finally {
      setIsScanning(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ระบบสแกนใบหน้าเช็คชื่อ</h1>
              <p className="text-gray-600 mt-1">ระบบบันทึกการเข้าออกงานด้วยเทคโนโลยี Facial Recognition</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono text-indigo-600">
                {currentTime.toLocaleTimeString('th-TH')}
              </div>
              <div className="text-sm text-gray-500">
                {currentTime.toLocaleDateString('th-TH', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Camera Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">กล้องสแกนใบหน้า</h2>
            
            <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-64 object-cover"
              />
              <canvas
                ref={canvasRef}
                className="hidden"
              />
              
              {isScanning && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-2"></div>
                    <p>กำลังสแกนใบหน้า...</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={startCamera}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                เปิดกล้อง
              </button>
              <button
                onClick={stopCamera}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                ปิดกล้อง
              </button>
            </div>

            <button
              onClick={performFacialRecognition}
              disabled={isScanning}
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors font-semibold"
            >
              {isScanning ? 'กำลังสแกน...' : 'สแกนใบหน้าเช็คชื่อ'}
            </button>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Scan Result */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">ผลการสแกน</h2>
              {scanResult ? (
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">{scanResult}</pre>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <div className="text-4xl mb-2">📷</div>
                  <p>ยังไม่มีการสแกน</p>
                </div>
              )}
            </div>

            {/* Attendance Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">สถานะการเข้างาน</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-green-700 font-medium">เช็คชื่อเข้า</span>
                  <span className="text-green-600">✓ เสร็จสิ้น</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">เช็คชื่อออก</span>
                  <span className="text-gray-500">- รอการสแกน</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scan History */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">ประวัติการสแกนล่าสุด</h2>
          {scanHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      เวลา
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ชื่อพนักงาน
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ประเภท
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ความแม่นยำ
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {scanHistory.map((record, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(record.timestamp).toLocaleString('th-TH')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.employeeName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          record.type === 'checkin' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {record.type === 'checkin' ? 'เข้า' : 'ออก'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {(record.confidence * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <div className="text-4xl mb-2">📋</div>
              <p>ยังไม่มีประวัติการสแกน</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
