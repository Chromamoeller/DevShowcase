import { createApp } from "vue";
import "./style.css"; // oder ./assets/main.css – je nachdem, wo dein Tailwind drinsteht
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);

// Router einbinden
app.use(router);

// App starten
app.mount("#app");
