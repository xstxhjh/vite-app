<template>
  <div class="container">
    <div
      v-for="(item, index) in state.data"
      :key="index"
      v-display:[option]="index"
      @display="displayFn"
      v-bind="$attrs"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CustomName',
    inheritAttrs: false,
    customOptions: {},
  }
</script>

<script setup>
import { ref, unref, reactive } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const state = reactive({
  data: props.data
});

const option = {
  wait: 600,
  maxWait: 2000
}

const displayFn = (value)=>{
  console.log(value)
}

defineExpose({
  option
})
</script>

<style scoped>
.container {
  background-color: antiquewhite;
  margin: auto;
  display: grid;
  row-gap: 20px;
  column-gap: 20px;

  grid-template-columns: repeat(3, 100px);

  /* 用于定义区域 */
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i";
  grid-auto-flow: row dense;
  grid-auto-rows: auto;

  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
}

.container > div {
  width: 30px;
  height: 30px;
  background-color: cadetblue;
  cursor: move;
  cursor: grab;
  /* cursor: grabbing; */
  /* user-select: none; */
}
</style>
