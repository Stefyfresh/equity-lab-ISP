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
        path: '/onboarding',
        name: 'onboarding',
        component: () => import('@/views/Onboarding.vue'),
        beforeEnter: authGuard,
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
        beforeEnter: authGuard,
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
        beforeEnter: authGuard,
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
        path: '/study/:subjectID',
        name: 'studysubject',
        props: true,
        component: () => import('@/views/Study.vue'),
    },
    {
        path: '/study/:subjectID/:name',
        name: 'slideshow',
        props: true,
        component: () => import('@/views/Slideshow.vue'),
    },
    {
        path: '/callback',
        name: 'callback',
        component: () => import('@/views/Loading.vue'),
    },
    {
        path: '/post-login',
        name: 'post-login',
        component: () => import('@/views/PostLogin.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import('@/views/Logout.vue'),
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