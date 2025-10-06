'use client';

import { useLeaves } from '../../../hooks/useApi';
import { useAuth } from '../../../hooks/useApi';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LeavesPage() {
  const { leaves, loading, error } = useLeaves();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const router = useRouter();

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
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Leaves</h1>
      {loading && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}
      <div className="overflow-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 border">Employee</th>
              <th className="px-3 py-2 border">Type</th>
              <th className="px-3 py-2 border">Start</th>
              <th className="px-3 py-2 border">End</th>
              <th className="px-3 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map(lv => (
              <tr key={lv.id} className="odd:bg-white even:bg-gray-50">
                <td className="px-3 py-2 border">{lv.employee_id}</td>
                <td className="px-3 py-2 border">{lv.leave_type}</td>
                <td className="px-3 py-2 border">{lv.start_date}</td>
                <td className="px-3 py-2 border">{lv.end_date}</td>
                <td className="px-3 py-2 border">{lv.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


