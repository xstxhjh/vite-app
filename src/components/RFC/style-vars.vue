<template>
  <div class="text main-color">hello</div>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('#0000ee')
</script>

<style scoped>
.text {
  color: v-bind(color);
}
</style>
