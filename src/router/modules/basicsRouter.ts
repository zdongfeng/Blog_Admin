/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 15:14:51
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-07 15:59:56
 */


/**
 * @descripttion: RouteRecordRaw是内置的类型接口
 * @author: zhaodongfeng
 * @Date: 2022-06-07 15:19:10
 * @@param: RouteRecordRaw
 */
 import { RouteRecordRaw } from "vue-router";

// 基础路由 所有权限通用路由表
// 如首页和登录页和一些不用权限的公用页面
export const constantRouterMap: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../../view/login/login.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/view/errorPages/404.vue')
    }
]
