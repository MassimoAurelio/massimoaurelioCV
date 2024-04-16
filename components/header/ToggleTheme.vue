<script setup lang="ts">
const color = useColorMode();

const iconComputed = computed(() =>
  color.value === "dark" ? "ph:moon-fill" : "ph:sun-fill"
);

const colorMode = useColorMode();

const toggleDropdown = ref(false);

const setTheme = (theme: string) => {
  colorMode.preference = theme;
  toggleDropdown.value = false;
};
</script>

<template>
  <div class="dropdown">
    <div class="dropdown__box">
      <UiButton
        color="default"
        class="dropdown__button dropdown__button--second"
        @click="toggleDropdown = !toggleDropdown"
      >
        <Icon :name="iconComputed" size="25" />
      </UiButton>
      <ul class="dropdown__list" v-if="toggleDropdown">
        <li class="dropdown__item" @click="setTheme('light')">
          <span class="dropdown__check"
            ><Icon
              v-show="color.value === 'light'"
              name="charm:tick"
              size="20" /></span
          ><span class="dropdown__text">Light</span>
        </li>
        <li class="dropdown__item" @click="setTheme('dark')">
          <span class="dropdown__check"
            ><Icon
              v-show="color.value === 'dark'"
              name="charm:tick"
              size="20" /></span
          ><span class="dropdown__text">Dark</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_vars.scss" as vars;
.dropdown {
  .dropdown__box {
    position: relative;
    z-index: 1000;

    .dropdown__list {
      position: absolute;
      min-width: 140px;
      margin-top: 10px;
      background-color: vars.$justWhite;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -4px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      right: 0;
      padding: 10px;

      .dropdown__item {
        position: relative;
        display: flex;
        align-items: center;
        height: 36px;
        border-radius: 12px;
        gap: 5px;
        padding-right: 1rem;
        padding-left: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        cursor: pointer;

        &:hover {
          background-color: #cecece;
        }

        .dropdown__check {
          position: absolute;
          left: 0;
          padding-left: 0.5vh;
        }
      }
    }
  }
}

.dark-mode {
  .dropdown {
    .dropdown__box {
      .dropdown__list {
        background-color: vars.$justBlack;

        .dropdown__item {
          &:hover {
            background-color: #2a2a2a;
          }
        }
      }
    }
  }
}
</style>
