// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ListPage from '@/views/ListPage.vue';
import LivePage from '@/views/LivePage.vue';

const routes = [
  {
    path: '/',
    name: 'ListPage',
    component: ListPage,
  },
  {
    path: '/live/:id',
    name: 'LivePage',
    component: LivePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;