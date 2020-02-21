import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("../pages/PageHome.vue")
  },
  {
    path: "/reg",
    name: "Reg",
    meta: { layout: "main" },
    component: () => import("../pages/PageRegistration.vue")
  },
  {
    path: "/auth",
    name: "Auth",
    meta: { layout: "main" },
    component: () => import("../pages/PageAuthorization.vue")
  },
  {
    path: "/create",
    name: "Create",
    meta: { layout: "main" },
    component: () => import("../pages/PageCreateNews.vue")
  },
  {
    path: "/contact",
    name: "Contacts",
    component: () => import("../pages/PageContactUs.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
