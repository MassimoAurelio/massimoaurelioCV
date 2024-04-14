<script setup lang="ts">
import { useConnect } from "@/store/useConnectStore";

const connectStore = useConnect();
</script>

<template>
  <section class="connect-container">
    <h1 class="connect">Connect</h1>

    <div>
      <ul class="grid_socials">
        <li v-for="item in connectStore?.items" :key="item?.icon">
          <a class="grid__items" :href="item?.href" target="_blank">
            <Icon :name="item?.icon" size="25" />

            <span class="span">{{ item?.name }}</span>

            <Icon name="ph:arrow-up-right-thin" size="25" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_vars.scss" as vars;
.connect-container {
  display: flex;
  gap: 2.25rem;

  .connect {
    min-width: 150px;
  }

  .grid_socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;

    .grid__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 100%;
      align-self: center;
      min-height: 58px;
      min-width: 240px;
      border: 0.5px solid vars.$colorWhiteTheme;
      border-width: 1px;
      border-radius: 0.5rem;
      padding: 1rem;
    }
  }

  @media (max-width: 688px) {
    .grid_socials {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 5px;
      grid-row-gap: 5px;
    }
  }
}
@media (max-width: 688px) {
  .connect-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
