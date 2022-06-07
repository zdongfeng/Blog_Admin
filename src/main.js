/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 10:15:45
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-07 17:05:40
 */
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'

import router from './router/index'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

// 使用Antd
app.use(Antd)

// 使用router 
app.use(router)

// 当路由器完成初始化导航时，返回一个promise, 这个时候挂载页面
router.isReady().then(() => app.mount('#app') ) 
