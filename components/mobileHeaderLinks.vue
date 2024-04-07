<script setup lang="ts">
import { useHeaderNav } from "@/store/useHeaderNav";




const headerNavStore = useHeaderNav();
</script>

<template>
  <div class="dropdown">
     <div class="dropdown__box">
       <UiButton
         color="second"
         class="dropdown__button dropdown__button--second"
         @click="headerNavStore.toggleHeaderLinks"
       >
       Menu
         <Icon name="ic:baseline-plus" size="25" />
       </UiButton>
       <ul class="dropdown__list" v-show="headerNavStore.showHeaderLinks">
         <li class="dropdown__item" v-for="item in headerNavStore.items" :key="item.label">
           <span><Icon name="charm:tick" size="20" /></span><span>{{ item.label }}</span>
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
      background-color: vars.$dropboxBg;
      right: 0;
      padding: 10px;

      .dropdown__item {
        display: flex;
        align-items: center;
        height: 36px;
        border-radius: 12px;
        gap: 5px;
        padding: 10px;

        &:hover {
          background-color: #2a2a2a;
        }
      }
    }
  }
}
</style>
