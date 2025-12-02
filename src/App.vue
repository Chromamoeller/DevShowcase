<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-orange-100 text-slate-200">
    <Header />

    <main class="flex-1 w-full">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
