/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Fix legacy JavaScript (Save ~25 KiB)
  experimental: {
    legacyBrowsers: false,
  },

  // Fix image delivery (Save ~722 KiB)
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Fix cache lifetimes (Save ~2,938 KiB) + preload hints
  async headers() {
    return [
      {
        // Cache all Next.js static chunks forever (they're content-hashed)
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache all public folder assets (images, fonts, icons)
        source: '/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;