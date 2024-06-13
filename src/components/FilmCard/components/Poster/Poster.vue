<script setup lang="ts">
import { defineProps } from 'vue'

import type { PosterModel } from '../../models/Poster.model'

const { posterSrc } = defineProps<PosterModel>()
</script>

<template>
  <img
    :src="posterSrc"
    onerror="this.src='public/empty-image.png'"
    alt="Film Poster"
    loading="lazy"
    class="poster"
  />
</template>

<style lang="scss" scoped>
.poster {
  width: 150px;
  height: 200px;
}
</style>
