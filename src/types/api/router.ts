/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-28 17:22:03
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-29 09:58:08
 */
// 路由对象约束
export interface RouterObj {
    id?: number,
    path: string,
    name: string,
    component: string,
    key?: string,
    redirect?: string,
    icon?: string,
    children?: RouterObj[],
    pid?: number,
    hidden?: boolean,
    keepAlive?: boolean,
    meta?:MetaObj
}
  
export interface MetaObj {
  hidden?: boolean,
  title?:string
}
