'use client';

import { useState, useCallback } from 'react';

interface AuthState {
  loading: boolean;
  error: string | null;
  user: any | null;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    loading: false,
    error: null,
    user: null,
    isAuthenticated: false
  });

  const login = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - in real app, this would be an API call
      if (email === 'admin@hr.com' && password === 'password') {
        const user = {
          id: 1,
          email,
          name: 'HR Admin',
          role: 'admin'
        };
        
        setState({
          loading: false,
          error: null,
          user,
          isAuthenticated: true
        });
        
        return { success: true, user };
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง'
        }));
        
        return { success: false, error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' };
      }
    } catch (error) {
      const errorMessage = 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ';
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage
      }));
      
      return { success: false, error: errorMessage };
    }
  }, []);

  const logout = useCallback(() => {
    setState({
      loading: false,
      error: null,
      user: null,
      isAuthenticated: false
    });
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    login,
    logout,
    clearError
  };
}