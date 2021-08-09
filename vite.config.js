import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';
const projectRootDir = path.resolve(__dirname);

import viteSvgIcons from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 4000,
    open: true,
    proxy: {
      '/api': 'http://127.0.0.1:5000'
    },
    cors: true
  },
  plugins: [
    vue(),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(projectRootDir, 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/global.scss";'
      }
    }
  }
})
