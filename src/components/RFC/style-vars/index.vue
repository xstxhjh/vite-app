<template>
  <div class="text">hello</div>
</template>

<script>
import { reactive, toRefs, useCssVars } from 'vue'

export default {
  setup() {
    const state = reactive({
      font: {
        size: '2em',
      }
    })

    useCssVars((_ctx) => ({
      color: _ctx.color
    }))

    return { ...toRefs(state) }
  },
}
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
    color: var(--v-bind:color);

    shorthand + nested property access
    font-size: var(--font.size);
  }  */

</style>
