<template>
  <section class="about-container">
    <h1 class="about">About</h1>
    <div class="about_text">
      <p>
        Hello, I'm Maxim, currently residing in Irkutsk. I have been engaged in
        programming for the past two years. As a programmer, my expertise lies
        in web development and automated testing.
      </p>
      <p>
        In my free time from work, I enjoy working on pet projects or learning
        something new to expand my technological stack. When I'm not sitting at
        my desk, I'm likely walking, playing football, or at a local coffee shop
        :)
      </p>
      <p>
        When I'm not at my desk I am probably lifting weights, playing soccer,
        or at a local coffee shop :]
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-container {
  display: flex;
  gap: 2.25rem;

  .about {
    min-width: 150px;
  }
  .about_text {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
}

@media (max-width: 688px) {
  .about-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
