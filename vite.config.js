/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 10:15:45
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-28 18:10:14
 */
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 配置主机
  server:{
    host: '0.0.0.0',
    port:886,
    proxy: {
      '/api': {
        target: 'http://192.168.2.120:4321/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
