/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // 👈 add this
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
