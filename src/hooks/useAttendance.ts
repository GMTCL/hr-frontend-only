'use client';

import { useState, useEffect, useCallback } from 'react';
import { attendanceApi } from '../lib/api';

interface AttendanceRecord {
  id?: number;
  employee_id: number;
  date: string;
  check_in_time?: string;
  check_out_time?: string;
  total_hours?: number;
  status: 'present' | 'late' | 'absent' | 'half_day';
  employee?: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    department?: {
      id: number;
      name: string;
    };
  };
  created_at?: string;
  updated_at?: string;
}

interface UseAttendanceState {
  attendance: AttendanceRecord[];
  loading: boolean;
  error: string | null;
}

export const useAttendance = () => {
  const [state, setState] = useState<UseAttendanceState>({
    attendance: [],
    loading: false,
    error: null,
  });

  const fetchAttendance = useCallback(async (employeeId?: number, date?: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await attendanceApi.getAttendance(employeeId || 0, date);
      
      if (response.success && response.data) {
        setState({
          attendance: Array.isArray(response.data) ? response.data : [response.data],
          loading: false,
          error: null,
        });
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to fetch attendance records',
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }));
    }
  }, []);

  const clockIn = useCallback(async (employeeId: number) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await attendanceApi.clockIn(employeeId);
      
      if (response.success) {
        // Refresh attendance data
        await fetchAttendance(employeeId);
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to clock in',
        }));
        return { success: false, error: response.message || 'Failed to clock in' };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  }, [fetchAttendance]);

  const clockOut = useCallback(async (employeeId: number) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await attendanceApi.clockOut(employeeId);
      
      if (response.success) {
        // Refresh attendance data
        await fetchAttendance(employeeId);
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to clock out',
        }));
        return { success: false, error: response.message || 'Failed to clock out' };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  }, [fetchAttendance]);

  const getAttendanceReport = useCallback(async (startDate: string, endDate: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await attendanceApi.getAttendanceReport(startDate, endDate);
      
      if (response.success) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: null,
        }));
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to generate attendance report',
        }));
        return { success: false, error: response.message || 'Failed to generate attendance report' };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    fetchAttendance,
    clockIn,
    clockOut,
    getAttendanceReport,
    clearError,
  };
};
