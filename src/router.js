// Imports
import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue'; // Page One

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { // First Route
            path: '/',
            name: 'Home',
            component: Home
        }, 
        {
            path: '/about',
            name: 'About',
            component: () => import('./pages/About.vue')
        },
        {
            path: '/menu',
            name: 'Menu',
            component: () => import('./pages/Menu.vue')
        },
        {
            path: '/sign-in',
            name: 'Signin',
            component: () => import('./pages/signIn.vue')
        },
        {
            path: '/join',
            name: 'Join',
            component: () => import('./pages/Join.vue')
        },
        {
            path: '/welcome',
            name: 'Welcome',
            component: () => import('./pages/Welcome.vue')
        }
    ] 
})


