// Disabled middleware for static export
// Static export doesn't support middleware
export default function middleware() {
  // No-op for static export
}

export const config = {
  matcher: []
};