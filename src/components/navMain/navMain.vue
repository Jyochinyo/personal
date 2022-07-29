<template>
  <div class="compContent">
    <div class="navContent">
      <div class="logoBg">
      </div>
      <div class="thumb" @click="toggleMenu">
        <div class="thumbOne"></div>
        <div class="thumbTwo"></div>
        <div class="thumbThree"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */

/** 组件 component */

/** 数据 data */
// const myName = ref<string>('vue')

/** 函数 methods */
const toggleMenu = () => {
  console.log('toggleMenu')
}

</script>

<style scoped lang="less">
.compContent {
  color: lightgray;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 125px;
  height: 100vh;
  padding: 30px;
  .navContent{
    background-color: red;
    width: 100%;
    height: 100%;
    position: relative;
    .logoBg {
      position: absolute;
      left: 2px;
      top: 76px;
      width: 62px;
      height: 62px;
      border-radius: 50%;
      background-color: #f5c300;
    }
    .thumb {
      cursor: pointer;
      height: 17px;
      width: 33px;
      outline: none;
      position: absolute;
      left: 16.5px;
      top: 155px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &>div {
        width: 100%;
        height: 3px;
        background-color: black;
      }
    }
  }
}

</style>
