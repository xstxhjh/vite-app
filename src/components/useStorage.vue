<template>
  <div>useStorage: {{state}}</div>
</template>

<script>
import { reactive } from 'vue'
import { useStorage } from '@vueuse/core'

export default {
  setup() {
    console.log(useStorage)
    const state = useStorage('num', 0)
    setTimeout(()=>{
      state.value += 1
    }, 3000)
    return {
      state,
    }
  },
}
</script>
