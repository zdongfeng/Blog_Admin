/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 15:14:51
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-13 14:21:14
 */


/**
 * @descripttion: RouteRecordRaw是内置的类型接口
 * @author: zhaodongfeng
 * @Date: 2022-06-07 15:19:10
 * @@param: RouteRecordRaw
 */
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/layout/index.vue";
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
    },
    {
        path: '/403',
        name: '403',
        component: () => import('@/view/errorPages/404.vue')
    },
    {
        path: '/500',
        name: '500',
        component: () => import('@/view/errorPages/404.vue')
    },
    {
        path: '/layout',
        name: 'Name',
        component: () => import('@/view/layout/index.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard/index'
    }
]

export const siderRouterMap: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => Layout,
        redirect: '/dashboard/index',
        meta: {
            hidden: false, //路由是否展示
            title: '首页'
        },
        children: [
            {
                path: '/dashboard/index',
                name: 'DashboardIndex',
                component: () => import('@/view/dashboard/index.vue'),
                meta: {
                    hidden: true
                }
            }
        ]
    },
    {
        path: '/article',
        name: 'Article',
        redirect: '/article/index',
        component: () => Layout,
        meta: {
            title: '文章'
        },
        children: [
            {
                path: '/article/create',
                name: 'ArticleCreate',
                component: () => import('@/view/article/create/create.vue'),
                meta: {
                    title: '创作文章',
                    hidden: true
                }
            },
            {
                path: '/article/index',
                name: 'ArticleList',
                component: () => import('@/view/article/index.vue'),
                meta: {
                    title: '文章列表'
                }
            },

            {
                path: '/article/tag',
                name: 'ArticleTag',
                component: () => import('@/view/dashboard/index.vue'),
                meta: {
                    title: '标签管理'
                }
            }
        ]
    },
    {
        path: '/category',
        name: 'Category',
        redirect: '/category/index',
        component: () => Layout,
        meta: {
            title: '分类'
        },
        children: [

            {
                path: '/category/category',
                name: 'CategoryIndex',
                component: () => import('@/view/dashboard/index.vue'),
                meta: {
                    title: '分类管理'
                }
            },

        ]
    }
]
