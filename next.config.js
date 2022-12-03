/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'careassistance.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // appDir: true


  }
}

module.exports = nextConfig
