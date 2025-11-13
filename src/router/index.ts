import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";
import HelloWorld2 from "../views/HelloWorld2.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/2",
    name: "2",
    component: HelloWorld2,
  },
];
export const router = createRouter({ history: createWebHistory(), routes });
