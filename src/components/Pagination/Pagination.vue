<script setup lang="ts">
import { computed, defineProps, inject, ref, type Ref } from 'vue'
import type { PaginationModel } from './models/Pagination.model'
import cn from 'classnames'

const { totalObjects, itemsPerPage } = defineProps<PaginationModel>()

const currentPage = inject<Ref<number>>('currentPage', ref(1))

const totalPages = computed(() => {
  return Math.ceil(totalObjects / itemsPerPage)
})

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

const pagesToShow = computed(() => {
  const pageCount = totalPages.value
  const currentPageNumber = currentPage.value
  const pages: (number | string)[] = []

  if (pageCount <= 8) {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1, 2)

    if (currentPageNumber > 4) {
      pages.push('first_empty')
    }

    if (currentPageNumber - 2 > 1) {
      pages.push(currentPageNumber - 2)
    }
    if (currentPageNumber - 1 > 1) {
      pages.push(currentPageNumber - 1)
    }

    if (currentPageNumber !== 1 && currentPageNumber !== pageCount) {
      pages.push(currentPageNumber)
    }

    if (currentPageNumber + 1 < pageCount) {
      pages.push(currentPageNumber + 1)
    }
    if (currentPageNumber + 2 < pageCount) {
      pages.push(currentPageNumber + 2)
    }

    if (currentPageNumber < pageCount - 3) {
      pages.push('second_empty')
    }

    pages.push(pageCount - 2, pageCount - 1, pageCount)
  }

  return [...new Set(pages)]
})

const goToPage = (page: number | string) => {
  if (typeof page === 'string') return

  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
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
    <span v-for="(page, index) in pagesToShow" :key="index" class="page-number">
      <template v-if="page === 'first_empty' || page === 'second_empty'">
        <span>...</span>
      </template>
      <template v-else>
        <button
          @click="goToPage(page)"
          :class="cn('pagination__button', { pagination__button_active: currentPage === page })"
        >
          {{ page }}
        </button>
      </template>
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

    @media (max-width: 575px) {
      padding: 1px;
      margin-left: 3px;
    }

    &:disabled {
      pointer-events: none;
    }

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
