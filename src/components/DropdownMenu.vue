<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

type DropdownItem = {
  label: string;
  to?: string; // für Vue Router
  href?: string; // für externe Links
};

const props = defineProps<{
  label: string;
  items: DropdownItem[];
}>();

const isOpen = ref(false);

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="relative inline-block text-left"
    @mouseenter="open"
    @mouseleave="close"
  >
    <!-- Trigger-Button -->
    <button
      type="button"
      class="inline-flex items-center gap-1 rounded-lg px-5 py-4.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600"
      @click="toggle"
    >
      <span class="text-xl">{{ label }}</span>
      <span class="text-md">▾</span>
    </button>

    <!-- Dropdown-Panel -->
    <transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-44 rounded-xl border border-slate-800 bg-slate-900/95 shadow-xl backdrop-blur-md py-1 z-20"
      >
        <template v-for="item in items" :key="item.label">
          <!-- Router-Link -->
          <RouterLink
            v-if="item.to"
            :to="item.to"
            class="block px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-slate-50"
            @click="close"
          >
            {{ item.label }}
          </RouterLink>

          <!-- Externer Link -->
          <a
            v-else-if="item.href"
            :href="item.href"
            class="block px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-slate-50"
            @click="close"
          >
            {{ item.label }}
          </a>

          <!-- Fallback: nur Text -->
          <span
            v-else
            class="block px-3 py-2 text-sm text-slate-400 cursor-default"
          >
            {{ item.label }}
          </span>
        </template>
      </div>
    </transition>
  </div>
</template>
