import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        secure: false,
      },"/menu": {
        target: "http://localhost:3001",
        secure: false,
      },
    },
  },
  plugins: [react()],
})
