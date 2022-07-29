<template>
  <div class="homePage">
    HomePage111 {{ t('Apple') }}
    {{ $t('Apple') }}
  </div>
</template>

<script lang="ts" setup>

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

console.log('t', t('Apple'))

</script>

<style scoped lang="less">
.homePage {
  color: lightgray;
  font-size: 24px;
}
</style>
