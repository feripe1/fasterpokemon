/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com',
      'cdn.discordapp.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
