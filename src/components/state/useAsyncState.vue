<template>
  <div>{{state}}</div>
  <div>{{ready}}</div>
</template>

<script>
import { reactive } from 'vue'
import { useAsyncState } from '@vueuse/core'
import axios from 'axios'

export default {
  setup() {
    const { state, ready } = useAsyncState(
      axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then((t) => t.data),
      {
        id: null,
      }
    )

    return { state, ready }
  },
}
</script>
