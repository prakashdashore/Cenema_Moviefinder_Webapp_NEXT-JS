/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['image.tmdb.org'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '3000',
            pathname: '/details/id',
          },
        ],
      },
}
module.exports = nextConfig
