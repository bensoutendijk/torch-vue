import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Page from "../views/Page.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/pages/:slug",
    component: Page,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
