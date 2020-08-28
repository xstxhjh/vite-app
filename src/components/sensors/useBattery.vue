<template>
  <pre>
    {{
      JSON.stringify(
        state,
        null,
        2
      )
    }}
  </pre>
</template>

<script>
import { reactive } from 'vue'
import { useBattery } from '@vueuse/core'
const { charging, chargingTime, dischargingTime, level } = useBattery()
/*
charging	设备是否充电中
chargingTime 充电时间
dischargingTime 耗电时间
level 电量水平
*/
export default {
  setup() {
    const state = reactive({
      charging,
      chargingTime,
      dischargingTime,
      level,
    })

    return {
      state,
    }
  },
}
</script>
