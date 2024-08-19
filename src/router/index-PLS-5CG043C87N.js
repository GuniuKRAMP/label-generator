import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Labels50x37 from '../views/Labels100x37View.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/labels50x37',
    name: 'Labels50x37',
    component: Labels50x37
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
