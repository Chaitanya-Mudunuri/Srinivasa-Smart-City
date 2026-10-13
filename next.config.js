/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Since you are using a custom domain (srinivasa.smartcity.mudunuri.co.in) at root root level,
  // basePath and assetPrefix should be empty.
};

module.exports = nextConfig;
