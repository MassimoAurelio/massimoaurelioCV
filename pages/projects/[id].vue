<script setup lang="ts"></script>

<template>
  <div class="project_container">
    <div class="project_header">
      <h1>{{ $route.params.id }}</h1>
      <p>ID</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project_container {
  display: flex;
  flex-direction: column;
  gap: 5vh;

  .project_header {
    display: flex;
    flex-direction: column;
    gap: 5vh;
  }
}
</style>
