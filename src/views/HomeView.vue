<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="myName" @change="log"/>
    <input type="text" v-model="myName">
    <p @click="log">{{myName}}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

/** 数据 data */
const myName = ref('vue')

/** 方法 methods */
const log = () => {
  console.log(myName.value)
}

</script>
