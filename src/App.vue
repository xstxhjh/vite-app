<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <createGlobalState />
  <useAsyncState />
  <useCounter />
  <useIdle />
  <useStorage />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import createGlobalState from './components/createGlobalState.vue'
import useAsyncState from './components/useAsyncState.vue'
import useCounter from './components/useCounter.vue'
import useIdle from './components/useIdle.vue'
import useStorage from './components/useStorage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    createGlobalState,
    useAsyncState,
    useCounter,
    useIdle,
    useStorage
  }
}
</script>
