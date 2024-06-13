<script setup lang="ts">
import { Input } from '@/ui/Input'
import { inject } from 'vue'
import type { StoreModel } from 'Models/Store.model'

const store = inject<StoreModel>('store', { searchValue: '' })
</script>

<template>
  <Input placeholder="Search..." v-model="store.searchValue" class="search-input" />
</template>

<style lang="scss" scoped>
.search-input {
  width: 55%;
}
</style>
