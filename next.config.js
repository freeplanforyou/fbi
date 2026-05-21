/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/fbi',
  assetPrefix: '/fbi',
}

module.exports = nextConfig
