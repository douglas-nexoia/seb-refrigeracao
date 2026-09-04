import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        geladeira: path.resolve(__dirname, 'conserto-geladeira.html'),
        maquina: path.resolve(__dirname, 'conserto-maquina-de-lavar.html'),
        microondas: path.resolve(__dirname, 'conserto-microondas.html'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
