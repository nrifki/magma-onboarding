/**************************************************************************
 * IMPORTS
 **************************************************************************/

// NPM
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// Views
import Dashboard from "../views/Dashboard.vue";
import Welcome from "../views/Welcome.vue";

/**************************************************************************
 * ROUTER > CONFIGURATION
 **************************************************************************/

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
