import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.scss";

import BaseTypography from "./common/components/BaseTypography.vue";
import BaseCopyIcon from "./common/components/BaseCopyIcon.vue";

const app = createApp(App);

app.component("BaseTypography", BaseTypography);
app.component("BaseCopyIcon", BaseCopyIcon);

app.mount("#app");
