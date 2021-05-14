<template lang="pug">
customSquare(:l="state.customSize" :c="state.customColor")

styleVars

Drag(:data="arr")

SvgIcon(name="2021")
</template>

<script setup>
import { reactive, toRefs, ref } from "vue";
import styleVars from "src/components/RFC/style-vars.vue";
import Drag from "src/components/Drag/index.vue";

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
