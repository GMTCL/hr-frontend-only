'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useApi';
import { useRouter } from 'next/navigation';

interface AttendanceRecord {
  id: number;
  employeeId: number;
  employeeName: string;
  department: string;
  checkInTime: string | null;
  checkOutTime: string | null;
  status: 'present' | 'absent' | 'late' | 'partial';
  penaltyScore: number;
  notes: string;
}

interface AttendanceSummary {
  totalEmployees: number;
  present: number;
  absent: number;
  late: number;
  partial: number;
  attendanceRate: number;
}

export default function HRAttendanceManagementPage() {
  const { isAuthenticated, loading: authLoading, user } = useAuth();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [summary, setSummary] = useState<AttendanceSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPenaltyModal, setShowPenaltyModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<AttendanceRecord | null>(null);
  const [penaltyReason, setPenaltyReason] = useState('');
  const [penaltyScore, setPenaltyScore] = useState(0);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.replace('./login');
    }
  }, [isAuthenticated, authLoading, router]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAttendanceData();
    }
  }, [selectedDate, isAuthenticated]);

  const fetchAttendanceData = async () => {
    setLoading(true);
    try {
      // Mock data - in real implementation, this would call your API
      const mockRecords: AttendanceRecord[] = [
        {
          id: 1,
          employeeId: 1,
          employeeName: 'John Doe',
          department: 'IT',
          checkInTime: '08:30',
          checkOutTime: '17:30',
          status: 'present',
          penaltyScore: 0,
          notes: ''
        },
        {
          id: 2,
          employeeId: 2,
          employeeName: 'Jane Smith',
          department: 'HR',
          checkInTime: '09:15',
          checkOutTime: '17:45',
          status: 'late',
          penaltyScore: 5,
          notes: 'มาสาย 15 นาที'
        },
        {
          id: 3,
          employeeId: 3,
          employeeName: 'Mike Johnson',
          department: 'Finance',
          checkInTime: null,
          checkOutTime: null,
          status: 'absent',
          penaltyScore: 10,
          notes: 'ไม่มาทำงาน'
        },
        {
          id: 4,
          employeeId: 4,
          employeeName: 'Sarah Wilson',
          department: 'Marketing',
          checkInTime: '08:45',
          checkOutTime: null,
          status: 'partial',
          penaltyScore: 3,
          notes: 'เช็คชื่อออกไม่ครบ'
        }
      ];

      const mockSummary: AttendanceSummary = {
        totalEmployees: 4,
        present: 1,
        absent: 1,
        late: 1,
        partial: 1,
        attendanceRate: 75
      };

      setAttendanceRecords(mockRecords);
      setSummary(mockSummary);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePenalty = (employee: AttendanceRecord) => {
    setSelectedEmployee(employee);
    setShowPenaltyModal(true);
  };

  const submitPenalty = () => {
    if (selectedEmployee) {
      // In real implementation, this would call your API
      console.log('Penalty submitted:', {
        employeeId: selectedEmployee.employeeId,
        reason: penaltyReason,
        score: penaltyScore
      });
      
      setShowPenaltyModal(false);
      setPenaltyReason('');
      setPenaltyScore(0);
      setSelectedEmployee(null);
    }
  };

  const sendNotification = () => {
    // In real implementation, this would send notifications to HR team
    alert('ส่งการแจ้งเตือนไปยังทีม HR แล้ว');
  };

  const exportReport = () => {
    // In real implementation, this would export attendance report
    alert('ส่งออกรายงานการเข้างานแล้ว');
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">จัดการการเข้างาน - HR</h1>
              <p className="text-gray-600 mt-1">ระบบติดตามและจัดการการเข้างานของพนักงาน</p>
            </div>
            <div className="flex gap-3">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              />
              <button
                onClick={sendNotification}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                ส่งแจ้งเตือน
              </button>
              <button
                onClick={exportReport}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                ส่งออกรายงาน
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <div className="text-2xl">👥</div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">พนักงานทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">{summary.totalEmployees}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <div className="text-2xl">✅</div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">มาทำงาน</p>
                  <p className="text-2xl font-bold text-green-600">{summary.present}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <div className="text-2xl">❌</div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">ขาดงาน</p>
                  <p className="text-2xl font-bold text-red-600">{summary.absent}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <div className="text-2xl">⏰</div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">มาสาย</p>
                  <p className="text-2xl font-bold text-yellow-600">{summary.late}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <div className="text-2xl">📊</div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">อัตราการเข้างาน</p>
                  <p className="text-2xl font-bold text-indigo-600">{summary.attendanceRate}%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attendance Records Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">รายการการเข้างาน</h2>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600">กำลังโหลดข้อมูล...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      พนักงาน
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      แผนก
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      เข้างาน
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ออกงาน
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      สถานะ
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      คะแนนโทษ
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      การดำเนินการ
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendanceRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{record.employeeName}</div>
                        <div className="text-sm text-gray-500">ID: {record.employeeId}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.checkInTime || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.checkOutTime || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          record.status === 'present' ? 'bg-green-100 text-green-800' :
                          record.status === 'absent' ? 'bg-red-100 text-red-800' :
                          record.status === 'late' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {record.status === 'present' ? 'มาทำงาน' :
                           record.status === 'absent' ? 'ขาดงาน' :
                           record.status === 'late' ? 'มาสาย' : 'ไม่ครบ'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className={`font-semibold ${
                          record.penaltyScore > 0 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {record.penaltyScore}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handlePenalty(record)}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          บันทึกโทษ
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          ดูรายละเอียด
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Penalty Modal */}
        {showPenaltyModal && selectedEmployee && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  บันทึกโทษ - {selectedEmployee.employeeName}
                </h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    เหตุผล
                  </label>
                  <textarea
                    value={penaltyReason}
                    onChange={(e) => setPenaltyReason(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    rows={3}
                    placeholder="ระบุเหตุผลในการลงโทษ..."
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    คะแนนโทษ
                  </label>
                  <input
                    type="number"
                    value={penaltyScore}
                    onChange={(e) => setPenaltyScore(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    min="0"
                    max="100"
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowPenaltyModal(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={submitPenalty}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    บันทึกโทษ
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
