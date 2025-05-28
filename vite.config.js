import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 클라이언트에서 /api/* 로 요청하면
      '/api': {
        target: 'https://0adb-221-142-225-145.ngrok-free.app', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
});
