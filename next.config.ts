import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https:",
              "connect-src 'self' https: wss:",
              "frame-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
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
