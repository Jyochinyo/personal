<template>
  <div class="cocktailPage">
    <!-- <productCard class="productCard"></productCard> -->
    <div @click="changeLang" class="icon-language"></div>
    <p class="page-title">{{ $t('TodayPick') }}</p>
    <div class="pick-card" >
      <p class="card-title">龙舌兰日出</p>
      <p class="card-subtitle">Tequila Sunrise</p>
      <p class="slogan">由摇滚明星捧红的果味鸡尾酒</p>
      <div class="detail-btn">
        <svg class="trangle">
          <polygon points="5,2 15,10 5,18" stroke="black" stroke-width="1" fill="black"></polygon>
        </svg>
      </div>
    </div>
    <p class="page-title">{{ $t('NewReleases') }}</p>
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n';

/** 组件 component */
// import productCard from '@/components/productCard/productCard.vue';

/** 数据 data */
// const currLangRef = ref<string>('Cn')
const { locale } = useI18n();

/** 生命周期 */
onMounted(() => {
  console.log('onMounted')
})

/** 函数 methods */
// 切换语言
const changeLang = () => {
  const lang = locale.value === 'cn' ? 'en' : 'cn'
  locale.value = lang
  localStorage.setItem('locale', lang)
}

</script>

<style lang="less">
.cocktailPage {
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  padding: 2rem;
  .page-title {
    color: #fff;
    margin-top: 2rem;
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 3rem;
    display: inline-block;
  }
  .pick-card {
    background-color: #fff;
    width: 90vw;
    height: 90vw;
    border-radius: 10%;
    margin: 2rem auto;
    padding: 2rem;
    position: relative;
    background-image: radial-gradient(70% 70% at right bottom, rgb(115, 225, 183), rgb(213, 213, 155), rgb(113, 91, 158), rgb(39, 34, 48));
    .card-title {
      color: #fff;
      font-size: 3.2rem;
      margin-bottom: 1rem;
    }
    .card-subtitle {
      color: #fff;
      font-size: 1.6rem;
    }
    .slogan {
      margin-top: 2rem;
      font-size: 1.6rem;
      color: #fff;
      word-break: break-word;
      width: 70%;
    }
    .detail-btn {
      .flex-center;
      position: absolute;
      bottom: 4rem;
      left: 2rem;
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      background-color: #fff;
      .trangle{
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
