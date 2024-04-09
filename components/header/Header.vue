<script setup lang="ts">
import ToggleTheme from "./ToggleTheme.vue";
import MobileHeaderLink from "./MobileHeaderLinks";

const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 0);

const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

const isMobile = computed(() => windowWidth.value <= 600);

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
          <a href="/">
            <Icon name="skill-icons:devto-dark" size="25" />
          </a>
        </div>

        <div class="header__links">
          <HeaderLinks />
        </div>

        <div class="mobile-header__links" v-if="isMobile">
          <MobileHeaderLink />
        </div>

        <div class="header__toggle-theme">
          <ToggleTheme />
        </div>
      </nav>
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;

  .header__navigate {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    .header__logo {
      display: flex;
      align-items: center;
    }

    .header__links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    .mobile-header__links {
      margin-left: auto;
    }
  }
}

@media (max-width: 600px) {
  .header__links {
    display: none !important;
  }
}
</style>
