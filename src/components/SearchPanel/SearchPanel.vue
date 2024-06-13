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
  @media (max-width: 1199px) {
    width: 50%;
  }
  @media (max-width: 991px) {
    width: 45%;
  }

  @media (max-width: 767px) {
    width: 40%;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
}
</style>
