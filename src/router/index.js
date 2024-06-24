import { createWebHistory, createRouter } from 'vue-router';
import PriceOverview from '@/pages/PriceOverview.vue';
import PriceTrending from '@/pages/PriceTrending.vue';

const routes = [
  {
    path: '/overview',
    name: 'PriceOverview',
    component: PriceOverview
  },
  {
    path: '/trending',
    name: 'PriceTrending',
    component: PriceTrending
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
