import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

// Create the intl middleware
const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'th'],
  defaultLocale: 'th',
  localeDetection: false // Disable for static export
});

export default function middleware(request: NextRequest) {
  // For static export, we don't need complex middleware
  // Just handle basic routing
  const { pathname } = request.nextUrl;
  
  // Handle root redirect
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/th/', request.url));
  }
  
  // For static export, let the request pass through
  return NextResponse.next();
}

export const config = {
  // Match all paths except static files and API routes
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
