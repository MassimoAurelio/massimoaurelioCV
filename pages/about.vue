<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<template>
  
  <Container>
    <div class="about_container">
      <h1>About</h1>
      <p>Just a quick glimpse.</p>
    </div>
    <div>
      <swiper :slides-per-view="3" :space-between="10">
        <swiper-slide> <NuxtImg sizes="100" src="/myphoto.jpg" /></swiper-slide> //вынести все в стор
        <swiper-slide> <NuxtImg sizes="100" src="/myphoto.jpg" /></swiper-slide>
        <swiper-slide> <NuxtImg sizes="100" src="/myphoto.jpg" /></swiper-slide>
        <swiper-slide> <NuxtImg sizes="100" src="/myphoto.jpg" /></swiper-slide>
        <swiper-slide> <NuxtImg sizes="100" src="/myphoto.jpg" /></swiper-slide>
        <swiper-slide> <NuxtImg sizes="100" src="/myphoto.jpg" /></swiper-slide>
      </swiper>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.about_container {
  padding-top: 5rem;
}
</style>
