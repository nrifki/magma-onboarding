/**************************************************************************
 * IMPORTS
 **************************************************************************/

// NPM
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Views
import Onboarding from "../views/Onboarding.vue";

/**************************************************************************
 * ROUTER > CONFIGURATION
 **************************************************************************/

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "onboarding",
    component: Onboarding,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
