import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/damola",
    name: "Damola",
    component: () => import(/* webpackChunkName: "about" */ "../views/app2.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/dashapp",
    name: "/dashApp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/dashApp.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
