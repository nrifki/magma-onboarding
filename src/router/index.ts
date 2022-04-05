/**************************************************************************
 * IMPORTS
 **************************************************************************/

// NPM
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// Views
import Home from "../views/Home.vue";

/**************************************************************************
 * ROUTER > CONFIGURATION
 **************************************************************************/

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
