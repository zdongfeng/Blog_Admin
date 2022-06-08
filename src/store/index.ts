/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-08 10:11:08
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-08 11:17:10
 */
import { createStore } from "vuex";
import user, {UserState} from './moudles/user'

export interface AllState {
    user: UserState
}

const store = createStore({

    modules: {
        user
    }

})

export default store
