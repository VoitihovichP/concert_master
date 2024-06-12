<script setup lang="ts">
import { useAttrs, defineModel } from 'vue'

const attrs = useAttrs()
const model = defineModel()
</script>

<template>
  <input v-bind="attrs" v-model="model" class="input" />
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.input {
  padding: 0 0 0 10px;
  height: 30px;
  transition: 0.3s all;
  border-color: $base-input-border-color;
  &:focus {
    border-color: $active-input-border-color;
    outline: none;
  }
}
</style>
