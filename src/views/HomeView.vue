<template>
  <div class="home">
    <Menu></Menu>
    <router-view class="routerView" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Menu from '@/components/menu/index.vue';

@Options({
  name: 'HomeView',
  components: {
    Menu
  }
})

export default class HomeView extends Vue {}
</script>

<style lang="less">
.routerView {
  width: 100%;
  height: 100%;
}
</style>
