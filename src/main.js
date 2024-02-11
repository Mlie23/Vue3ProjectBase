import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from "./constant/routes.js";
import { companyInfo } from "./constant/companyInfo.js";
import { createPinia } from 'pinia';
const pinia = createPinia();
const app = createApp(App);
app.use(pinia).use(router);
app.mount("#app");
export { router };
export { companyInfo };