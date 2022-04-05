// NPM
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createMetaManager } from "vue-meta";
import { plugin, defaultConfig } from "@formkit/vue";

// Libraries
import router from "./router";
import store from "./store";

// Components
import App from "./App.vue";

// Stylesheets
import "@formkit/themes/dist/genesis/theme.css";
import "@/styles/app.css";

// Miscellaneous
import "./registerServiceWorker";

const i18n = createI18n();

const app = createApp(App);

app.use(store);
app.use(createMetaManager());
app.use(router);
app.use(plugin, defaultConfig);
app.use(i18n);
app.mount("#app");
