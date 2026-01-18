<script lang="ts"></script>

<template>
  <div>
    <h1
      class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"
    >
      Hello App!
    </h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav class="w-96 mx-auto flex flex-row justify-between gap-4">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/counter">Counter +</RouterLink>
    </nav>
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
