<template>
  <div class="flex h-[90vh]">
    <div class="flex-1 bg-slate-800 p-4">
      <div
        class="bg-white/50 h-full rounded-md shadow-2xl overflow-hidden flex items-start justify-center"
      >
        <ul class="grid grid-cols-2 gap-4 p-4">
          <li
            v-for="(img, i) in images"
            :key="i"
            @click="activeIndex = i"
            :class="[
              'flex justify-center p-1 rounded-lg border-2 transition-all cursor-pointer',
              activeIndex === i
                ? 'border-green-800 scale-95'
                : 'border-transparent',
            ]"
          >
            <img
              :src="img"
              class="rounded-md hover:scale-110 active:scale-90 transition-all duration-300"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-8 bg-slate-700"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref<number | null>(null);

const images = [
  "https://picsum.photos/50/50?1",
  "https://picsum.photos/50/50?2",
  "https://picsum.photos/50/50?3",
  "https://picsum.photos/50/50?4",
];
</script>
