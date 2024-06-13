<script lang="ts" setup>
import { defineProps } from 'vue'

import type { GetMoviesSearchItemModel } from '../../models/GetMovies.model'
import { FilmCard } from 'Components/FilmCard'
import { Pagination } from 'Components/Pagination'
import SearchResult from '../SearchResult/SearchResult.vue'

const { movies, totalObjects, itemsPerPage, userRequest } = defineProps<{
  movies: GetMoviesSearchItemModel[]
  userRequest: string
  itemsPerPage: number
  totalObjects?: number
}>()
</script>

<template>
  <div class="findMoviesList">
    <SearchResult v-if="totalObjects" :resultsCount="totalObjects" :userRequest="userRequest" />
    <div class="findMoviesList__wrapper">
      <FilmCard
        v-for="movie in movies"
        :key="movie.imdbID"
        :id="movie.imdbID"
        :year="movie.Year"
        :name="movie.Title"
        :type="movie.Type"
        :poster="movie.Poster"
      />
    </div>
    <Pagination
      v-if="totalObjects && totalObjects > itemsPerPage"
      :itemsPerPage="itemsPerPage"
      :totalObjects="totalObjects"
    />
  </div>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.findMoviesList {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($layout-card-width, 1fr));
    gap: 20px;
  }
}
</style>
