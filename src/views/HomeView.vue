<template>
  <div class="homeView">
    <navMain ref="navMainRef" />
    <router-view class="routeView" />
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { ref } from 'vue'

/** 组件 component */
import navMain from '@/components/navMain/navMain.vue';
const navMainRef = ref(null);

/** 数据 data */
// const myName = ref<string>('vue')

/** 函数 methods */
// const log = () => {
//   console.log(helloWorldRef.value?.childName)
//   helloWorldRef.value?.sayHi()
// }

</script>

<style lang="less">
.homeView {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .routeView {
    width: 100%;
    height: 100%;
    background-color: lightgreen;
    margin-left: 125px;
  }
}
</style>
