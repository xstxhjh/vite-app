<template>
  <custom-square :l="state.customSize" :c="state.customColor"></custom-square>

  <styleVars />

  <Drag :data="arr" />

  <div style="height: 1000px;"></div>
</template>

<script setup>
import { reactive, toRefs, ref } from "vue";
import styleVars from "./components/RFC/style-vars.vue";
import Drag from "./components/Drag/index.vue";

const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const state = reactive({
  customSize: 100,
  customColor: "red",
});

setTimeout(() => {
  state.customSize = 150;
  state.customColor = "blue";
}, 1000);
</script>
