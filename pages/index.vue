<script setup lang="ts">
useSeoMeta({
  title: "Massimo Aurelio",
});
</script>

<template>
  <div class="about__container">
    <h1>{{ $route.params.id }}</h1>
    <div class="about__avatar">
      <NuxtImg class="about__avatar-img" src="/myphoto.jpg" />
    </div>
    <div class="about__description">
      <h1>Massimo Aurelio</h1>
      <p class="p_description">
        Hello, I'm Maxim, currently residing in Bangkok, Thailand. My professional focus is on automation testing, where
        I utilize Java, Selenium, and Playwright. In my leisure time, I concentrate on front-end development, with the
        aim of transitioning from automation to full-stack development.
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
    width: 150px;
    height: 150px;
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
