<script setup lang="ts">
import { SearchPanel } from 'Components/SearchPanel'
import { AppLogo } from 'Components/AppLogo'
import { UserProfile } from 'Components/UserProfile'
import cn from 'classnames'
</script>

<template>
  <header class="header">
    <AppLogo text="Movie Catalog" />
    <SearchPanel />
    <UserProfile username="Pavel Voytekhovich" />
  </header>
  <header :class="cn('header', 'header_mobile')">
    <AppLogo text="Movie Catalog" />
    <div class="mobileWrapper">
      <SearchPanel />
      <UserProfile username="Pavel Voytekhovich" />
    </div>
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
  height: $layout-header-height;
  background-color: $base-header-color;
  @media (max-width: 767px) {
    padding: 10px 5px;
  }
  @media (max-width: 575px) {
    display: none;
  }

  &_mobile {
    display: none;
    @media (max-width: 575px) {
      display: flex;
      align-items: start;
      height: $layout-header-m-height;
    }

    .mobileWrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
}
</style>
