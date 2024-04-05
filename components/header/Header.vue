<script setup lang="ts"></script>

<template>
  <header class="header">
    <Container>
      <nav class="header__navigate">
        <div class="header__logo">
          <Icon name="skill-icons:devto-dark" />
        </div>
        <div class="header__links">
          <HeaderLinks />
        </div>
        <div class="header__toggle-theme"><ToggleTheme /></div>
      </nav>
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header__navigate {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .header__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
}
</style>
