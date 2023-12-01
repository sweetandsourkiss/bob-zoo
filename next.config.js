/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? `/bob-zoo/` : "",
  trailingSlash: true,
};

module.exports = nextConfig;
