import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import GlobalSass from '../views/GlobalSass.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/global-sass',
    name: 'GlobalSass',
    component: GlobalSass,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
