<template>
  <div class="homePage">
    <PageBanner></PageBanner>
    <div class="pageBlock"></div>
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
/** 组件 component */
import PageBanner from '@/components/pageBanner/pageBanner.vue';

/** Props */
/** 数据 data */
/** 函数 methods */
</script>

<style scoped lang="less">
.homePage {
  width: 100%;
  height: 100%;
}

.pageBlock {
  height: 100vh;
  width: 100%;
  background-color: grey;
}
</style>
