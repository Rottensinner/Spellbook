import ListView from "@/view/ListView.vue";
import SpellView from "@/view/SpellView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: ListView,
  },
  {
    path: "/spell/:id",
    component: SpellView,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
