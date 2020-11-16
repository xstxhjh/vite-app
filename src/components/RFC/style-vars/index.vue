<template>
  <div class="text">hello</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      color: 'red',
    })

    return { ...toRefs(state) }
  },
}
</script>

<style vars="{ color }">
.text {
  color: var(--color);
}
</style>