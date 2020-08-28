<template>
  <div>{{state}}</div>
</template>

<script>
import { reactive } from 'vue'
import { useDeviceLight } from '@vueuse/core'

export default {
  setup() {
    const state = reactive({
      light: useDeviceLight()
    })

    return {
      state,
    }
  },
}
</script>
