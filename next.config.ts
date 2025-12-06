import { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === "development";

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
                ${isDev ? "http://localhost:4000" : ""}
                https://my-next-backend-production.up.railway.app
                https://my-next-frontend-seven.vercel.app
                https://my-next-frontend-sadiyas-projects-67d7bf27.vercel.app
                https://my-next-frontend-git-main-sadiyas-projects-67d7bf27.vercel.app
                https://my-next-frontend-8644rh4ws-sadiyas-projects-67d7bf27.vercel.app
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
