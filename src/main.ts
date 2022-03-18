import { createApp } from 'vue';
import 'normalize.css';
import '@/global.scss';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

createApp(App).use(createPinia()).use(router).mount('#app');
