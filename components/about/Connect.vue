<template>
  <section class="connect-container">
    <h1 class="connect">Connect</h1>

    <div>
      <ul class="grid_socials">
        <li class="grid__items">
          <a href=""
            ><div><span></span>Email</div></a
          >
        </li>
        <li class="grid__items">
          <a href=""
            ><div><span></span>YouTube</div></a
          >
        </li>
        <li class="grid__items">
          <a href=""
            ><div><span></span>Instagram</div></a
          >
        </li>
        <li class="grid__items">
          <a href=""
            ><div><span></span>GitHub</div></a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.connect-container {
  display: flex;
  gap: 2.25rem;

  .connect {
    min-width: 150px;
  }

  .grid_socials {
    display: grid;
    grid-template-columns: 1fr 2fr;

    .grid__items {
      display: flex;
      justify-content: center;
      align-self: center;
      border: 0.5px solid white;
      padding: 20px;
    }
  }
}
</style>
