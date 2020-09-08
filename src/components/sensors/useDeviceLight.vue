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
    // 事件在设备的光传感器检测到周围环境光的强度发生变化时触发

    return {
      state,
    }
  },
}
</script>
