import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    domains: ['evergreenrp-one.vercel.app', 'localhost'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Optimized CORS Policy - Balanced security and functionality
          {
            key: "Access-Control-Allow-Origin",
            value: "*"
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, X-Requested-With, Accept, Origin"
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true"
          },
          {
            key: "Access-Control-Max-Age",
            value: "86400"
          },
          
          // Optimized Content Security Policy - Next.js friendly
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts - Next.js needs unsafe-inline and unsafe-eval
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https://vercel.live https://vercel.com https://localhost:3000",
              // Styles - Tailwind CSS needs unsafe-inline
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://localhost:3000",
              // Fonts from Google Fonts
              "font-src 'self' https://fonts.gstatic.com https://localhost:3000",
              // Images - all local and external sources
              "img-src 'self' data: blob: https: http: https://evergreenrp-one.vercel.app https://localhost:3000",
              // Media - all sources
              "media-src 'self' https: http: https://localhost:3000",
              // Connections - all sources
              "connect-src 'self' https: http: wss: ws: https://localhost:3000",
              // Frames - more permissive for functionality
              "frame-src 'self' https: http: https://localhost:3000",
              // Objects - allow for functionality
              "object-src 'self' https: http: https://localhost:3000",
              // Base URI - self only
              "base-uri 'self'",
              // Form actions - more permissive
              "form-action 'self' https: http: https://localhost:3000",
              // Frame ancestors - more permissive
              "frame-ancestors 'self' https: http: https://localhost:3000",
              // Worker sources
              "worker-src 'self' blob: https://localhost:3000",
              // Manifest sources
              "manifest-src 'self' https://localhost:3000"
            ].join("; ")
          },
          
          // X-Frame-Options - balanced for functionality
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          
          // X-Content-Type-Options
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          
          // X-XSS-Protection
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          
          // Referrer Policy - balanced
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          
          // Permissions Policy - balanced
          {
            key: "Permissions-Policy",
            value: [
              "camera=(self)",
              "microphone=(self)",
              "geolocation=(self)",
              "payment=(self)",
              "usb=(self)",
              "magnetometer=(self)",
              "gyroscope=(self)",
              "accelerometer=(self)",
              "ambient-light-sensor=(self)",
              "autoplay=(self)",
              "battery=(self)",
              "cross-origin-isolated=(self)",
              "display-capture=(self)",
              "document-domain=(self)",
              "encrypted-media=(self)",
              "execution-while-not-rendered=(self)",
              "execution-while-out-of-viewport=(self)",
              "fullscreen=(self)",
              "gamepad=(self)",
              "keyboard-map=(self)",
              "picture-in-picture=(self)",
              "publickey-credentials-get=(self)",
              "screen-wake-lock=(self)",
              "sync-xhr=(self)",
              "web-share=(self)",
              "xr-spatial-tracking=(self)"
            ].join(", ")
          },
          
          // Strict-Transport-Security - enabled for production
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains"
          },
          
          // Cross-Origin-Opener-Policy - balanced
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups"
          },
          
          // Cross-Origin-Resource-Policy - balanced
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-site"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
