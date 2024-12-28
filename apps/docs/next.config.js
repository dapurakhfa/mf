const { MAIN_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/docs-static',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: `${MAIN_URL}/`,
        },
        // This rewrite is necessary to support assetPrefix only in Next 14 and below.
        // It is not necessary in Next 15.
        {
          source: '/docs-static/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig
