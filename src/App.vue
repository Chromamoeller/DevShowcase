<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="w-full h-auto bg-gray-800">
    <router-view />
  </div>
</template>

<style scoped></style>
