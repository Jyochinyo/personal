<template>
  <div class="compContent">
    <div class="navContent" :class="[isMenuExpand ? 'expand' : 'collapse']">
      <div class="logoBg"></div>
      <NavLogo :isMenuExpand="isMenuExpand"></NavLogo>
      <div class="thumb" @click="toggleMenu">
        <div class="thumbOne"></div>
        <div class="thumbTwo"></div>
        <div class="thumbThree"></div>
      </div>
      <div class="menuList">
        <a href="">HOME</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
/** 引入 import */

/** 组件 component */
import NavLogo from '../navLogo/navLogo.vue';

/** 数据 data */
const isMenuExpand = ref<boolean>(false);

/** 函数 methods */
const toggleMenu = () => {
  console.log('toggleMenu')
  isMenuExpand.value = !isMenuExpand.value
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
  .navContent {
    // background-color: red;
    width: 100%;
    height: 100%;
    position: relative;
    .logoBg {
      position: absolute;
      background-color: #f5c300;
      transform: translateZ(0);
      transition: all 0.5s;
    }
    .thumb {
      cursor: pointer;
      height: 17px;
      width: 33px;
      outline: none;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      left: 16.5px;
      top: 155px;
      &>div {
        width: 100%;
        height: 3px;
        background-color: black;
        transition: all 0.5s;
        transform: translateX(0);
      }
    }
    .menuList {
      position: absolute;
      top: 148px;
      left: 74px;
      padding: 7px 0;
      &>a {
        font-size: .85em;
        font-weight: 600;
        line-height: 1;
        padding: 7px 0;
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .collapse {
    .logoBg {
      left: 2px;
      top: 76px;
      width: 62px;
      height: 62px;
      border-radius: 50%;
    }
    .thumb {
      left: 16.5px;
      top: 155px;
    }
  }
  .expand {
    .logoBg {
      top: 0;
      left: 0;
      width: 315px;
      height: 100%;
    }
    .thumb {
      left: 16.5px;
      top: 155px;
      .thumbOne {
        transform: rotate(45deg) translate3d(5px,5px,0);
        background-color: #fff;
      }
      .thumbTwo {
        opacity: 0;
      }
      .thumbThree {
        transform: rotate(-45deg) translate3d(5px,-5px,0);
        background-color: #fff;
      }
    }
  }
}

</style>
