/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ← HABILITA next export
  distDir: 'out',          // ← Carpeta de build estático
};

module.exports = nextConfig;
