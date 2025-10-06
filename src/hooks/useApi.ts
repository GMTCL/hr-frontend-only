// Custom React hooks for API integration and state management

import { useState, useEffect, useCallback } from 'react';
import api, { utils } from '../lib/api';

// Define interfaces for type safety
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Employee {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  department_id: number;
  position: string;
  salary: number;
  hire_date: string;
  status: 'active' | 'inactive';
}

interface Department {
  id?: number;
  name: string;
  description: string;
  manager_id?: number;
  budget?: number;
}

interface LeaveRequest {
  id?: number;
  employee_id: number;
  leave_type: string;
  start_date: string;
  end_date: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface PayrollData {
  employee_id: number;
  basic_salary: number;
  allowances: number;
  deductions: number;
  overtime: number;
  bonus: number;
  tax: number;
  period: string;
}

interface Notification {
  id: string;
  message: string;
  read: boolean;
  timestamp: Date;
}

// Generic hook for API data fetching
export function useApi<T>(
  apiFunction: () => Promise<import('../lib/api').ApiResponse<T>>,
  dependencies: unknown[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiFunction();
      if (response.success) {
        setData(response.data ?? null);
      } else {
        setError(response.message || 'Failed to fetch data');
      }
    } catch (err) {
      setError(utils.formatError(err));
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

// Hook for authentication state
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on component mount
    const checkAuth = async () => {
      const token = utils.isAuthenticated();
      if (token) {
        try {
          const response = await api.auth.me();
          if (response.success && response.data) {
            setUser(response.data);
            setIsAuthenticated(true);
          } else {
            utils.removeAuthToken();
            setIsAuthenticated(false);
          }
        } catch (error) {
          utils.removeAuthToken();
          setIsAuthenticated(false);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.auth.login({ email, password });
      if (response.success && response.data) {
        utils.setAuthToken(response.data.token);
        setUser(response.data.user);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  const logout = async () => {
    try {
      await api.auth.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      utils.removeAuthToken();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };
}

// Hook for employee management
export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.employee.getAll();
      if (response.success) {
        setEmployees(response.data || []);
      } else {
        setError(response.message || 'Failed to fetch employees');
      }
    } catch (err) {
      setError(utils.formatError(err));
    } finally {
      setLoading(false);
    }
  }, []);

  const createEmployee = async (employeeData: Omit<Employee, 'id'>) => {
    try {
      const response = await api.employee.create(employeeData);
      if (response.success) {
        await fetchEmployees(); // Refresh the list
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  const updateEmployee = async (id: number, employeeData: Partial<Employee>) => {
    try {
      const response = await api.employee.update(id, employeeData);
      if (response.success) {
        await fetchEmployees(); // Refresh the list
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  const deleteEmployee = async (id: number) => {
    try {
      const response = await api.employee.delete(id);
      if (response.success) {
        await fetchEmployees(); // Refresh the list
        return { success: true };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return {
    employees,
    loading,
    error,
    fetchEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
  };
}

// Hook for department management
export function useDepartments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDepartments = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.department.getAll();
      if (response.success) {
        setDepartments(response.data || []);
      } else {
        setError(response.message || 'Failed to fetch departments');
      }
    } catch (err) {
      setError(utils.formatError(err));
    } finally {
      setLoading(false);
    }
  }, []);

  const createDepartment = async (departmentData: Omit<Department, 'id'>) => {
    try {
      const response = await api.department.create(departmentData);
      if (response.success) {
        await fetchDepartments();
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  return {
    departments,
    loading,
    error,
    fetchDepartments,
    createDepartment,
  };
}

// Hook for leave management
export function useLeaves() {
  const [leaves, setLeaves] = useState<LeaveRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaves = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.leave.getAll();
      if (response.success) {
        setLeaves(response.data || []);
      } else {
        setError(response.message || 'Failed to fetch leaves');
      }
    } catch (err) {
      setError(utils.formatError(err));
    } finally {
      setLoading(false);
    }
  }, []);

  const submitLeaveRequest = async (leaveData: Omit<LeaveRequest, 'id'>) => {
    try {
      const response = await api.leave.create(leaveData);
      if (response.success) {
        await fetchLeaves();
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  const approveLeave = async (id: number) => {
    try {
      const response = await api.leave.approve(id);
      if (response.success) {
        await fetchLeaves();
        return { success: true };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  const rejectLeave = async (id: number, reason?: string) => {
    try {
      const response = await api.leave.reject(id, reason);
      if (response.success) {
        await fetchLeaves();
        return { success: true };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, [fetchLeaves]);

  return {
    leaves,
    loading,
    error,
    fetchLeaves,
    submitLeaveRequest,
    approveLeave,
    rejectLeave,
  };
}

// Hook for attendance tracking
export function useAttendance() {
  const [attendance, setAttendance] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clockIn = async (employeeId: number) => {
    try {
      setLoading(true);
      const response = await api.attendance.clockIn(employeeId);
      if (response.success) {
        return { success: true };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    } finally {
      setLoading(false);
    }
  };

  const clockOut = async (employeeId: number) => {
    try {
      setLoading(true);
      const response = await api.attendance.clockOut(employeeId);
      if (response.success) {
        return { success: true };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    } finally {
      setLoading(false);
    }
  };

  const getAttendance = async (employeeId: number, date?: string) => {
    try {
      setLoading(true);
      const response = await api.attendance.getAttendance(employeeId, date);
      if (response.success) {
        setAttendance(response.data as Record<string, unknown>);
        return { success: true, data: response.data };
      } else {
        setError(response.message || 'Failed to fetch attendance');
        return { success: false, error: response.message };
      }
    } catch (error) {
      const errorMsg = utils.formatError(error);
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  return {
    attendance,
    loading,
    error,
    clockIn,
    clockOut,
    getAttendance,
  };
}

// Hook for payroll management
export function usePayroll() {
  const [payroll, setPayroll] = useState<PayrollData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPayroll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.payroll.getAll();
      if (response.success) {
        setPayroll(response.data || []);
      } else {
        setError(response.message || 'Failed to fetch payroll data');
      }
    } catch (err) {
      setError(utils.formatError(err));
    } finally {
      setLoading(false);
    }
  }, []);

  const processPayroll = async (payrollData: PayrollData[]) => {
    try {
      const response = await api.payroll.process(payrollData);
      if (response.success) {
        await fetchPayroll();
        return { success: true };
      } else {
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: utils.formatError(error) };
    }
  };

  useEffect(() => {
    fetchPayroll();
  }, [fetchPayroll]);

  return {
    payroll,
    loading,
    error,
    fetchPayroll,
    processPayroll,
  };
}

// Hook for notifications (if implementing real-time features)
export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const addNotification = (notification: Notification) => {
    setNotifications(prev => [notification, ...prev]);
    setUnreadCount(prev => prev + 1);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const clearAll = () => {
    setNotifications([]);
    setUnreadCount(0);
  };

  return {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    clearAll,
  };
}