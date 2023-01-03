<template>
  <div class="cocktailPage">
    123
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
const route = JSON.parse(JSON.stringify(useRoute()))

/** 组件 component */

/** 数据 data */
// const currLangRef = ref<string>('Cn')
// const { locale } = useI18n();
// const listRef = ref<[cocktail]>()

/** 生命周期 */
onMounted(() => {
  // axios.get('/mock/cocktail.json').then(res => {
  //   listRef.value = res.data
  // })
  console.log('route =>', route.params)
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
  min-height: 100vh;
  background-color: rgb(226, 219, 213);
  position: relative;
  padding: 2rem;
}
</style>
