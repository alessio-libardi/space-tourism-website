/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_URL,
  distDir: 'build',
  pageExtensions: ['page.js'],
  reactStrictMode: true,
  images: {
    loader: 'custom',
    disableStaticImages: true
  }
}

module.exports = nextConfig
