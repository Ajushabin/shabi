import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./", // Ensure correct asset loading in Netlify
  plugins: [react()],
  optimizeDeps: {
    include: ['react-bootstrap', 'bootstrap']
  },
  server: {
    host: true,  // Exposes to the local network
    port: 5173   // Optional: Specify a custom port
  }
})
