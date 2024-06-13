<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getMovies } from './api/getMovies'
import { computed, inject, onBeforeUnmount, provide, ref, watch } from 'vue'
import type { StoreModel } from 'Models/Store.model'
import type { GetMoviesSearchItemModel } from 'Modules/MoviesList/models/GetMovies.model'
import { debounce } from 'Helpers/debounce'
import { Loader } from 'Ui/Loader'
import NoResultsPlaceholder from './components/NoResultsPlaceholder/NoResultsPlaceholder.vue'
import FindMoviesList from './components/FindMoviesList/FindMoviesList.vue'

const ITEMS_PER_PAGE: number = 10

const store = inject<StoreModel>('store', { searchValue: '' })
const currentPage = ref<number>(1)
const searchValue = computed(() => store.searchValue || '')

const queryParams = computed(() => ({
  s: store.searchValue.trim(),
  page: currentPage.value.toString()
}))

const { data, isFetching, refetch } = useQuery({
  queryKey: ['moviesList'],
  queryFn: () => getMovies(queryParams.value)
})

const { debounced: debouncedRefetch, cancel } = debounce(() => {
  if (currentPage.value !== 1) {
    currentPage.value = 1
  }

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

watch(searchValue, () => {
  debouncedRefetch()
})

watch(currentPage, () => {
  refetch()
})

onBeforeUnmount(() => {
  cancel()
})

provide('currentPage', currentPage)
</script>

<template>
  <div class="moviesList">
    <Loader v-if="isFetching" />
    <FindMoviesList
      v-if="!isFetching && movies.length > 0 && data"
      :userRequest="searchValue"
      :movies="movies"
      :totalObjects="'totalResults' in data ? Number(data.totalResults) : undefined"
      :itemsPerPage="ITEMS_PER_PAGE"
    />
    <NoResultsPlaceholder v-if="!isFetching && movies.length === 0" />
  </div>
</template>
