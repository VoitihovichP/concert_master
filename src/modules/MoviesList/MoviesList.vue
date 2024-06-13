<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getMovies } from './api/getMovies'
import { computed, inject, onBeforeUnmount, watch } from 'vue'
import { FilmCard } from 'Components/FilmCard'
import type { StoreModel } from 'Models/Store.model'
import type { GetMoviesSearchItemModel } from 'Modules/MoviesList/models/GetMovies.model'
import { debounce } from 'Helpers/debounce'
import { Loader } from 'Ui/Loader'
import NoResultsPlaceholder from './components/NoResultsPlaceholder/NoResultsPlaceholder.vue'

const store = inject<StoreModel>('store', { searchValue: '' })

const queryParams = computed(() => ({
  s: store.searchValue,
  page: '1'
}))

const { data, isFetching, refetch } = useQuery({
  queryKey: ['moviesList'],
  queryFn: () => getMovies(queryParams.value)
})

const { debounced: debouncedRefetch, cancel } = debounce(() => {
  refetch()
}, 400)

const movies = computed<GetMoviesSearchItemModel[]>(() => {
  if (!data.value) return []

  if ('Search' in data.value) {
    return data.value.Search || []
  } else if ('Error' in data.value) {
    return []
  } else {
    return [data.value as GetMoviesSearchItemModel]
  }
})

watch(queryParams, () => {
  debouncedRefetch()
})

onBeforeUnmount(() => {
  cancel()
})
</script>

<template>
  <div class="moviesList">
    <Loader v-if="isFetching" />
    <div v-if="!isFetching && movies.length > 0" class="moviesList__wrapper">
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
    <NoResultsPlaceholder v-if="!isFetching && movies.length === 0" />
  </div>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.moviesList {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($layout-card-width, 1fr));
    gap: 20px;
    margin-top: 32px;
  }
}
</style>
