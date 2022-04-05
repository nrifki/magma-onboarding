/**************************************************************************
 * IMPORTS
 **************************************************************************/

// NPM
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Views
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
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
