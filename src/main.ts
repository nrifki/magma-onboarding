import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/dist/genesis/theme.css";
import "@/styles/app.css";

import { createI18n } from "vue-i18n";

const i18n = createI18n();

const app = createApp(App);

app.use(store);
app.use(router);
app.use(plugin, defaultConfig);
app.use(i18n);
app.mount("#app");
