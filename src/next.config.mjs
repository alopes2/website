/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
