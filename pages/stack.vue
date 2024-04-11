<script setup lang="ts">
import { useStackStore } from "@/store/useStackStore";
const stackStore = useStackStore();
</script>

<template>
  <Container>
    <div class="stack_container">
      <h1>Stack</h1>
      <div class="stack__block">
        <ul
          v-for="item in stackStore.items"
          :key="item.img"
          class="stack__list"
        >
          <li class="stack__item">
            <Icon :name="item?.img" size="28"></Icon>
            <p>{{ item?.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </Container>
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
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: vars.$customGray;
        cursor: pointer;
        border-radius: 0.5rem;
        gap: 1vh;
        padding: 1vh;
        min-width: 100px;
        width: 100%;
      }
      .dark-mode .stack__item {
    background-color: vars.$justWhite;
  }
    }
  }
  
}
</style>
