import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Herbalism from "../views/Games/WordOfWarcraftHerbalism/Herbalism.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/games/word-of-warcraft-herbalism",
    name: "word-of-warcraft-herbalism",
    component: Herbalism,
  },
];
export const router = createRouter({ history: createWebHistory(), routes });
