<script setup lang="ts">
interface Props {
  color?: "default" | "second";
  size?: "S" | "M" | "L";
  disabled?: boolean;
}

const props = defineProps<Props>();
const { color = "default", size = "S", disabled = false } = props;

const classes = ["button", `color_${color}`, `size_${size}`];
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"> </slot>
    <slot></slot>
    <slot name="rightIcon"> </slot>
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_vars.scss" as vars;
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
}

.button.color_default {
  background-color: vars.$colorWhiteTheme;
}

.button.color_second {
  background-color: vars.$darkBg;
}

.button.size_S {
  grid-gap: 4px;
  padding: 4px;
}

.button.size_M {
  grid-gap: 8px;
  padding: 8px;
}

.button.size_L {
  grid-gap: 12px;
  padding: 12px;
}
</style>
