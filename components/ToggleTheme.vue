<script setup lang="ts">
import { useToggleThemeStore } from "@/store/useToggleThemeStore";
const toggleThemeStore = useToggleThemeStore();




</script>

<template>
  <div class="dropdown">
     <div class="dropdown__box">
       <UiButton
         color="second"
         class="dropdown__button dropdown__button--second"
         @click="toggleThemeStore.toggleDropDown"
       >
         <Icon name="ph:moon-fill" size="25" />
       </UiButton>
       <ul class="dropdown__list" v-show="toggleThemeStore.showDropDown" >
         <li class="dropdown__item" v-for="item in toggleThemeStore.item" :key="item.name">
           <span><Icon name="charm:tick" size="20" /></span><span>{{ item.name }}</span>
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
        cursor: pointer;

        &:hover {
          background-color: #2a2a2a;
        }
      }
    }
  }
}
</style>
