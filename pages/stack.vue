<script setup lang="ts">
import { useStackStore } from "@/store/useStackStore";
const stackStore = useStackStore();
</script>

<template>
  <div class="stack_container">
    <h1>Stack</h1>
    <div class="stack__block">
      <ul v-for="item in stackStore.items" :key="item.img" class="stack__list">
        <li class="stack__item">
          <Icon :name="item?.img" size="28" />
          <p>{{ item?.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/_vars.scss" as vars;

.stack_container {
  padding-top: 5rem;
  padding-bottom: 5rem;

  .stack__block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    .stack__list {
      .stack__item {
        @include vars.borders;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0.5rem;
        gap: 1vh;
        padding: 1vh;
        min-width: 100px;
        width: 100%;
      }
    }
  }
}
</style>
