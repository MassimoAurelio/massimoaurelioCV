<script setup lang="ts">
import ToggleTheme from "./ToggleTheme.vue";

const windowWidth = ref<number | null>(null);

const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    windowWidth.value = width;
    sessionStorage.setItem("windowWidth", width.toString());
  }
};

const isMobile = computed(
  () => windowWidth.value !== null && windowWidth.value <= 600
);

onBeforeMount(() => {
  const storedWidth = sessionStorage.getItem("windowWidth");
  if (storedWidth) {
    windowWidth.value = parseInt(storedWidth, 10);
  } else {
    updateWindowWidth();
  }
});

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("resize", updateWindowWidth);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
});
</script>

<template>
  <header class="header">
    <Container>
      <nav class="header__navigate">
        <div class="header__logo">
          <a href="/" class="header__icon">
            <NuxtImg src="/headerIcon.png" sizes="25" />
          </a>
        </div>

        <div class="header__links">
          <HeaderLinks />
        </div>
        <div class="mobile-header__links" v-show="isMobile" v-cloak>
          <MobileHeaderLinks />
        </div>

        <div class="header__toggle-theme">
          <ToggleTheme />
        </div>
      </nav>
    </Container>
  </header>
</template>

<style scoped lang="scss">
[v-cloak] {
  display: none;
}
.header {
  width: 100%;

  .header__navigate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    min-width: 320px;

    .header__logo {
      display: flex;
      align-items: center;
      width: 25px;
      height: 25px;

      .header__icon {
        display: flex;
        align-items: center;
        height: 25px;
        width: 25px;
      }
    }

    .header__links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-shrink: 0;
    }

    .mobile-header__links {
      margin-left: auto;
      flex-shrink: 0;
    }
  }
}

@media (max-width: 600px) {
  .header__links {
    display: none !important;
  }
}
</style>
