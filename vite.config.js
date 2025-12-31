import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true, // Enable access from other devices
  },
  build: {
    outDir: 'dist', // Standard Vite build directory
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'bootstrap-vendor': ['bootstrap'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});