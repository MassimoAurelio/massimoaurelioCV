<script setup lang="ts">
import { useStackStore, useAutomationStore, useBackStackStore } from "@/store/useStackStore";
const stackStore = useStackStore();
const automationStore = useAutomationStore();
const backStore = useBackStackStore()

useSeoMeta({
  title: "Stack | Massimo Aurelio",
});
</script>

<template>
  <div class="stack_container">
    <h1>Stack</h1>
    <p>
      STACK Currently, I hold the position of QA Automation, but I am actively exploring web development with the
      intention of transitioning from QA to full-stack development. I am considering opportunities in both frontend and
      backend, including technologies like Vue, Nuxt, Pinia, Jest, and SCSS for the frontend, as well as NestJS,
      PostgreSQL, Prisma ORM, and WebSockets for the backend.
    </p>
    <h1>Automation</h1>
    <div class="stack__block">
      <ul v-for="item in automationStore.items" :key="item.img" class="stack__list">
        <li class="stack__item">
          <Icon :name="item?.img" size="28" />
          <p>{{ item?.name }}</p>
        </li>
      </ul>
    </div>
    <h1>Frotend</h1>
    <div class="stack__block">
      <ul v-for="item in stackStore.items" :key="item.img" class="stack__list">
        <li class="stack__item">
          <Icon :name="item?.img" size="28" />
          <p>{{ item?.name }}</p>
        </li>
      </ul>
    </div>
    <h1>BackEnd</h1>
    <div class="stack__block">
      <ul v-for="item in backStore.items" :key="item.img" class="stack__list">
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
  display: flex;
  flex-direction: column;
  gap: 2vh;

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

        &:hover {
          @include vars.transition-ease;
          @include vars.bordersHover;
        }
      }
    }
  }
}
</style>
