<template>
  <div class="homePage">
    HomePage111 {{ t('Apple') }}
  </div>
</template>

<script lang="ts" setup>

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<style scoped lang="less">
.homePage {
  color: lightgray;
  font-size: 24px;
}
</style>
