<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-28 15:39:53
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-29 15:48:59
-->
<template>
    <div class="menu__logo">
        <div class="menu__logo-icon">
            <img src="@/assets/logo.png" />
        </div>
        <span v-show="!collapsed">博客后台</span>
    </div>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="dark"
        :inline-collapsed="collapsed">
        <create :router="item" v-for="item in siderRouterMap" />
    </a-menu>
</template>

<script lang="ts">
import { siderRouterMap } from '@/router/modules/basicsRouter'
import { defineComponent, ref } from "vue"
import create from "./menu-create"
export default defineComponent({
    name: 'layoutMenu',
    components:{
        create
    },
    props: {
        collapsed: {
            required: true,
            type: Boolean
        }
    },
    setup() {
        const selectedKeys = ref<string[]>([])
        const openKeys = ref<string[]>([])

        return {
            selectedKeys,
            openKeys,
            siderRouterMap
        }
    },
})
</script>

<style lang="scss" scoped>
.menu__logo {
    display: flex;
    align-items: center;
    padding-left: 24px;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    white-space: nowrap;

    & .menu__logo-icon {
        width: 32px;
        margin-right: 8px;
        
        img {
            display: block;
            width: 100%;
            border-radius: 50%;
        }
    }

    & span {
        display: inline-block;
        font-size: 20px;
        color: #fff;
    }
}
</style>
