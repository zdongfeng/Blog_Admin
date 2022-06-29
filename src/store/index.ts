/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-08 10:11:08
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-29 11:57:56
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

function fn(){
    let a = 1
    let b =2
    let sum = a + b 
    return sum
}
export default store
