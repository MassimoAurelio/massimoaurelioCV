<script setup lang="ts">
const colorMode = useColorMode();

console.log(colorMode.preference);
</script>

<template>
  <div>
    <p>ppppp</p>
    <h1>h1h1h1h1h1</h1>
    <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
