'use client';

import { useState, useEffect, useCallback } from 'react';
import { employeeApi, ApiResponse } from '../lib/api';

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
  department?: {
    id: number;
    name: string;
  };
}

interface UseEmployeesState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

export const useEmployees = () => {
  const [state, setState] = useState<UseEmployeesState>({
    employees: [],
    loading: false,
    error: null,
  });

  const fetchEmployees = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await employeeApi.getAll();
      
      if (response.success && response.data) {
        setState({
          employees: response.data,
          loading: false,
          error: null,
        });
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to fetch employees',
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

  const createEmployee = useCallback(async (employeeData: Omit<Employee, 'id'>) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await employeeApi.create(employeeData);
      
      if (response.success && response.data) {
        setState(prev => ({
          employees: [...prev.employees, response.data!],
          loading: false,
          error: null,
        }));
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to create employee',
        }));
        return { success: false, error: response.message || 'Failed to create employee' };
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

  const updateEmployee = useCallback(async (id: number, employeeData: Partial<Employee>) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await employeeApi.update(id, employeeData);
      
      if (response.success && response.data) {
        setState(prev => ({
          employees: prev.employees.map(emp => 
            emp.id === id ? response.data! : emp
          ),
          loading: false,
          error: null,
        }));
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to update employee',
        }));
        return { success: false, error: response.message || 'Failed to update employee' };
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

  const deleteEmployee = useCallback(async (id: number) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await employeeApi.delete(id);
      
      if (response.success) {
        setState(prev => ({
          employees: prev.employees.filter(emp => emp.id !== id),
          loading: false,
          error: null,
        }));
        return { success: true };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to delete employee',
        }));
        return { success: false, error: response.message || 'Failed to delete employee' };
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

  const getEmployeeById = useCallback(async (id: number) => {
    try {
      const response = await employeeApi.getById(id);
      
      if (response.success && response.data) {
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.message || 'Employee not found' };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'An error occurred' 
      };
    }
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  // Load employees on mount
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return {
    ...state,
    fetchEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
    clearError,
  };
};
