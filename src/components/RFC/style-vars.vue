<template>
  <div class="text">hello</div>
  <!-- <div class="container">
    <div v-for="item in arr" :key="item">{{item}}</div>
  </div> -->
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";

const color = ref("#0000ee");

const { ctx } = getCurrentInstance();

console.log(ctx._.appContext.config.globalProperties.mainColor);
console.log(ctx);
</script>

<style scoped>
.text {
  color: v-bind(color);
}

.container {
  background-color: antiquewhite;
  margin: auto;
  display: grid;
  height: 100px;
  /* 定义每一列宽度,重复3次,1片段,(3列) */
  /* grid-template-columns: repeat(3, 1fr); */

  /* 定义每一行的行高,100px,1片段,(2行) */
  /* grid-template-rows: 100px 1fr; */

  /* 每列宽度100px,然后自动填充,直到容器不能放置更多的列 */
  /* grid-template-columns: repeat(auto-fill, 100px); */

  /* minmax函数产生一个长度范围,表示长度就在这个范围之中,也可以用auto */
  /* grid-template-columns: 1fr 1fr minmax(100px, 1fr); */

  /* 网格线的名称 */
  /* grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4]; */
  /* grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4]; */

  /* 简写:行间距,列间距 */
  /* gap: 20px 20px; */

  /* 行间距,列间距 */
  row-gap: 20px;
  column-gap: 20px;

  grid-template-columns: repeat(3, 100px);
  /* grid-template-rows: repeat(3, 100px); */

  /* 用于定义区域 */
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i";

  /* 先列后行 */
  /* grid-auto-flow: column; */
  /* 先行后列,并且尽可能紧密填满 */
  grid-auto-flow: row dense;

  /* justify-items属性设置单元格内容的水平位置 */
  /* align-items属性设置单元格内容的垂直位置 */
  /* start：对齐单元格的起始边缘。 */
  /* end：对齐单元格的结束边缘。 */
  /* center：单元格内部居中。 */
  /* stretch：拉伸，占满单元格的整个宽度（默认值） */

  /* justify-content属性是整个内容区域在容器里面的水平位置 */
  /* align-content属性是整个内容区域的垂直位置 */
  /* start | end | center | stretch | space-around | space-between | space-evenly */

  /* grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高 */
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
  user-select: none;

  /* 指定项目的四个边框，分别定位在哪根网格线 */
  /* grid-column-start属性：左边框所在的垂直网格线
    grid-column-end属性：右边框所在的垂直网格线
    grid-row-start属性：上边框所在的水平网格线
    grid-row-end属性：下边框所在的水平网格线 */

  /* grid-column-start: 2;
  grid-column-end: 4; */

  /* 指定网格线名 */
  /* grid-column-start: header-start;
  grid-column-end: header-end; */

  /* span跨越几个网格线 */
  /* grid-column-start: span 2; */

  /* grid-column: 1 / span 2;
  grid-row: 1 / span 2; */

  /* grid-area属性指定项目放在哪一个区域。 */
  /* grid-area: b; */

  /* justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。
  align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。 */

  /* place-self属性是align-self属性和justify-self属性的合并简写形式。 */
}
</style>
