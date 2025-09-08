import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'prepared-candy-706f50f891.strapiapp.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
