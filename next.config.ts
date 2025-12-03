import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';

              connect-src 'self'
                https://my-next-backend-production.up.railway.app
                https://*.vercel.app
                https://identitytoolkit.googleapis.com
                https://securetoken.googleapis.com
                https://firebase.googleapis.com
                https://firestore.googleapis.com
                https://www.googleapis.com;

              img-src 'self' data: blob: *;
              
              script-src
                'self'
                'unsafe-inline'
                'unsafe-eval';

              style-src
                'self'
                'unsafe-inline';

              frame-src
                'self'
                https://*.firebaseapp.com
                https://*.google.com
                https://*.vercel.app;
            `.replace(/\s+/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
