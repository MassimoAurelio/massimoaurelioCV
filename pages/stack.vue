<script setup lang="ts">
import { useStackStore, useAutomationStore } from "@/store/useStackStore";
const stackStore = useStackStore();
const automationStore = useAutomationStore();

useSeoMeta({
  title: "Stack | Massimo Aurelio",
});
</script>

<template>
  <div class="stack_container">
    <h1>Stack</h1>
    <p>
      STACK Currently, I hold the position of QA AUTO, but I am actively delving
      into frontend development with the intention of transitioning from QA to
      web development. I am exclusively considering opportunities in the
      frontend domain and do not entertain offers in QA. In terms of test
      automation, I am proficient in Java, Selenium/Selenide, Maven, Gradle,
      TestNG/JUnit, and RestAssured. On the frontend side, my skill set
      encompasses JS/TS, Vue 3, Pinia, and SCSS.
    </p>
    <h1>Automation</h1>
    <div class="stack__block">
      <ul
        v-for="item in automationStore.items"
        :key="item.img"
        class="stack__list"
      >
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
      }
    }
  }
}
</style>
