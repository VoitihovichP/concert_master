<script setup lang="ts">
import { computed, defineProps, inject, ref, type Ref } from 'vue'
import type { PaginationModel } from './models/Pagination.model'
import cn from 'classnames'

const { totalObjects, itemsPerPage } = defineProps<PaginationModel>()

const currentPage = inject<Ref<number>>('currentPage', ref(1))

const totalPages = computed(() => {
  return Math.ceil(totalObjects / itemsPerPage)
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1
  }
}
</script>

<template>
  <div class="pagination">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      :class="cn('pagination__button', 'pagination__button_arrows')"
    >
      &lt;
    </button>
    <span v-for="page in totalPages" :key="page" class="page-number">
      <button
        @click="goToPage(page)"
        :class="cn('pagination__button', { pagination__button_active: currentPage === page })"
      >
        {{ page }}
      </button>
    </span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      :class="cn('pagination__button', 'pagination__button_arrows')"
    >
      &gt;
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.pagination {
  width: fit-content;
  margin: 26px auto 0 auto;
  &__button {
    padding: 3px;
    margin-left: 8px;
    border-radius: 3px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s all;

    @media (hover: hover) {
      &:hover {
        color: $light-font-color;
        background: $active-pagination-btn;
      }
    }

    @media (hover: none) {
      &:active {
        color: $light-font-color;
        background: $active-pagination-btn;
      }
    }

    &_arrows {
      font-weight: 600;
      font-size: 16px;
    }
    &_active {
      background: $active-pagination-btn;
    }
  }
}
</style>
