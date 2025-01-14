import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Это заставит сервер слушать на всех интерфейсах
    port: 5173,        // Порт можно оставить по умолчанию или изменить
  },
})