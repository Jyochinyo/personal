<template>
  <div class="compContent">
    <div class="navContent" :class="[isMenuExpand ? 'expand' : 'collapse']">
      <div class="logoBg" :style="{ opacity: y || isMenuExpand ? 1 : 0}"></div>
      <NavLogo :isMenuExpand="isMenuExpand"></NavLogo>
      <div class="thumb" @click="toggleMenu">
        <div class="thumbOne"></div>
        <div class="thumbTwo"></div>
        <div class="thumbThree"></div>
      </div>
      <div class="menuList">
        <span>{{ $t('Home')}}</span>
        <span>{{ $t('Project')}}</span>
        <span @click="changeLang">{{ $t('CnEn')}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useWindowScroll } from '@vueuse/core'

/** 组件 component */
import NavLogo from '../navLogo/navLogo.vue';

/** 数据 data */
const isMenuExpand = ref<boolean>(false);
const { y } = useWindowScroll()

/** 函数 methods */
const { locale } = useI18n();
const emit = defineEmits(['menuExpand'])

// 目录开关
const toggleMenu = () => {
  isMenuExpand.value = !isMenuExpand.value
  emit('menuExpand', isMenuExpand.value)
}

// 切换语言
const changeLang = () => {
  const lang = locale.value === 'cn' ? 'en' : 'cn'
  locale.value = lang
  localStorage.setItem('locale', lang)
}

</script>

<style scoped lang="less">
.compContent {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 125px;
  height: 100vh;
  padding: 30px;
  .navContent {
    width: 100%;
    height: 100%;
    position: relative;
    .logoBg {
      position: absolute;
      background-color: @color_theme;
      transform: translateZ(0);
      transition: all 0.5s;
    }
    .thumb {
      .flex-column;
      cursor: pointer;
      height: 17px;
      width: 33px;
      outline: none;
      position: absolute;
      justify-content: space-between;
      left: 16.5px;
      top: 155px;
      &>div {
        width: 100%;
        height: 3px;
        background-color: @basic_black;
        transition: all 0.5s;
        transform: translateX(0);
      }
    }
    .menuList {
      position: absolute;
      left: 74px;
      margin: 7px 0;
      transition: all 0.5s;
      transform: translateX(0);
      &>span {
        font-size: .85em;
        font-weight: 600;
        line-height: 1;
        margin: 7px 0;
        color: @basic_white;
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        display: inline-block;
        &::after {
          bottom: 0;
          content: "";
          display: inline-block;
          left: 0;
          position: absolute;
          transition: width .3s;
          width: 0;
          border-bottom: 2px solid @basic_white;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
  // 目录关闭
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
    .menuList {
      visibility: hidden;
      top: 128px;
      opacity: 0;
    }
  }
  // 目录打开
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
        background-color: @basic_white;
      }
      .thumbTwo {
        opacity: 0;
      }
      .thumbThree {
        transform: rotate(-45deg) translate3d(5px,-5px,0);
        background-color: @basic_white;
      }
    }
    .menuList {
      visibility: unset;
      top: 148px;
      opacity: 1;
    }
  }
}

</style>
