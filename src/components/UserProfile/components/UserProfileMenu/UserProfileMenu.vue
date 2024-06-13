<script setup lang="ts">
import { defineProps } from 'vue'

import type { UserProfileModel } from '../../models/UserProfileModel'
import { IconArrow } from 'Ui/icons/IconArrow'

const { username } = defineProps<UserProfileModel>()
</script>

<template>
  <div class="userProfileMenu">
    <p class="userProfileMenu__name">{{ username }}</p>
    <IconArrow :width="18" :height="18" />
  </div>
</template>

<style lang="scss" scoped>
.userProfileMenu {
  display: flex;
  align-items: center;
  gap: 6px;
  &__name {
    font-weight: 600;
    font-size: 12px;
    @media (max-width: 767px) {
      font-weight: 500;
    }
  }
}
</style>
