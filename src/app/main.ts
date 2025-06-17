import { createApp } from "vue";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

import { store, router } from "./providers";

const app = createApp(App);

app.use(Antd).use(store).use(router);

app.mount("#app");
