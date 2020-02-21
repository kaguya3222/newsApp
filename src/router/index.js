import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("../components/Home.vue")
  },
  {
    path: "/reg",
    name: "Reg",
    meta: { layout: "main" },
    component: () => import("../components/registration/Reg.vue")
  },
  {
    path: "/auth",
    name: "Auth",
    meta: { layout: "main" },
    component: () => import("../components/authorization/Auth.vue")
  },
  {
    path: "/create",
    name: "Create",
    meta: { layout: "main" },
    component: () => import("../components/News/CreateNews.vue")
  },
  {
    path: "/contact",
    name: "Contacts",
    component: () => import("../components/contactUs/ContactUs.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
