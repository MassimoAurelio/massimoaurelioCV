<script setup lang="ts">
import { useProjectStore } from "@/store/useProjectStore";

const projectStore = useProjectStore();
</script>

<template>
  <div class="project">
    <div class="project__header">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on.</p>
    </div>
    <ul class="project__list">
      <li
        class="project__item"
        v-for="item in projectStore?.items"
        :key="item?.href"
      >
        <a :href="item?.href">
          <div class="project__img">
            <NuxtImg
              :src="item?.src"
              loading="lazy"
              class="project__img-image"
            />
          </div>
        </a>
        <div>
          <div class="project__info">
            <a :href="item?.href" class="project__name">{{ item?.name }}</a>
            <time datetime="">{{ item?.time }}</time>
          </div>
          <p>
            {{ item?.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_vars.scss" as vars;
.project {
  display: flex;
  flex-direction: column;
  gap: 5vh;

  .project__header {
  }

  .project__list {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    .project__item {
      display: flex;
      gap: 2vh;
      overflow: hidden;

      .project__img img {
        max-width: 250px;
        max-height: 130px;
        object-fit: cover;
      }

      .project__info {
        display: flex;
        gap: 2vh;
        .project__name {
          color: vars.$justWhite;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
