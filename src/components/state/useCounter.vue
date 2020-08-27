<template>
  <div>count: {{count}}</div>
        <button @click="() => inc()">Increment</button>
        <button @click="() => dec()">Decrement</button>
        <button @click="() => inc(5)">Increment (+5)</button>
        <button @click="() => dec(5)">Decrement (-5)</button>
        <button @click="() => set(100)">Set (100)</button>
        <button @click="() => reset()">Reset</button>
</template>

<script>
import { reactive } from 'vue'
import { useCounter } from '@vueuse/core'

export default {
  setup() {
    const { count, inc, dec, set, reset } = useCounter()

    return {
      count,
      inc,
      dec,
      set,
      reset,
    }
  }
}
</script>
