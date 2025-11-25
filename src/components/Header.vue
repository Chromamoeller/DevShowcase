<script setup lang="ts">
import DropdownMenu from "./DropdownMenu.vue";
</script>

<template>
  <header
    class="h-[100px] bg-slate-900 border-b border-slate-800 flex items-center px-4"
  >
    <div class="flex items-center flex-1">
      <div
        class="w-[70px] h-[70px] rounded-full overflow-hidden mx-5 flex items-center justify-center"
      >
        <img
          class="h-full object-cover"
          src="./../assets/logoscaled.png"
          alt="DevShowcaseLogo"
        />
      </div>
    </div>

    <div class="flex-10 flex justify-around">
      <DropdownMenu
        label="Games"
        :items="[
          { label: 'Quiz', to: '/games/quiz' },
          { label: 'Memory', to: '/games/memory' },
          { label: 'Clicker', to: '/games/clicker' },
        ]"
      />
      <DropdownMenu
        label="Utilities"
        :items="[
          { label: 'Quiz', to: '/games/quiz' },
          { label: 'Memory', to: '/games/memory' },
          { label: 'Clicker', to: '/games/clicker' },
        ]"
      />
      <DropdownMenu
        label="Websites"
        :items="[
          { label: 'Quiz', to: '/games/quiz' },
          { label: 'Memory', to: '/games/memory' },
          { label: 'Clicker', to: '/games/clicker' },
        ]"
      />
    </div>
  </header>
</template>
