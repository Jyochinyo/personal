<template>
  <div class="homeView">
    <navMain ref="navMainRef" @menuExpand="menuExpand" />
    <router-view class="routeView" :style="{transform: isMenuExpandRef ? 'translate3d(250px, 0, 0)' : 'translateX(0)'}" />
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { ref } from 'vue'

/** 组件 component */
import navMain from '@/components/navMain/navMain.vue';
const navMainRef = ref(null);

/** 数据 data */
const isMenuExpandRef = ref<boolean>(false);

/** 函数 methods */
const menuExpand = (val: boolean) => {
  isMenuExpandRef.value = val
}

</script>

<style lang="less">
.homeView {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .routeView {
    width: 100%;
    margin-left: 125px;
    transition: all 0.5s;
    padding-right: 60px;
    // TODO 临时高度和背景色 后面要改
    height: 120vh;
    background-color: @basic_white;
  }
}
</style>
