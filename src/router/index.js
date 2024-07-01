import { createWebHistory, createRouter } from 'vue-router';
import PriceOverview from '@/pages/PriceOverview.vue';
import PriceTrending from '@/pages/PriceTrending.vue';
import NewsList from '@/pages/NewsList.vue';

const routes = [
  {
    path: '/',
    redirect: '/overview'
  },
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
  {
    path: '/news',
    name: 'NewsList',
    component: NewsList
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/overview'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
