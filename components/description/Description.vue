<script setup lang="ts"></script>

<template>
    <div class="about__container">
      <div class="about__avatar">
        <NuxtImg class="about__avatar-img" src="/myphoto.jpg" />
      </div>
      <div class="about__description">
        <h1>Massimo Aurelio</h1>
        <p class="p_description">
          Hi there, I'm a software engineer who builds for the web with a
          design-oriented approach. In addition to coding, I also make YouTube
          videos, where I focus on tech, and productivity.
        </p>
      </div>
    </div>
</template>

<style scoped lang="scss">
.about__container {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .about__avatar {
    width: 100px;
    height: 100px;
    overflow: hidden;

    .about__avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .about__description {
    .p_description {
      width: 80%; 

      @media (max-width: 600px) {
        width: 100%; 
      }
    }
  }
}
</style>
