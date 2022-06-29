/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 15:12:47
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-28 17:40:14
 */

import { constantRouterMap, siderRouterMap } from "./modules/basicsRouter";
import { createRouter, createWebHashHistory } from "vue-router";

// 实例化路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: [...constantRouterMap, ...siderRouterMap]
})

export default router
