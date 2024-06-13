<script setup lang="ts">
import { defineProps } from 'vue'

import UserProfileMenu from './components/UserProfileMenu/UserProfileMenu.vue'

import { IconUser } from 'Ui/icons/IconUser'

import type { UserProfileModel } from './models/UserProfileModel'
const { username } = defineProps<UserProfileModel>()
</script>

<template>
  <button class="userProfile">
    <IconUser :width="25" :height="25" />
    <UserProfileMenu :username="username" />
  </button>
</template>

<style lang="scss" scoped>
.userProfile {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 767px) {
    gap: 6px;
  }
}
</style>
