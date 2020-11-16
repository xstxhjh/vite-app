<template>
  <input type="date" v-model="value" />

  <input type="datetime-local" v-model="value" />

  <input type="range" v-model="value" />

  <button @click="fn_inputValueChange">{{ value }} change</button>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'

export default {
  setup() {
    const state = reactive({
      value: '2019-02-03',
    })

    const fn_inputValueChange = () => {
      state.value = '2020-02-02'
    }

    watchEffect(() => console.log(`input value change: ${state.x}`))

    return { ...toRefs(state), fn_inputValueChange }
  },
}
</script>
