import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/", component: "Landing" },
  { path: "/callback", component: "callback" },
  { path: "/leaderboards/:id", component: "Leaderboard", props: true },
  { path: "/how-it-works", component: "HowItWorks" },
  { path: "/about", component: "About" }
];

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(`@/components/${route.component}.vue`)
    };
});

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes
});

export default router;
