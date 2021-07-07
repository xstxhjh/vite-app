import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
const projectRootDir = path.resolve(__dirname);
console.log(path.resolve(__dirname), process.cwd())

import viteSvgIcons from 'vite-plugin-svg-icons';

import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(projectRootDir, 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    alias({
      entries: [
        { find: 'src', replacement: path.resolve(projectRootDir, 'src') },
      ]
    })
  ]
})