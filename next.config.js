/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router configuration for Vercel
  trailingSlash: true,
  
  // Enable optimized images
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
  
  // Asset prefix for hosting
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Base path configuration
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Redirects
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