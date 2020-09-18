<template>
  <createGlobalState />
  <useAsyncState />
  <useCounter />
  <useIdle />
  <useStorage />
  <useBattery />
  <useDeviceLight />
  <useDeviceMotion />
  <useOnStartTyping />

  <custom-square l="100" c="red"></custom-square>
</template>

<script>
import { reactive } from 'vue'

import createGlobalState from './components/state/createGlobalState.vue'
import useAsyncState from './components/state/useAsyncState.vue'
import useCounter from './components/state/useCounter.vue'
import useIdle from './components/state/useIdle.vue'
import useStorage from './components/state/useStorage.vue'
import useBattery from './components/sensors/useBattery.vue'
import useDeviceLight from './components/sensors/useDeviceLight.vue'
import useDeviceMotion from './components/sensors/useDeviceMotion.vue'
import useOnStartTyping from './components/sensors/useOnStartTyping.vue'

export default {
  name: 'App',
  components: {
    createGlobalState,
    useAsyncState,
    useCounter,
    useIdle,
    useStorage,
    useBattery,
    useDeviceLight,
    useDeviceMotion,
    useOnStartTyping
  },
  setup() {
    const state = reactive({
      customSize: 100,
      customColor: 'red',
    })
    return { state }
  },
}
</script>
