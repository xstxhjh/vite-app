<template lang="pug">
div pinia - {{ some.str }}
</template>

<script setup>
import { useSomeStore } from '@/store/some'

const some = useSomeStore()
setTimeout(() => {
  some.changeStr(`${some.str}xxxx`)
}, 3000);
</script>

<style scoped lang="scss">

</style>
