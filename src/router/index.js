import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Page from "../views/Page.vue";

Vue.use(VueRouter);

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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
