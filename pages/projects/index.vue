<script setup lang="ts">
import { useProjectStore } from "@/store/useProjectStore";

const projectStore = useProjectStore();

useSeoMeta({
  title: "Projects | Massimo Aurelio",
});
</script>

<template>
  <div class="project">
    <div class="project__header">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on.</p>
    </div>
    <ul class="project__list">
      <li class="project__item" v-for="item in projectStore?.items" :key="item?.href">
        <a :href="item?.href" class="project__img" target="_blank">
          <div>
            <NuxtImg :src="item?.src" class="project__img-image" />
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

  .project__list {
    display: flex;
    flex-direction: column;
    gap: 3vh;

    .project__item {
      display: flex;
      gap: 2vh;
      overflow: hidden;

      .project__img img {
        max-width: 190px;
        max-height: 200px;
        border-radius: 15px;
        max-height: 130px;
        object-fit: cover;
      }

      .project__info {
        display: flex;
        gap: 2vh;

        .project__name {
          font-weight: bold;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          transition: color 0.3s ease;
        }
      }
    }
  }
}

@media (max-width: 688px) {
  .project__item {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
}
</style>
