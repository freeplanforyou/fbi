/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/fbi',
  assetPrefix: '/fbi',
  trailingSlash: true,
}

module.exports = nextConfig
