<template>
  <div class="cocktailPage">
    <div v-for="(itme, index) in listRef" :key="'cocktail' + index" class="row">
      <div>
        <div>
          <span class="row-index">{{ index + 1 }}</span>
        </div>
        <p class="name">{{ itme.name }}</p>
        <p class="type">{{ itme.spirituosity ? '含酒精' : '不含酒精' }}{{ itme.icy ? ' / 冰的' : '' }}</p>
      </div>
      <div class="icon-arrow-right"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { onMounted, ref } from 'vue';
import axios from 'axios';

interface cocktail {
  name: string,
  spirituosity: boolean,
  icy: boolean
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
  console.log('onMounted')
  axios.get('/mock/cocktail.json').then(res => {
    console.log('res', res.data)
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

</script>

<style lang="less">
@defaultFont: system-ui;
@defaultColor: black;

.cocktailPage {
  width: 100vw;
  height: 100vh;
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
