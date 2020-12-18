<template>
  <div class="text">hello</div>
</template>

<script setup>
import { reactive, toRefs, useCssVars } from 'vue'

useCssVars((_ctx) => ({
  color: _ctx.color,
}))

export const state = reactive({
  font: {
    size: '2em',
  },
})

</script>

<style vars="{ color }">
:root {
  --fontSize: 22px;
}

.text {
  color: var(--color);
  font-size: var(--fontSize);
}

/* .text {
  color: v-bind(color);
} */
</style>
