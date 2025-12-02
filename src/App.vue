<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-slate-200">
    <Header />

    <main class="flex-1 w-full scrollbar">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
