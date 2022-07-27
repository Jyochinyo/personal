<template>
  <div class="viewContent">
    Menu
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Menu'
})

export default class Menu extends Vue {}
</script>

<style scoped lang="less">
.viewContent {
  width: 100%;
  height: 100%;
}
</style>
