<template>
  <div class="hello">
    <h1 @click="emitTest">hello {{ msg }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  msg: String
})
const emit = defineEmits(['change'])

const emitTest = () => {
  emit('change', 'value')
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
