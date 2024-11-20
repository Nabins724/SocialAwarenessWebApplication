import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    proxy:{
      "/api":{
        target: "https://13.210.27.141.nip.io",
        changeOrigin: true,
      }
    }
  }
})
