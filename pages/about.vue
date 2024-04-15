<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Connect from "@/components/about/Connect.vue";
import Work from "@/components/about/Work.vue";

useSeoMeta({
  title: "About | Massimo Aurelio",
});
</script>

<template>
  <div class="about_container">
    <div class="about_header">
      <h1>About</h1>
      <p>Just a quick glimpse.</p>
    </div>
    <div class="about__items">
      <About />
      <Connect />
      <Work />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about_container {
  display: flex;
  flex-direction: column;
  gap: 5vh;

  .about__items {
    display: flex;
    flex-direction: column;
    gap: 5vh;
  }
}
</style>
