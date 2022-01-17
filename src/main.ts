import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'normalize.css';
import '@/assets/less/common.less';

createApp(App).use(createPinia()).use(router).mount('#app');
