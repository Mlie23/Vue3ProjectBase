/*eslint-disable*/
import HelloWorldView from '../components/HelloWorld.vue';
import NotFoundErrorView from '../components/NotFoundError.vue';
import { createWebHistory, createRouter } from "vue-router";

const routerHistory = createWebHistory();
export var ROUTES = [
    { path: "/dashboard", component: HelloWorldView, meta: { requireAuth: false } },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundErrorView,
        meta: { requireAuth: false },
    },
];

const router = createRouter({
    history: routerHistory,
    routes: ROUTES,
});

router.beforeEach((to, from, next) => {
    if (
        (to.path == "/")
    ) {
        next({ path: "/dashboard" });
    }
    else {
        next();
    }
});

export { router };
