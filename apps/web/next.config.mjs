/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@yolo/ui", "utils"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.raster.app",
      },
      {
        protocol: "https",
        hostname: "rstr.in",
      },
    ],
  },
};

export default nextConfig;
