<template>
  <div class="hello">
    <h1 @click="emitTest">hello {{ msg }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  msg: String
})
const emit = defineEmits(['change'])

const emitTest = () => {
  emit('change', 'value')
}

const sayHi = () => {
  console.log('hi')
}

const childName = 'little'

defineExpose({
  sayHi,
  childName
})

</script>

<style scoped lang="less">
.hello {
  color: lightgray;
}
</style>
