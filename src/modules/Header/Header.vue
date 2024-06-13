<script setup lang="ts">
import { SearchPanel } from 'Components/SearchPanel'
import { AppLogo } from 'Components/AppLogo'
import { UserProfile } from 'Components/UserProfile'
</script>

<template>
  <header class="header">
    <AppLogo text="Movie Catalog" />
    <SearchPanel />
    <UserProfile username="Pavel Voytekhovich" />
  </header>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.header {
  position: sticky;
  top: 0;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: $base-header-color;
}
</style>
