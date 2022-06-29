/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-08 14:46:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-08 15:32:20
 */
import request from "@/utils/request";

/**
 * @description: 登录
 * @param { Object } data 输入账号密码
 */

export const login = (data:object)  =>{
    return request({
        url: '/users/login',
        method: 'post',
        data
    })
}
