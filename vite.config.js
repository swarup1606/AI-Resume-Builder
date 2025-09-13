import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/tool': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/download_docx': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/download_pdf': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/download_jpg': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
