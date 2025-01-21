const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
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
