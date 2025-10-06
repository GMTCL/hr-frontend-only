'use client';

import { useState, useEffect, useCallback } from 'react';
import { leaveApi } from '../lib/api';

interface LeaveRequest {
  id?: number;
  employee_id: number;
  leave_type: string;
  start_date: string;
  end_date: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  employee?: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  created_at?: string;
  updated_at?: string;
}

interface UseLeavesState {
  leaves: LeaveRequest[];
  loading: boolean;
  error: string | null;
}

export const useLeaves = () => {
  const [state, setState] = useState<UseLeavesState>({
    leaves: [],
    loading: false,
    error: null,
  });

  const fetchLeaves = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await leaveApi.getAll();
      
      if (response.success && response.data) {
        setState({
          leaves: response.data,
          loading: false,
          error: null,
        });
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to fetch leave requests',
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

  const createLeave = useCallback(async (leaveData: Omit<LeaveRequest, 'id'>) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await leaveApi.create(leaveData);
      
      if (response.success && response.data) {
        setState(prev => ({
          leaves: [...prev.leaves, response.data!],
          loading: false,
          error: null,
        }));
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to create leave request',
        }));
        return { success: false, error: response.message || 'Failed to create leave request' };
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

  const updateLeave = useCallback(async (id: number, leaveData: Partial<LeaveRequest>) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await leaveApi.update(id, leaveData);
      
      if (response.success && response.data) {
        setState(prev => ({
          leaves: prev.leaves.map(leave => 
            leave.id === id ? response.data! : leave
          ),
          loading: false,
          error: null,
        }));
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to update leave request',
        }));
        return { success: false, error: response.message || 'Failed to update leave request' };
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

  const approveLeave = useCallback(async (id: number) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await leaveApi.approve(id);
      
      if (response.success && response.data) {
        setState(prev => ({
          leaves: prev.leaves.map(leave => 
            leave.id === id ? response.data! : leave
          ),
          loading: false,
          error: null,
        }));
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to approve leave request',
        }));
        return { success: false, error: response.message || 'Failed to approve leave request' };
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

  const rejectLeave = useCallback(async (id: number, reason?: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await leaveApi.reject(id, reason);
      
      if (response.success && response.data) {
        setState(prev => ({
          leaves: prev.leaves.map(leave => 
            leave.id === id ? response.data! : leave
          ),
          loading: false,
          error: null,
        }));
        return { success: true, data: response.data };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Failed to reject leave request',
        }));
        return { success: false, error: response.message || 'Failed to reject leave request' };
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

  const getLeaveById = useCallback(async (id: number) => {
    try {
      const response = await leaveApi.getById(id);
      
      if (response.success && response.data) {
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.message || 'Leave request not found' };
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

  // Load leaves on mount
  useEffect(() => {
    fetchLeaves();
  }, [fetchLeaves]);

  return {
    ...state,
    fetchLeaves,
    createLeave,
    updateLeave,
    approveLeave,
    rejectLeave,
    getLeaveById,
    clearError,
  };
};
