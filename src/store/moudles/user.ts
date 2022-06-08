/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-08 10:11:24
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-08 11:18:33
 */
import storage from 'store'
import { message } from 'ant-design-vue'
import { ActionContext } from 'vuex'

// 登录表单类型
import { LoginFrom } from '@/types/views/login'
import { AllState } from '../index'

export type UserState = {
    token: string,
    name: string
}

const state: UserState = {
    // 标识
    token: storage.get('token'),
    // 昵称
    name: ''
}

const user = {

    // 解决不同模块命名冲突的问题
    // 使用模块中的mutations、getters、actions时候，要加上模块名，例如使用commint执行mutations时
    // 格式：模块名/模块中的mutations this.$store.commit("userInfo/setUserInfo",userInfo)
    namespace: true,

    state,

    mutations: {

        // 设置token
        setToken(state: UserState, token: string) {
            state.token = token
        }
    },

    actions: {

        // 登录
        login(context: ActionContext<UserState, AllState>, params: LoginFrom) {
            return new Promise((resolve, reject) => {
                storage.set('token','token')
                context.commit('setToken', 'token')
                resolve('token')
            })
        }

    }
}

export default user
