/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "d1fdloi71mui9q.cloudfront.net",
      "instagram.faep14-3.fna.fbcdn.net",
      "upload.wikimedia.org",
      "images.hola.com",
    ],
  },
};

module.exports = nextConfig;
