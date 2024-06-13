<script setup lang="ts">
import Poster from './components/Poster/Poster.vue'
import type { FilmCardModel } from './models/FilmCard.model'

const { poster, name, type, year, id } = defineProps<FilmCardModel>()
</script>

<template>
  <div class="filmCard">
    <Poster :posterSrc="poster" />
    <div class="filmCard__description">
      <p>Name: {{ name }}</p>
      <p>Year: {{ year }}</p>
      <p>imdbID: {{ id }}</p>
      <p>Type: {{ type }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.filmCard {
  //flex: 0 0 auto;
  width: fit-content;
  max-width: $layout-card-width;
  &__description {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px auto 0 auto;
    width: fit-content;
    p {
      color: $base-font-color;
      font-size: 14px;
    }
  }
}
</style>
