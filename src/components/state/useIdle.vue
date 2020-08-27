<template>
  <p>5s {{idle}}</p>
  <p>Inactive: {{idledFor}}s</p>
</template>

<script>
import { reactive, computed } from 'vue'
import { useIdle, useNow } from '@vueuse/core'

export default {
  setup() {
    const { idle, lastActive } = useIdle(5 * 1000) // 5 秒
    const now = useNow()

    const idledFor = computed(() => {
      return Math.floor((now.value - lastActive.value) / 1000)
    })

    return { idle, idledFor }
  },
}
</script>
