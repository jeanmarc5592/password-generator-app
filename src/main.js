import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.scss";

import BaseTypography from "./common/components/BaseTypography.vue";

const app = createApp(App);

app.component("BaseTypography", BaseTypography);

app.mount("#app");
