import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // server: {
  //   open: true, // ✅ Auto-open browser on npm run dev
  // },
  build: {
    outDir: 'dist', // ✅ Default build output
    sourcemap: true, // ✅ Helpful if you ever want better debugging
  },
})