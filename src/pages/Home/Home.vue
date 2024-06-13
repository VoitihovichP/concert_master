<script setup lang="ts">
import { MoviesList } from 'Modules/MoviesList'
</script>

<template>
  <main class="home">
    <div class="container">
      <MoviesList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.home {
  padding: 24px 0;
  min-height: calc(100dvh - $layout-header-height);
}
</style>
