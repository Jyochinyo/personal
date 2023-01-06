<template>
  <div class="cocktailDetailPage">
    <p class="title">{{ cocktailInfo?.name }}</p>
    <div class="type">
      <span>{{ cocktailInfo?.spirituosity ? '含酒精' : '不含酒精' }}</span>
      <span v-if="cocktailInfo?.spirituosity && cocktailInfo.icy">  /  </span>
      <span v-if="cocktailInfo?.icy">冰的</span>
    </div>
    <div :class="'cocktail-' + route.params.id" class="cocktailPic"></div>
    <div class="ingredients" v-for="(item, index) in ingredients" :key="'ingredient' + index">
      <p class="ingredient">{{ item.cn }}</p>
      <p class="ingredient">{{ item.en }}</p>
    </div>
    <div @click="router.push({ name: 'cocktail' })" class="icon-arrow-left backIcon"></div>
  </div>
</template>

<script lang="ts" setup>
/** 引入 import */
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { cocktail, ingredient } from './../../model/cocktail/index'
import axios from 'axios';
const route = JSON.parse(JSON.stringify(useRoute()))
const router = useRouter()

/** 组件 component */

/** 数据 data */
const cocktailInfo = ref<cocktail>()
const listRef = ref<[cocktail]>()
const ingredients = ref<[ingredient]>()

/** 生命周期 */
onMounted(() => {
  axios.get('/mock/cocktail.json').then(res => {
    listRef.value = res.data
    cocktailInfo.value = listRef.value?.find(v => (v.id + '') === route.params.id)
    getIngredients()
  })
})

/** 函数 methods */
const getIngredients = () => {
  axios.get('/mock/ingredient.json').then(res => {
    const ingredientIds = JSON.parse(JSON.stringify(cocktailInfo.value?.ingredient))
    const result:any = []
    ingredientIds.forEach((item: any) => {
      res.data.forEach((resp: ingredient) => {
        if (item === resp.id) result.push(resp)
      })
    })
    ingredients.value = result
  })
}

</script>

<style lang="less">
@defaultFont: system-ui;
@defaultColor: black;

.cocktailDetailPage {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(226, 219, 213);
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .backIcon {
    position: fixed;
    left: 1.6rem;
    top: 1.6rem;
  }
  .title {
    font-size: 2.8rem;
    line-height: 4.8rem;
    font-weight: bold;
    font-family: @defaultFont;
    color: @defaultColor;
    margin-top: 1rem;
  }
  .type span {
    font-size: 1.2rem;
    font-family: @defaultFont;
    color: @defaultColor;
    font-weight: bold;
    margin-top: 1rem;
  }
  .cocktailPic {
    width: 70vw;
    height: 70vw;
    margin: 4rem 0;
    border-radius: 5px;
  }
  .ingredients {
    margin-bottom: 1.2rem;
  }
  .ingredient {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    font-family: @defaultFont;
    color: @defaultColor;
  }
}
</style>
