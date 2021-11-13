import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import home from '@/pages/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
