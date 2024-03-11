/*eslint-disable*/
import AboutUs from "@/components/AboutUs.vue";
import HelloWorldView from "../components/HelloWorld.vue";
import NotFoundErrorView from "../components/NotFoundError.vue";
import { createWebHistory, createRouter } from "vue-router";

const routerHistory = createWebHistory();
export var ROUTES = [
  {
    path: "/home",
    component: HelloWorldView,
  },
  {
    path: "/about",
    component: AboutUs,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundErrorView,
  },
];

const router = createRouter({
  history: routerHistory,
  routes: ROUTES,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/") {
    next({ path: "/home" });
  } else {
    next();
  }
});

export { router };
