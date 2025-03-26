/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',  // Use static export
    trailingSlash: true,  // Ensures all routes have trailing slashes (optional but recommended)
  };
  
  module.exports = nextConfig;
  