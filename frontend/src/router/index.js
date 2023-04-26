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
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/study',
        name: 'study',
        component: () => import('@/views/StudySets.vue'),
        meta: {
            requiresAuth: false,
        }
    },
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