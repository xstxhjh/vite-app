<template>
  <div id="demo">
    <input ref="input" type="text" placeholder="Start typing to focus" />
    <input type="text" placeholder="Start typing has no effect here" />
  </div>
</template>

<script>
import { ref } from 'vue'

import { onStartTyping } from '@vueuse/core'

export default {
  setup() {
    const input = ref(null)

    // 当用户鼠标在页面上没有聚焦的时候，键盘键入任意即可聚焦
    onStartTyping(() => {
      console.log(input)
      if (!input.value.active) input.value.focus()
    })

    return {
      input,
    }
  },
}
</script>
