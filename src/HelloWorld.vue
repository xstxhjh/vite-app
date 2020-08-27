<template>
  <div>{{state}}</div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      text: 'HelloWorld',
    })

    return {
      state,
    }
  },
}
</script>
