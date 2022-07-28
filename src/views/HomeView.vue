<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld ref="helloWorldRef" :msg="myName" @change="log"/>
    <input type="text" v-model="myName">
    <p @click="log">{{myName}}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
/** 组件 component */
import HelloWorld from '@/components/HelloWorld.vue'
const helloWorldRef = ref<any>(null)

/** 数据 data */
const myName = ref('vue')

/** 函数 methods */
const log = () => {
  console.log(helloWorldRef.value?.childName)
  helloWorldRef.value?.sayHi()
}

</script>
