<template>
  <div>{{state}}</div>
</template>

<script>
import { reactive } from 'vue'
import { createGlobalState, useStorage } from '@vueuse/core'

const useGlobalState = createGlobalState(() => {
  return useStorage('vue-use-locale-storage', {
    name: 'Banana',
    color: 'Yellow',
    size: 'Medium',
  })
})

export default {
  setup() {
    const state = reactive({
      global: useGlobalState()
    })

    return {
      state,
    }
  }
}
</script>
