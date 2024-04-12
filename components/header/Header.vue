<script setup lang="ts">
import ToggleTheme from "./ToggleTheme.vue";
import MobileHeaderLink from "./MobileHeaderLinks.vue";

const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : null);


const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

const isMobile = computed(() => windowWidth.value !== null && windowWidth.value <= 600);

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
  <header class="header" v-cloak>
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
[v-cloak] {
  display: none;
}
.header {
  width: 100%;

  .header__navigate {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    min-width: 320px;

    .header__logo {
      display: flex;
      align-items: center;
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
