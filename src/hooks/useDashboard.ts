'use client';

import { useState, useEffect, useCallback } from 'react';
import { reportsApi } from '../lib/api';

interface DashboardStats {
  totalEmployees: number;
  presentToday: number;
  pendingLeaves: number;
  monthlyPayroll: number;
  attendanceRate: number;
  leaveRate: number;
}

interface RecentActivity {
  id: number;
  type: 'leave' | 'attendance' | 'payroll' | 'employee';
  message: string;
  time: string;
  employee_name?: string;
}

interface UseDashboardState {
  stats: DashboardStats | null;
  recentActivities: RecentActivity[];
  loading: boolean;
  error: string | null;
}

export const useDashboard = () => {
  const [state, setState] = useState<UseDashboardState>({
    stats: null,
    recentActivities: [],
    loading: false,
    error: null,
  });

  const fetchDashboardData = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      // Fetch multiple reports in parallel
      const [employeeReport, attendanceReport, leaveReport, payrollReport] = await Promise.all([
        reportsApi.getEmployeeReport(),
        reportsApi.getAttendanceReport(
          new Date().toISOString().split('T')[0], 
          new Date().toISOString().split('T')[0]
        ),
        reportsApi.getLeaveReport(),
        reportsApi.getPayrollReport(new Date().toISOString().slice(0, 7)) // YYYY-MM format
      ]);

      // Process the data to create dashboard stats
      const stats: DashboardStats = {
        totalEmployees: employeeReport.success ? (employeeReport.data?.total || 0) : 0,
        presentToday: attendanceReport.success ? (attendanceReport.data?.present || 0) : 0,
        pendingLeaves: leaveReport.success ? (leaveReport.data?.pending || 0) : 0,
        monthlyPayroll: payrollReport.success ? (payrollReport.data?.total || 0) : 0,
        attendanceRate: attendanceReport.success ? (attendanceReport.data?.rate || 0) : 0,
        leaveRate: leaveReport.success ? (leaveReport.data?.rate || 0) : 0,
      };

      // Generate recent activities from the data
      const recentActivities: RecentActivity[] = [
        ...(leaveReport.success && leaveReport.data?.recent ? leaveReport.data.recent.map((item: any, index: number) => ({
          id: index + 1,
          type: 'leave' as const,
          message: `${item.employee_name} submitted a ${item.leave_type} request`,
          time: item.created_at,
          employee_name: item.employee_name,
        })) : []),
        ...(attendanceReport.success && attendanceReport.data?.recent ? attendanceReport.data.recent.map((item: any, index: number) => ({
          id: index + 100,
          type: 'attendance' as const,
          message: `${item.employee_name} was ${item.status === 'late' ? 'late' : 'present'}`,
          time: item.check_in_time,
          employee_name: item.employee_name,
        })) : []),
        ...(employeeReport.success && employeeReport.data?.recent ? employeeReport.data.recent.map((item: any, index: number) => ({
          id: index + 200,
          type: 'employee' as const,
          message: `New employee: ${item.name} added to system`,
          time: item.created_at,
          employee_name: item.name,
        })) : []),
      ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 10);

      setState({
        stats,
        recentActivities,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch dashboard data',
      }));
    }
  }, []);

  const refreshData = useCallback(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  // Load dashboard data on mount
  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return {
    ...state,
    refreshData,
    clearError,
  };
};
