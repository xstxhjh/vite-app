<template>
  <div class="main-template"></div>
  <div class="main-tool">
    <a-slider id="size" v-model:value="size" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      size: 50,
    })

    return { ...toRefs(state) }
  },
}
</script>

<style>
.main-template {
  margin: 1rem auto;
}
.main-tool {
  width: 40vw;
}
</style>
