import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/signup",
    name: "signup",

    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
        import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
        import(/* webpackChunkName: "login" */ "../views/Contact.vue"),
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
