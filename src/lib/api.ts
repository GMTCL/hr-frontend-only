// API configuration and endpoints for frontend-backend communication
// This file centralizes all API calls and backend communication

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://hrbackoofice.mimshack-sourc.com/api';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string | object;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
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

// Helper function to get auth token
const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken');
  }
  return null;
};

// Helper function to create headers with auth token
const createHeaders = (): HeadersInit => {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};

// Generic API request function
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = createHeaders();
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return {
      success: true,
      data: data.data || data,
      message: data.message,
    };
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
      errors: error,
    };
  }
};

// Authentication API calls
export const authApi = {
  login: async (credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    return apiRequest<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  logout: async (): Promise<ApiResponse> => {
    return apiRequest('/auth/logout', {
      method: 'POST',
    });
  },

  me: async (): Promise<ApiResponse<LoginResponse['user']>> => {
    return apiRequest<LoginResponse['user']>('/auth/profile');
  },
};

// Employee API calls
export const employeeApi = {
  getAll: async (): Promise<ApiResponse<Employee[]>> => {
    return apiRequest<Employee[]>('/employees');
  },

  getById: async (id: number): Promise<ApiResponse<Employee>> => {
    return apiRequest<Employee>(`/employees/${id}`);
  },

  create: async (employee: Omit<Employee, 'id'>): Promise<ApiResponse<Employee>> => {
    return apiRequest<Employee>('/employees', {
      method: 'POST',
      body: JSON.stringify(employee),
    });
  },

  update: async (id: number, employee: Partial<Employee>): Promise<ApiResponse<Employee>> => {
    return apiRequest<Employee>(`/employees/${id}`, {
      method: 'PUT',
      body: JSON.stringify(employee),
    });
  },

  delete: async (id: number): Promise<ApiResponse> => {
    return apiRequest(`/employees/${id}`, {
      method: 'DELETE',
    });
  },
};

// Department API calls
export const departmentApi = {
  getAll: async (): Promise<ApiResponse<Department[]>> => {
    return apiRequest<Department[]>('/departments');
  },

  getById: async (id: number): Promise<ApiResponse<Department>> => {
    return apiRequest<Department>(`/departments/${id}`);
  },

  create: async (department: Omit<Department, 'id'>): Promise<ApiResponse<Department>> => {
    return apiRequest<Department>('/departments', {
      method: 'POST',
      body: JSON.stringify(department),
    });
  },

  update: async (id: number, department: Partial<Department>): Promise<ApiResponse<Department>> => {
    return apiRequest<Department>(`/departments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(department),
    });
  },

  delete: async (id: number): Promise<ApiResponse> => {
    return apiRequest(`/departments/${id}`, {
      method: 'DELETE',
    });
  },
};

// Leave management API calls
export const leaveApi = {
  getAll: async (): Promise<ApiResponse<LeaveRequest[]>> => {
    return apiRequest<LeaveRequest[]>('/leave-requests');
  },

  getById: async (id: number): Promise<ApiResponse<LeaveRequest>> => {
    return apiRequest<LeaveRequest>(`/leave-requests/${id}`);
  },

  create: async (leave: Omit<LeaveRequest, 'id'>): Promise<ApiResponse<LeaveRequest>> => {
    return apiRequest<LeaveRequest>('/leave-requests', {
      method: 'POST',
      body: JSON.stringify(leave),
    });
  },

  update: async (id: number, leave: Partial<LeaveRequest>): Promise<ApiResponse<LeaveRequest>> => {
    return apiRequest<LeaveRequest>(`/leave-requests/${id}`, {
      method: 'PUT',
      body: JSON.stringify(leave),
    });
  },

  approve: async (id: number): Promise<ApiResponse<LeaveRequest>> => {
    return apiRequest<LeaveRequest>(`/leave-requests/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status: 'approved' }),
    });
  },

  reject: async (id: number, reason?: string): Promise<ApiResponse<LeaveRequest>> => {
    return apiRequest<LeaveRequest>(`/leave-requests/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status: 'rejected', reason }),
    });
  },
};

// Attendance API calls
export const attendanceApi = {
  clockIn: async (employee_id: number): Promise<ApiResponse> => {
    return apiRequest('/attendance/clock-in', {
      method: 'POST',
      body: JSON.stringify({ employee_id }),
    });
  },

  clockOut: async (employee_id: number): Promise<ApiResponse> => {
    return apiRequest('/attendance/clock-out', {
      method: 'POST',
      body: JSON.stringify({ employee_id }),
    });
  },

  getAttendance: async (employee_id: number, date?: string): Promise<ApiResponse> => {
    const endpoint = date 
      ? `/attendance?employee_id=${employee_id}&date=${date}`
      : `/attendance?employee_id=${employee_id}`;
    return apiRequest(endpoint);
  },

  getAttendanceReport: async (startDate: string, endDate: string): Promise<ApiResponse> => {
    return apiRequest(`/attendance/summary?start_date=${startDate}&end_date=${endDate}`);
  },
};

// Payroll API calls
export const payrollApi = {
  getAll: async (): Promise<ApiResponse<PayrollData[]>> => {
    return apiRequest<PayrollData[]>('/payroll');
  },

  getById: async (id: number): Promise<ApiResponse<PayrollData>> => {
    return apiRequest<PayrollData>(`/payroll/${id}`);
  },

  process: async (payrollData: PayrollData[]): Promise<ApiResponse> => {
    return apiRequest('/payroll/generate', {
      method: 'POST',
      body: JSON.stringify({ payroll_data: payrollData }),
    });
  },

  generateSlip: async (_employee_id: number, period: string): Promise<ApiResponse> => {
    // Map to export endpoint with period query
    return apiRequest(`/payroll/export?period=${encodeURIComponent(period)}`);
  },
};

// Reports API calls
export const reportsApi = {
  getEmployeeReport: async (): Promise<ApiResponse> => {
    return apiRequest('/reports/employees');
  },

  getAttendanceReport: async (startDate: string, endDate: string): Promise<ApiResponse> => {
    return apiRequest(`/reports/attendance?start_date=${startDate}&end_date=${endDate}`);
  },

  getPayrollReport: async (period: string): Promise<ApiResponse> => {
    return apiRequest(`/reports/payroll?period=${period}`);
  },

  getLeaveReport: async (): Promise<ApiResponse> => {
    return apiRequest('/reports/leaves');
  },

  exportReport: async (type: string, format: 'pdf' | 'excel' | 'csv'): Promise<ApiResponse> => {
    return apiRequest(`/reports/${type}/export?format=${format}`);
  },
};

// Performance API calls
export const performanceApi = {
  getReviews: async (employee_id?: number): Promise<ApiResponse> => {
    const endpoint = employee_id ? `/performance/reviews/${employee_id}` : '/performance/reviews';
    return apiRequest(endpoint);
  },

  createReview: async (reviewData: Record<string, unknown>): Promise<ApiResponse> => {
    return apiRequest('/performance/reviews', {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
  },

  getGoals: async (employee_id?: number): Promise<ApiResponse> => {
    const endpoint = employee_id ? `/performance/goals/${employee_id}` : '/performance/goals';
    return apiRequest(endpoint);
  },

  setGoal: async (goalData: Record<string, unknown>): Promise<ApiResponse> => {
    return apiRequest('/performance/goals', {
      method: 'POST',
      body: JSON.stringify(goalData),
    });
  },
};

// Training API calls
export const trainingApi = {
  getCourses: async (): Promise<ApiResponse> => {
    return apiRequest('/training/courses');
  },

  enrollEmployee: async (employee_id: number, course_id: number): Promise<ApiResponse> => {
    return apiRequest('/training/enroll', {
      method: 'POST',
      body: JSON.stringify({ employee_id, course_id }),
    });
  },

  getProgress: async (employee_id: number): Promise<ApiResponse> => {
    return apiRequest(`/training/progress/${employee_id}`);
  },

  markComplete: async (employee_id: number, course_id: number): Promise<ApiResponse> => {
    return apiRequest('/training/complete', {
      method: 'POST',
      body: JSON.stringify({ employee_id, course_id }),
    });
  },
};

// Benefits API calls
export const benefitsApi = {
  getAll: async (): Promise<ApiResponse> => {
    return apiRequest('/benefits');
  },

  enroll: async (employee_id: number, benefit_id: number): Promise<ApiResponse> => {
    return apiRequest('/benefits/enroll', {
      method: 'POST',
      body: JSON.stringify({ employee_id, benefit_id }),
    });
  },

  getEnrollments: async (employee_id: number): Promise<ApiResponse> => {
    return apiRequest(`/benefits/enrollments/${employee_id}`);
  },
};

// Compliance API calls
export const complianceApi = {
  getAudits: async (): Promise<ApiResponse> => {
    return apiRequest('/compliance/audits');
  },

  createAudit: async (auditData: Record<string, unknown>): Promise<ApiResponse> => {
    return apiRequest('/compliance/audits', {
      method: 'POST',
      body: JSON.stringify(auditData),
    });
  },

  getRegulations: async (): Promise<ApiResponse> => {
    return apiRequest('/compliance/regulations');
  },

  trackCompliance: async (type: string): Promise<ApiResponse> => {
    return apiRequest(`/compliance/track/${type}`);
  },
};

// Document management API calls
export const documentApi = {
  getAll: async (): Promise<ApiResponse> => {
    return apiRequest('/documents');
  },

  upload: async (file: File, category: string): Promise<ApiResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);

    return apiRequest('/documents/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
      },
    });
  },

  download: async (id: number): Promise<ApiResponse> => {
    return apiRequest(`/documents/${id}/download`);
  },

  delete: async (id: number): Promise<ApiResponse> => {
    return apiRequest(`/documents/${id}`, {
      method: 'DELETE',
    });
  },
};

// Facial Recognition Attendance API calls
export const facialAttendanceApi = {
  // Scan face and record attendance
  scanFace: async (imageData: string, employeeId?: number): Promise<ApiResponse> => {
    return apiRequest('/facial-attendance/scan', {
      method: 'POST',
      body: JSON.stringify({ 
        image: imageData,
        employee_id: employeeId 
      }),
    });
  },

  // Get attendance records for a specific date
  getAttendanceRecords: async (date: string): Promise<ApiResponse> => {
    return apiRequest(`/facial-attendance/records?date=${date}`);
  },

  // Get attendance summary for HR
  getAttendanceSummary: async (date: string): Promise<ApiResponse> => {
    return apiRequest(`/facial-attendance/summary?date=${date}`);
  },

  // Get employees who haven't checked in
  getMissingAttendance: async (date: string): Promise<ApiResponse> => {
    return apiRequest(`/facial-attendance/missing?date=${date}`);
  },

  // Send notifications to HR
  sendHRNotification: async (data: {
    date: string;
    missingEmployees: number[];
    message: string;
  }): Promise<ApiResponse> => {
    return apiRequest('/facial-attendance/notify-hr', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Record penalty for employee
  recordPenalty: async (data: {
    employeeId: number;
    reason: string;
    score: number;
    date: string;
  }): Promise<ApiResponse> => {
    return apiRequest('/facial-attendance/penalty', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Get penalty history for employee
  getPenaltyHistory: async (employeeId: number): Promise<ApiResponse> => {
    return apiRequest(`/facial-attendance/penalty-history/${employeeId}`);
  },

  // Get attendance settings
  getSettings: async (): Promise<ApiResponse> => {
    return apiRequest('/facial-attendance/settings');
  },

  // Update attendance settings
  updateSettings: async (settings: Record<string, unknown>): Promise<ApiResponse> => {
    return apiRequest('/facial-attendance/settings', {
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  },

  // Get time slots configuration
  getTimeSlots: async (): Promise<ApiResponse> => {
    return apiRequest('/facial-attendance/time-slots');
  },

  // Update time slots configuration
  updateTimeSlots: async (timeSlots: Record<string, unknown>[]): Promise<ApiResponse> => {
    return apiRequest('/facial-attendance/time-slots', {
      method: 'PUT',
      body: JSON.stringify({ time_slots: timeSlots }),
    });
  },

  // Export attendance report
  exportReport: async (startDate: string, endDate: string, format: 'pdf' | 'excel' | 'csv'): Promise<ApiResponse> => {
    return apiRequest(`/facial-attendance/export?start_date=${startDate}&end_date=${endDate}&format=${format}`);
  },
};

// Default export with all APIs
export default {
  auth: authApi,
  employee: employeeApi,
  department: departmentApi,
  leave: leaveApi,
  attendance: attendanceApi,
  payroll: payrollApi,
  reports: reportsApi,
  performance: performanceApi,
  training: trainingApi,
  benefits: benefitsApi,
  compliance: complianceApi,
  document: documentApi,
  facialAttendance: facialAttendanceApi,
};

// Utility functions for common operations
export const utils = {
  // Set auth token in localStorage
  setAuthToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  },

  // Remove auth token from localStorage
  removeAuthToken: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return getAuthToken() !== null;
  },

  // Format API errors for display
  formatError: (error: unknown): string => {
    if (typeof error === 'string') return error;
    if (typeof error === 'object' && error !== null) {
      if ('message' in error && typeof (error as any).message === 'string') return (error as any).message;
      if ('errors' in error) {
        const errorsObj = (error as any).errors;
        const firstError = Object.values(errorsObj)[0];
        return Array.isArray(firstError) ? firstError[0] : String(firstError);
      }
    }
    return 'An unexpected error occurred';
  },
};