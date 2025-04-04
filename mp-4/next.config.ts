import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:'**.iconfinder.com',
        port: '',
      }
    ],
  },
}

export default nextConfig;
