import { createWebHistory, createRouter } from 'vue-router';
import PriceOverview from '@/pages/PriceOverview.vue';

const routes = [
  {
    path: '/overview',
    name: 'PriceOverview',
    component: PriceOverview
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
