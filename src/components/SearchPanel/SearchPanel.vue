<script setup lang="ts">
import { Input } from '@/ui/Input'
import { ref } from 'vue'

const searchValue = ref<string>('')
</script>

<template>
  <Input placeholder="Search..." v-model="searchValue" class="search-input" />
</template>

<style lang="scss" scoped>
.search-input {
  width: 55%;
}
</style>
