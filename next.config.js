const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "taoismzen.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/taoismzen",
        permanent: false,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
