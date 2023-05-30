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
      path: '/learn/:id/:slug',
      name: 'set.show',
      component: () => import('@/views/Learn.vue'),
      props: route=> ({...route.params, id: parseInt(route.params.id)}),
    //   beforeEnter(to, from){
    //     const exists = sourceData.sets.find(
    //       set => set.id === parseInt(to.params.id)
    //     )
    //     if(!exists) return {
    //       name: 'NotFound',
    //       params: { pathMatch: to.path.split('/').slice(1) },
    //       query: to.query,
    //       hash: to.hash,
    //     }
    // }
    //   }, Will need later, do not delete
    //   children:[{
    //     path: ':experienceSlug',
    //     name: 'experience.show',
    //     component: () => import('@/views/ExperienceShow.vue'),
    //     props: route=> ({...route.params, id: parseInt(route.params.id)})
    //   }]
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