<script setup lang="ts">
import { defineProps } from 'vue'
import type { AppLogoModel } from './models/AppLogo.model'

const { text } = defineProps<AppLogoModel>()
</script>

<template>
  <RouterLink to="/" class="appLogo">{{ text }}</RouterLink>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.appLogo {
  color: $base-font-color;
  text-decoration: none;
  font-weight: 800;
  font-size: 28px;
}
</style>
