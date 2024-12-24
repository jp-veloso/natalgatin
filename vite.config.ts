import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Base para o deploy; ajuste se necessário para subdiretórios
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Diretório de saída (padrão do Vite)
  },
  server: {
    port: 5173, // Porta padrão, ajuste se necessário
  },
  resolve: {
    alias: {
      // Aliases para facilitar importações (opcional)
      '@': '/src',
    },
  },
});