<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-28 15:24:03
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-29 17:12:52
-->
<template>
  <a-layout class="layout">

    <!-- 侧边栏 -->
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <layout-menu :collapsed="collapsed"></layout-menu>
    </a-layout-sider>


    <a-layout>
      <!-- 头部 -->
      <a-layout-header class="header">
        <layout-header v-model:collapsed="collapsed" />
      </a-layout-header>
      
      <!-- 内容 -->
      <a-layout-content class="container">
        <layout-tabs />
      </a-layout-content>

    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import LayoutMenu from './components/menu.vue'
import LayoutHeader from './components/header.vue'
import LayoutTabs from './components/tabs.vue'
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LayoutMenu,
    LayoutHeader,
    LayoutTabs
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
    };
  },
});
</script>
<style lang="scss" scoped>
.layout {
  overflow: hidden;
  height: 100vh;

  & .header {
    background-color: #FFF;
    padding: 0;
  }

  & .container {
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  & .container::-webkit-scrollbar {
    width: 6px;
  }

  & .container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #C1C1C1;
  }

  & .container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #ededed;
  }
}
</style>
<style lang="scss">
.layout {
  & .ant-layout-sider-children {
    overflow-y: auto;
    overflow-x: hidden;
  }

  & .ant-layout-sider-children::-webkit-scrollbar {
    width: 4px;
  }

  & .ant-layout-sider-children::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #535353;
  }

  & .ant-layout-sider-children::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #ededed;
  }
}
</style>
