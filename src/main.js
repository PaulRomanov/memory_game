import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';


window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

const app = createApp(App);

app.use(router).use(store).use(i18n).mount('#app');