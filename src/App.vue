<template lang="pug">
custom-square(:l="state.customSize" :c="state.customColor")

styleVars

Drag(:data="arr" @click="dragClickFn" name="2021" ref="RefComp")

SvgIcon(name="2021" class="svg-icon")
</template>

<script setup>
import { reactive, toRefs, ref, getCurrentInstance, onMounted } from "vue";
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

const dragClickFn = (item) => {
  console.log(item);
};

const { ctx } = getCurrentInstance();
onMounted(()=>{
  // 子组件暴露的数据
  console.log(ctx.$refs.RefComp.option)
})
</script>

<style scoped lang="scss">
.svg-icon {
  width: 500px;
  background-color: aquamarine;
}
</style>