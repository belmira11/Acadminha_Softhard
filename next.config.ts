/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ativa o modo estrito do React
  trailingSlash: false,  // Define se as URLs devem terminar com "/"

  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages não suporta otimização de imagens do Next.js
  },

};

module.exports = nextConfig;

