import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router/index.js";

const app = createApp(App);

app.use(router);

app.mount("#app");

// const app = createApp({
//   data() {
//     return {
//       name: "Hello Vue 3!",
//     };
//   },
//   template: ` <h1>{{ name }}</h1> `,
// });

// app.mount("#app");
