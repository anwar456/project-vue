import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/css/main.css";

const app = createApp(App);
app.use(store);
app.use(router);

store.commit("checkLoginTime");

app.mount("#app");
