<template>
  <div class="bannerContent">
    <div class="bannerUpper">
      <div class="text">
        <h1>{{ $t('F2EEngineer') }}</h1>
        <h1>{{ $t('MoreThanF2E') }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
/** 组件 component */
/** Props */
/** 数据 data */
/** 函数 methods */
</script>

<style scoped lang="less">
.bannerContent  {
  width: 100%;
  height: 100vh;
  padding-top: 30px;
  .bannerUpper {
    width: 100%;
    grid-gap: 20px;
    background-color: hsla(0,0%,78%,.1);
    display: grid;
    grid-template-areas: ". text text text text text image image image image image image";
    grid-template-columns: repeat(12,1fr);
    height: calc(50vh - 30px);
    min-height: 330px;
    .text {
      grid-area: text;
      align-self: end;
      padding-bottom: 40px;
      h1 {
        font-family: calluna,PingFang SC,Hiragino Sans GB,Microsoft Yahei,'微软雅黑',sans-serif;
        font-size: 1.6em;
        font-weight: 700;
        line-height: 1.6;
      }
    }
  }
}

</style>
