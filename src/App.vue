<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 10:15:45
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-29 17:09:50
-->

<template>
  <a-config-provider v-bind="getPopupContainer">
    <router-view></router-view>
  </a-config-provider>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
export default defineComponent({
  name: 'App',
  data() {
    return {
      getPopupContainer: {
        locale: zhCN
      }
    }
  }
})
</script>
<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
body{
  background-color: #F3F3F4;
}
.container {
  width: 100%;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
