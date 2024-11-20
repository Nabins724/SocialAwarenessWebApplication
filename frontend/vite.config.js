import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    proxy:{
      "":{
        target: "https://main.dau1331g1efhn.amplifyapp.com",
        changeOrigin: true,
      }
    }
  }
})
