/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-08 10:11:24
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-05 14:57:49
 */
import storage from 'store'
import { ActionContext } from 'vuex'
import { login } from "@/api/login";

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
  namespaced: true,

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
        login(params)
          .then(res => {
            console.log(res)
            if (res.data.code === 0) {
              storage.set('token', res.data.data.token)
              context.commit('setToken', res.data.data.token)
              resolve(res.data)
            } else {
              reject(res.data)
            }
          })
          .catch(e => reject(e))
      })
    }

  }
}

export default user
