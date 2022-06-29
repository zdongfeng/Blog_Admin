/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-06-28 17:05:52
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-29 10:25:15
 */

import { defineComponent, Slots } from "vue";
import aIcon from "@/components/aicon/aicon.vue";
import { RouterObj } from "@/types/api/router";

export default defineComponent({
  components: {
    aIcon,
  },
  props: {
    router: {
      type: Object,
      required: true,
    },
  },
  render() {
    const menuSub = (router: RouterObj) => {
      const subSlots: Slots = {
        title: () => [<span>{router.meta?.title}</span>],
        icon: () => [<aIcon type={router.icon || "FolderOutlined"} />],
      };
      return (
        <a-sub-menu v-slots={subSlots} key={router.meta?.title}>
          {router.children && router.children.map((item) => menuCreate(item))}
        </a-sub-menu>
      );
    };

    const menuItem = (router: RouterObj) => {
      const itemSlots: Slots = {
        icon: () => router.icon ? [<aIcon type= { router.icon || '' } />] : []
      }
      return (
        <a-menu-item v-slots={ itemSlots } key={ router.meta?.title }>
          <router-link to={ router.path }>{ router.meta?.title }</router-link>
        </a-menu-item>
      )
    }

    const menuCreate = (router: RouterObj) => {
      if (router.children && !router.meta?.hidden && router.name !== 'Dashboard') {
        return menuSub(router);
      }else if (!router.meta?.hidden) {
        return menuItem(router)
      }
    };

    return menuCreate(this.router as RouterObj);
  },
});
