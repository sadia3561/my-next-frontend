import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Use remotePatterns instead of domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',       // allow any remote host, or replace with specific hosts
        pathname: '/**',     
      },
    ],
  },
};

export default nextConfig;
