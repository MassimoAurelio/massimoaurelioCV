<script setup lang="ts">
import { useWorkStore } from "@/store/useWorkStore";

const workStore = useWorkStore();
</script>

<template>
  <section class="Work">
    <h1 class="Work__header">Work</h1>
    <div class="Work__description">
      <p>
        I specialize in Python, data analytics, React, web development, UI/UX,
        and product design. But I am always learning new things. Here are some
        of the places I have worked.
      </p>
      <ul class="Work__list">
        <li
          v-for="item in workStore?.items"
          :key="item?.img"
          class="Work__item"
        >
          <a class="Work__link" href="">
            <div class="Work__container">
              <div class="Work__img">
                <img :src="item?.img" alt="" />
              </div>
              <div>
                <p>{{ item?.position }}</p>
                <p>{{ item?.company }}</p>
              </div>
            </div>

            <time class="Work__time">{{ item?.time }}</time>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.Work {
  display: flex;
  gap: 2.25rem;
  padding-bottom: 5vh;

  .Work__description {
    min-width: 150px;
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
  }

  .Work__list {
    display: flex;
    flex-direction: column;
    gap: 2vh;

    .Work__item {
      display: flex;
      width: 100%;
      max-width: 488px;
      max-height: 65px;
      flex-direction: column;

      .Work__link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .Work__container {
          display: flex;
          align-items: center;
          gap: 2vh;
          .Work__img {
            width: 48px;
            height: 48px;
            overflow: hidden;
          }
          .Work__img img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}

@media (max-width: 688px) {
  .Work {
    display: flex;
    flex-direction: column;
  }
}
</style>
