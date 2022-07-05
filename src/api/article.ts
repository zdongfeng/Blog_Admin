/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-05 14:30:32
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-05 16:02:31
 */
import request from "@/utils/request";

export const create = (data: object) =>{
    return request({
        url: '/article/create',
        method: 'post',
        data
    })
}
export const getList = (params?: object) =>{
    return request({
        url: '/article/list',
        method: 'get',
        params
    })
}
