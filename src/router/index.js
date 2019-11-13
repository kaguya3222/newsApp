import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" }
  },
  {
    path: "/reg",
    name: "Reg",
    meta: { layout: "main" },
    component: () => import("../components/registration/Reg.vue")
  },
  {
    path: "/exit",
    name: "Exit",
    meta: { layout: "main" }
  },
  {
    path: "/auth",
    name: "Auth",
    meta: { layout: "main" },
    component: () => import("../components/authorization/Auth.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
