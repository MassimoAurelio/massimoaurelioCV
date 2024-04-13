<script setup lang="ts">
const color = useColorMode();

const iconComputed = computed(() =>
  color.value === "dark" ? "ph:moon-fill" : "ph:sun-fill"
);

const colorMode = useColorMode();
const toggleDropdown = ref(false);

function setTheme(theme: string) {
  colorMode.preference = theme;
  toggleDropdown.value = false;
}
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
      <ul class="dropdown__list" v-show="toggleDropdown">
        <li class="dropdown__item" @click="setTheme('light')">
          <span><Icon name="charm:tick" size="20" /></span><span>Light</span>
        </li>
        <li class="dropdown__item" @click="setTheme('dark')">
          <span><Icon name="charm:tick" size="20" /></span><span>Dark</span>
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
        display: flex;
        align-items: center;
        height: 36px;
        border-radius: 12px;
        gap: 5px;
        padding: 10px;
        cursor: pointer;

        &:hover {
          background-color: #cecece;
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
