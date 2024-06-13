<script setup lang="ts">
import { defineProps } from 'vue'

const { userRequest, resultsCount } = defineProps<{ userRequest: string; resultsCount: number }>()
</script>

<template>
  <div class="searchResult">
    <p>You searched for: {{ userRequest }}, {{ resultsCount }} results found</p>
  </div>
</template>

<style lang="scss" scoped>
.searchResult {
  margin-bottom: 36px;
  p {
    font-weight: 600;
    font-size: 32px;
    @media (max-width: 575px) {
      font-size: 24px;
    }
  }
}
</style>
