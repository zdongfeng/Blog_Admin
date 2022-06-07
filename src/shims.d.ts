/*
 * @Descripttion: 解决ts 无法理解 .vue 文件问题
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 15:29:26
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-07 15:29:37
 */
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  