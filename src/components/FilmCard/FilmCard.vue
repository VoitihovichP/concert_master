<script setup lang="ts">
import Poster from './components/Poster/Poster.vue'
</script>

<template>
  <div class="filmCard">
    <Poster
      posterSrc="https://m.media-amazon.com/images/M/MV5BZmVkNDc3YjQtZDMzOS00MTNjLTljNzUtZDhjYWQxMmVlNjE5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
    />
    <div class="filmCard__description">
      <p>Name: asdasd</p>
      <p>Year: 2001</p>
      <p>ID: qweq</p>
      <p>Type: Horror</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.filmCard {
  width: fit-content;
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
