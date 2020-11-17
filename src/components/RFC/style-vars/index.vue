<template>
  <div class="text">hello</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      color: 'red',
      font: {
        size: '2em',
      },
    })

    return { ...toRefs(state) }
  },
}
</script>

<style vars="{ color }">
.text {
  color: var(--color);
}
/*
  .text {
    color: var(--v-bind:color);

    shorthand + nested property access
    font-size: var(--:font.size);
  } 
*/
</style>
