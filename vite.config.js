import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Cloudflare Pages requiere rutas relativas
  build: {
    outDir: 'dist', // Output de la build para Cloudflare
  },
  server: {
    port: 3000,
  },
});
