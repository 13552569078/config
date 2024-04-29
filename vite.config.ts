import path from "node:path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  // base: "/rag",
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 配置代理
  server: {
    host: "0.0.0.0",
    port: 5001,
    open: true,
    proxy: {
      "/api": {
        // target: "http://10.56.183.56:8777/", // 刘帅56
        // target: "http://10.56.180.55:8777", // 肖峰本地
        target: "http://10.56.180.64:8777", // 刘帅本地
        // target: "http://10.56.180.115:8777", // 孙伟本地
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
    cors: true,
  },
})
