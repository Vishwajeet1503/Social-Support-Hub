/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',   // Static export
    trailingSlash: true,  // Ensures trailing slashes
  };
  
  module.exports = nextConfig;  // CommonJS export
  