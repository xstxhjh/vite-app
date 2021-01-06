<template>
  <custom-square :l="state.customSize" :c="state.customColor"></custom-square>

  <styleVars />
</template>

<script setup>
import { reactive, toRefs } from "vue";
import styleVars from "./components/RFC/style-vars/index.vue";

const state = reactive({
  customSize: 100,
  customColor: "red",
});

setTimeout(() => {
  state.customSize = 150;
  state.customColor = "blue";
}, 1000);
</script>
