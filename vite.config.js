/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 10:15:45
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-07 16:04:46
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 配置主机
  server:{
    host: '0.0.0.0',
  }
})
