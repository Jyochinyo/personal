<template>
  <div class="cocktailPage">
    <!-- <productCard class="productCard"></productCard> -->
    <p class="lang">{{ currLangRef === 'Cn' ? 'En' : 'Cn'}}</p>

  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { onMounted, ref } from 'vue'

/** 组件 component */
// import productCard from '@/components/productCard/productCard.vue';

/** 数据 data */
const currLangRef = ref<string>('Cn')

/** 函数 methods */
onMounted(() => {
  console.log('onMounted')
})

</script>

<style lang="less">
.cocktailPage {
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  padding: 20px;
  .lang {
    color: #fff;
    // margin: 20px 0 0 20px;
  }
}
</style>
