import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/overview',
    name: 'PriceOverview',
    component: () => import('@/pages/PriceOverview.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
