/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-08 10:11:08
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-30 13:54:51
 */
import { createStore } from "vuex";
import user, {UserState} from './moudles/user'
import tabs from './moudles/tabs'
import keepAlive from './moudles/keepAlive'
export interface AllState {
    user: UserState
}

const store = createStore<AllState>({

    modules: {
        user,
        tabs,
        keepAlive
    }

})
export default store
