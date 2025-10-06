/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for Vercel
  output: 'export',
  trailingSlash: true,
  
  // Disable middleware for static export
  experimental: {
    optimizeCss: false,
  },
  
  // Enable optimized images for static export
  images: {
    unoptimized: true,
    domains: ['hrbackoofice.mimshack-sourc.com', 'hr.mimshack-sourc.com'],
  },
  
  // Production optimizations
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  
  // Build optimizations for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Asset prefix for hosting - remove leading slash for static hosting
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Base path configuration for static hosting
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Redirects for static export
  async redirects() {
    return [
      {
        source: '/',
        destination: '/th/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;