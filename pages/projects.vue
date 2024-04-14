<script setup lang="ts"></script>

<template>
  <div class="project">
    <div class="project__header">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on.</p>
    </div>
    <ul class="project__list">
      <li class="project__item">
        <a href="">
          <div>
            <NuxtImg src="/101xp.jpg" sizes="150" />
          </div>
        </a>
        <div>
          <div>
            <a href="">Project Name</a>
            <time datetime="">2023</time>
          </div>
          <p>
            DescriptionDescriptionDescriptionDe scriptionDescriptionDescript
            ionDescriptionDescriptio nDescriptionDescriptionDe
            scriptionDescriptionDes criptionDescrip tionDescription
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.project {
  .project__header {
  }

  .project__list {
    .project__item {
      display: flex;
      gap: 2vh;
    }
  }
}
</style>
