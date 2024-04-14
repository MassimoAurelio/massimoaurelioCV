<template>
  <NuxtLayout>
    <div class="animate-from-bottom">
      <Container>
        <NuxtPage />
      </Container>
    </div>
  </NuxtLayout>
</template>

<style>
.animate-from-bottom {
  animation: slide-up 0.5s ease-in-out forwards;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

@keyframes slide-up {
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
