import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    domains: ['evergreenrp-one.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  async headers() {
    // Environment-based CORS configuration
    const isDevelopment = process.env.NODE_ENV === 'development';
    const allowedOrigin = isDevelopment 
      ? (process.env.CORS_ORIGIN_DEV || 'http://localhost:3000')
      : (process.env.CORS_ORIGIN_PROD || 'https://evergreenrp-one.vercel.app');
    
    return [
      {
        source: "/(.*)",
        headers: [
          // Secure CORS Policy - Environment Aware
          {
            key: "Access-Control-Allow-Origin",
            value: allowedOrigin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, X-Requested-With"
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true"
          },
          {
            key: "Access-Control-Max-Age",
            value: "86400"
          },
          
          // Content Security Policy - Production Ready
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts - only from trusted sources
              "script-src 'self' https://vercel.live https://vercel.com",
              // Styles - only from trusted sources
              "style-src 'self' https://fonts.googleapis.com",
              // Fonts from trusted sources
              "font-src 'self' https://fonts.gstatic.com",
              // Images from trusted sources
              "img-src 'self' data: https: blob: https://evergreenrp-one.vercel.app",
              // Media from trusted sources
              "media-src 'self' https:",
              // Connections to trusted sources
              "connect-src 'self' https: wss:",
              // Frames only from same origin
              "frame-src 'self'",
              // No object embedding
              "object-src 'none'",
              // Base URI restrictions
              "base-uri 'self'",
              // Form actions restricted
              "form-action 'self'",
              // Frame ancestors restricted
              "frame-ancestors 'self'",
              // Upgrade insecure requests
              "upgrade-insecure-requests"
            ].join("; ")
          },
          
          // X-Frame-Options
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
          
          // Referrer Policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          
          // Permissions Policy
          {
            key: "Permissions-Policy",
            value: [
              "camera=()",
              "microphone=()",
              "geolocation=()",
              "payment=()",
              "usb=()",
              "magnetometer=()",
              "gyroscope=()",
              "accelerometer=()",
              "ambient-light-sensor=()",
              "autoplay=()",
              "battery=()",
              "cross-origin-isolated=()",
              "display-capture=()",
              "document-domain=()",
              "encrypted-media=()",
              "execution-while-not-rendered=()",
              "execution-while-out-of-viewport=()",
              "fullscreen=()",
              "gamepad=()",
              "keyboard-map=()",
              "picture-in-picture=()",
              "publickey-credentials-get=()",
              "screen-wake-lock=()",
              "sync-xhr=()",
              "web-share=()",
              "xr-spatial-tracking=()"
            ].join(", ")
          },
          
          // Strict-Transport-Security (HSTS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          },
          
          // Cross-Origin-Embedder-Policy
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp"
          },
          
          // Cross-Origin-Opener-Policy
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin"
          },
          
          // Cross-Origin-Resource-Policy
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin"
          },
          
          // Origin-Agent-Cluster
          {
            key: "Origin-Agent-Cluster",
            value: "?1"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
