/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'miro.medium.com'],
  },
  experimental: {
    appDir: true,
  },
};
