import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'uno.css';
import App from './App.vue';
import router from './router';
import 'normalize.css';
import '@/assets/scss/common.scss';

createApp(App).use(createPinia()).use(router).mount('#app');
