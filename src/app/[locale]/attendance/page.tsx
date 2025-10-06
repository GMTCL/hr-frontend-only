'use client';

import { useAttendance } from '../../../hooks/useApi';
import { useAuth } from '../../../hooks/useApi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AttendancePage() {
  const { clockIn, clockOut, getAttendance, attendance, loading, error } = useAttendance();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const router = useRouter();
  const [employeeId, setEmployeeId] = useState<number>(1);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.replace('./login');
    }
  }, [isAuthenticated, authLoading, router]);

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
    return null; // Will redirect via useEffect
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Attendance</h1>
      <div className="flex items-center gap-2">
        <input type="number" className="border rounded px-3 py-2 w-40" value={employeeId} onChange={e => setEmployeeId(Number(e.target.value))} />
        <button disabled={loading} onClick={() => clockIn(employeeId)} className="px-4 py-2 bg-green-600 text-white rounded">Clock In</button>
        <button disabled={loading} onClick={() => clockOut(employeeId)} className="px-4 py-2 bg-red-600 text-white rounded">Clock Out</button>
        <button disabled={loading} onClick={() => getAttendance(employeeId)} className="px-4 py-2 bg-gray-900 text-white rounded">Refresh</button>
      </div>
      {error && <div className="text-red-600">{error}</div>}
      <pre className="bg-gray-50 border rounded p-4 text-sm overflow-auto">{JSON.stringify(attendance, null, 2)}</pre>
    </div>
  );
}


