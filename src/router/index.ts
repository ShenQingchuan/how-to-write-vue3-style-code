import Vue from 'vue';
import VueRouter from 'vue-router';

// * Test for Warnings(1):
// import RouterOne from '@/views/RouterOne.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/RouterOne.vue'),
    // component: RouterOne,
  },
  {
    path: '/name',
    name: 'name',
    component: () => import('../views/RouterTwo.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
