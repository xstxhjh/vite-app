<template lang="pug">
div pinia - {{ some.str }}
</template>

<script setup>
import { useSomeStore } from '@/store/some'

const some = useSomeStore()
</script>

<style scoped lang="scss">

</style>
