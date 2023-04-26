/* jshint esversion: 11 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'landing',
        component: () => import('@/views/Landing.vue'),
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: () => import('@/views/AboutUs.vue'),
        meta: {
            requiresAuth: false,
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.user) {
        //must log in
        return {name: 'login', query: {redirect: to.fullPath}};
    }
});

export default router;