<template>
  <div class="adaptive-container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.adaptive-container {
  max-width: 1200px;
  padding-left: 5rem;
  padding-right: 5rem;
}

@media screen and (max-width: 765px) {
  .adaptive-container {
    max-width: 500px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media screen and (max-width: 499px) {
  .adaptive-container {
    width: 100%;
  }
}
</style>
