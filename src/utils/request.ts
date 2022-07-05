/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 17:45:39
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-05 14:58:17
 */

import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import storage from "store";
import router from '@/router'
import { message } from 'ant-design-vue'

//  创建axios实例

const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 6000
})

/**
 * @description: 异常拦截处理器
 * @param {Object} error 错误信息
 */
const errorHandler = (error: AxiosError): AxiosError | Promise<AxiosError> => {
    message.error(error.message)
    return Promise.reject(error)
}

/**
 * @description: 请求发送前拦截
 * @param {Object} config 配置参数
 */
request.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers && (config.headers['authorization'] = storage.get('tokne') || '')
    return config
}, errorHandler)

/**
 * @desc: 服务端响应后拦截
 * @param { Object } response 返回的数据
 */
request.interceptors.response.use((response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
    if (response.data.code === 200 || response.data.code === 0) {
        return response
    } else if (response.data.code === 401) {
        // 登录失效
        storage.remove('token')
        router.push({ path: '/login', query: { redirect: router.currentRoute.value.fullPath } })
        return Promise.reject(response)
    } else {
        return Promise.reject(response)
    }
}, errorHandler)

export default request
