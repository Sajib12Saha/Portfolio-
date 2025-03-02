/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Set limit to 10MB
    },
  },
  webpack: (config:any) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
