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
        }
    ] 
})


