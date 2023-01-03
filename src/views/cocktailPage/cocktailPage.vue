<template>
  <div class="cocktailPage">
    <div v-for="(item, index) in listRef" @click="rowSelect(item)" :key="'cocktail' + index" class="row">
      <div>
        <div class="top">
          <span class="row-index">{{ (index < 9 ? '0' : '') + (index + 1) }}</span>
          <div class="icon-spirit" v-if="item.spirituosity"></div>
        </div>
        <p class="name">{{ item.name }}</p>
        <p class="type">{{ item.motto }}</p>
      </div>
      <div class="icon-arrow-right"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios';
const router = useRouter()

interface cocktail {
  name: string,
  spirituosity: boolean,
  icy: boolean,
  motto: string
}
// import { useI18n } from 'vue-i18n';

/** 组件 component */
// import productCard from '@/components/productCard/productCard.vue';

/** 数据 data */
// const currLangRef = ref<string>('Cn')
// const { locale } = useI18n();
const listRef = ref<[cocktail]>()

/** 生命周期 */
onMounted(() => {
  axios.get('/mock/cocktail.json').then(res => {
    listRef.value = res.data
  })
})

/** 函数 methods */
// 切换语言
// const changeLang = () => {
//   const lang = locale.value === 'cn' ? 'en' : 'cn'
//   locale.value = lang
//   localStorage.setItem('locale', lang)
// }
// 选择鸡尾酒
const rowSelect = (item: cocktail) => {
  router.push({
    name: 'cocktailInfo',
    params: JSON.parse(JSON.stringify(item))
  })
}

</script>

<style lang="less">
@defaultFont: system-ui;
@defaultColor: black;

.cocktailPage {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(201, 201, 199);
  position: relative;
  padding: 2rem;
  .row {
    height: 13.2rem;
    padding: 1rem 0;
    font-family: @defaultFont;
    color: @defaultColor;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .top {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &>div {
        margin-left: 0.4rem;
      }
    }
    .row-index {
      font-size: 1.2rem;
      line-height: 1.6rem;
      font-family: @defaultFont;
      color: @defaultColor;
      font-weight: bold;
    }
    .name {
      font-size: 2.6rem;
      line-height: 4.8rem;
      font-weight: bold;
      font-family: @defaultFont;
      color: @defaultColor;
    }
    .type {
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
    .icon-arrow-right {
      margin-top: 3.4rem;
    }
  }
}
</style>
