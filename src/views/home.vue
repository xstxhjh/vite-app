<template lang="pug">
div vuex - {{ store.state.str }}

button(type="primary" @click="state.count++")
  span count is: {{ state.count }}
</template>

<script setup>
import { reactive } from 'vue'

import { useStore } from 'vuex'
const store = useStore()

const state = reactive({ count: 0 })
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
