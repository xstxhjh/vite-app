<template>
  <div>{{state.text}}</div>
</template>

<script>
import { reactive } from 'vue'
import { useDeviceMotion } from '@vueuse/core'

export default {
  setup() {
    const state = reactive({
      text: useDeviceMotion(),
    })
    // 为web开发者提供了关于设备的位置和方向的改变速度的信息

    // console.log(state.text.acceleration)
    return {
        state
    }
  },
}
</script>
