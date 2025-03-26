import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/base.css";
import fadeIn from './directives/fadein.js';

const app = createApp(App);
app.use(router);
app.directive('fade-in', fadeIn);
app.mount("#app");
