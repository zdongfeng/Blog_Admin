/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 15:12:47
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-07 15:36:48
 */

import { constantRouterMap } from "./modules/basicsRouter";
import { createRouter, createWebHistory } from "vue-router";

// 实例化路由
const router = createRouter({
    history: createWebHistory('/'),
    routes: constantRouterMap
})

export default router
