// Authentication middleware for protecting routes
import { NextRequest, NextResponse } from 'next/server';

export function authMiddleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname;
  
  // Define protected routes (routes that require authentication)
  const protectedRoutes = [
    '/dashboard',
    '/employees',
    '/departments', 
    '/leaves',
    '/attendance',
    '/payroll',
    '/reports',
    '/performance',
    '/training',
    '/benefits',
    '/compliance',
    '/documents',
    '/settings'
  ];
  
  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.includes(route)
  );
  
  if (isProtectedRoute) {
    // In a real implementation, you would check for a valid JWT token
    // For now, we'll check if the user is logged in via localStorage
    // This is a client-side check, so we'll handle it in the components
    
    // For server-side protection, you would:
    // 1. Check for Authorization header with Bearer token
    // 2. Validate the token with your backend
    // 3. Return 401 if invalid
    
    // Since Next.js middleware runs on the server, we can't access localStorage
    // The actual authentication check will be done in the page components
    // using the useAuth hook
  }
  
  return NextResponse.next();
}

// Export the middleware function
export default authMiddleware;
