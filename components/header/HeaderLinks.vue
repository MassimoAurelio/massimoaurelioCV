<script setup lang="ts">
import { useHeaderNav } from "@/store/useHeaderNav";

const headerNavStore = useHeaderNav();
</script>

<template>
  <ul class="navigate" v-for="item in headerNavStore.items" :key="item.label">
    <li class="navigate__item">
      <a class="navigate__link" :href="item.href"> {{ item.label }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.navigate {
  display: flex;
  flex-shrink: 0; 
}

.navigate__item {
  flex-shrink: 0; 
}
</style>
