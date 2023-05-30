/* jshint esversion: 11 */
import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from "@auth0/auth0-vue";

const routes = [
    {
        path: '/',
        name: 'landing',
        component: () => import('@/views/Landing.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutUs.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue'),
        beforeEnter: authGuard,
    },
    {
        path: '/leaderboard',
        name: 'leaderboard',
        component: () => import('@/views/Leaderboard.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactUs.vue'),
    },
    {
        path: '/study',
        name: 'study',
        component: () => import('@/views/StudySets.vue'),
    },
    {
        path: '/callback',
        name: 'callback',
        component: () => import('@/views/Loading.vue'),
    },
    {
        path: "/:catchAll(.*)",
        name: "Not Found",
        component: () => import('@/views/404NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;