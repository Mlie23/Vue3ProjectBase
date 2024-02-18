import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./constant/routes.js";
import { companyInfo } from "./constant/companyInfo.js";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(fas);

const pinia = createPinia();
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia).use(router);
app.mount("#app");
export { router };
export { companyInfo };
