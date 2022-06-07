<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-07 10:15:45
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-07 11:51:11
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
