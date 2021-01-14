<template>
  <div class="container">
    <div
      v-for="item in data"
      :key="item.key"
      :class="{ 'dragstart-activated': state.dragstartKey == item.key }"
      @dragstart="dragstart(item)"
      @dragenter="dragenter(item)"
      @dragend="dragend(item)"
      draggable="true"
    >
      {{ item }} {{ state.dragstartItem }}
    </div>
  </div>
</template>

<script setup>
import { ref, unref, reactive, defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

let data = unref(props.data);

const state = reactive({ dragstartKey: undefined });

const dragstart = (index) => {
  console.log(index);
  state.dragstartKey = index;
};

const dragenter = (index) => {
  console.log(index, "dragenter");
};

const dragend = (index) => {
  console.log(index, "dragend");
  state.dragstartKey = undefined;
};
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

.dragstart-activated {
  opacity: 0.6;
}
</style>
