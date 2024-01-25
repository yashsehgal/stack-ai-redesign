/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.stack-ai.com',
      },
    ],
  },
};

export default nextConfig;
