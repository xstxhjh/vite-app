
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/home.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;