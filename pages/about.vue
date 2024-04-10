<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Connect from "@/components/about/Connect.vue";
import Work from "@/components/about/Work.vue";
</script>

<template>
  <Container>
    <div class="about_container">
      <h1>About</h1>
      <p>Just a quick glimpse.</p>
    </div>
    <div class="about__items">
      <About />
      <Connect />
      <Work />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.about_container {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.about__items {
  display: flex;
  flex-direction: column;
  gap: 5vh;
}
</style>
