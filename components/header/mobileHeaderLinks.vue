<script setup lang="ts">
import { useHeaderNav } from "@/store/useHeaderNav";

const headerNavStore = useHeaderNav();

const route = useRoute();
const routePath = computed(() => {
  const pathWithoutSlash = route.path.replace(/^\//, "");
  return pathWithoutSlash.charAt(0).toUpperCase() + pathWithoutSlash.slice(1);
});
</script>

<template>
  <div class="dropdown">
    <div class="dropdown__box">
      <UiButton
        color="default"
        class="dropdown__button dropdown__button--second"
        @click="headerNavStore.toggleHeaderLinks"
      >
        Menu
        <Icon name="ic:baseline-plus" size="25" />
      </UiButton>
      <ul class="dropdown__list" v-show="headerNavStore.showHeaderLinks">
        <li
          class="dropdown__item"
          v-for="item in headerNavStore?.items"
          :key="item?.label"
        >
          <a :href="item?.href">
            <span class="dropdown__check"
              ><Icon
                v-if="routePath === item?.label"
                name="charm:tick"
                size="20" /></span
            ><span>{{ item?.label }}</span></a
          >
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
      border-radius: 12px;
      z-index: 10000;
      background-color: vars.$justWhite;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -4px rgba(0, 0, 0, 0.1);
      right: 0;
      padding: 10px;

      .dropdown__item {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 36px;
        border-radius: 12px;
        gap: 5px;
        padding-right: 1rem;
        padding-left: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

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
