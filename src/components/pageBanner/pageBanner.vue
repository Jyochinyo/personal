<template>
  <div class="bannerContent">
    <div class="bannerUpper">
      <div class="text">
        <h1>{{ $t('F2EEngineer') }}</h1>
        <h1>{{ $t('MoreThanF2E') }}</h1>
      </div>
    </div>
    <div class="bannerLower">
      <div class="inner">
        link
      </div>
      <div class="scrollDown">
        <button class="downBtn"></button>
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
  .bannerLower {
    grid-gap: 20px;
    display: grid;
    grid-template-areas: ". x x x x x . . . . . .";
    grid-template-columns: repeat(12,1fr);
    position: relative;
    height: 50vh;
    min-height: 150px;
    &>.inner {
      grid-area: x;
      padding-top: 35px;
    }
    &>.scrollDown {
      bottom: 50px;
      position: absolute;
      grid-area: x;
      .downBtn {
        background-color: transparent;
        border: 1px solid #333;
        border-radius: 50%;
        cursor: pointer;
        height: 54px;
        outline: none;
        position: relative;
        transition: transform .3s;
        width: 54px;
        &::after {
          border-top: 1px solid #333;
          content: "";
          display: block;
          position: absolute;
          top: 53%;
          width: 17px;
          transform: rotate(-45deg);
          left: 45.2%;
        }
        &::before {
          border-top: 1px solid #333;
          content: "";
          display: block;
          position: absolute;
          top: 53%;
          width: 17px;
          right: 45.2%;
          transform: rotate(45deg);
        }
        &:hover {
          transform: translateY(-5px);
        }
      }
    }
  }
}

</style>
