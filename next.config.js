/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV ==="production"

const nextConfig = {
  reactStrictMode: true,
  assetPrefix : isProd ? sweetandsourkiss.github.io/bob-zoo:""
};

module.exports = nextConfig;
