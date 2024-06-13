<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
@use 'Styles/vars' as *;

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88px;
  height: 88px;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
  &::before,
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 10px solid $layout-loader-first;
    animation: prixClipFix 2s linear infinite;
  }
  &::after {
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: $layout-loader-second;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  75%,
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
}
</style>
