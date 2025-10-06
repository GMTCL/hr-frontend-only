'use client';

import { useDepartments } from '../../../hooks/useApi';
import { useAuth } from '../../../hooks/useApi';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DepartmentsPage() {
  const { departments, loading, error } = useDepartments();
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
      <h1 className="text-2xl font-semibold mb-4">Departments</h1>
      {loading && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}
      <ul className="space-y-2">
        {departments.map(dep => (
          <li key={dep.id} className="border rounded p-3">
            <div className="font-medium">{dep.name}</div>
            <div className="text-sm text-gray-600">{dep.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}


