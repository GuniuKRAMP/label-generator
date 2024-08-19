import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Labels50x37 from '../views/Labels50x37.vue';
import LabelsZebraView from '../views/LabelsZebraView.vue';
import PodestLabelsView from '../views/PodestLabelsView.vue';
import Labels105x40View from '../views/Labels105x40View.vue';
import Labels100x37View from '../views/Labels100x37View.vue';
import Labels70x40View from '../views/Labels70x40View.vue';
import HelpInfoView from '../views/HelpInfoView.vue';

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
  },
  {
    path: '/labels70x40',
    name: 'Labels70x40',
    component: Labels70x40View
  },
  {
    path: '/labels100x37',
    name: 'Labels100x37',
    component: Labels100x37View
  },
  {
    path: '/labels105x40',
    name: 'Labels105x40',
    component: Labels105x40View
  },
  {
    path: '/labels-podest',
    name: 'PodestLabels',
    component: PodestLabelsView
  },
  {
    path: '/labels-zebra',
    name: 'ZebraLabels',
    component: LabelsZebraView
  },
  {
    path: '/help-info',
    name: 'HelpInfo',
    component: HelpInfoView
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;