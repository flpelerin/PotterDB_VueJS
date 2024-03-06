import Dashboard from './components/Dashboard.vue';
import Potions from './components/Potions.vue';
import Spells from './components/Spells.vue';
import Books from './components/Books.vue';
import Characters from './components/Characters.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/potions',
    name: 'Potions',
    component: Potions,
  },
  {
    path: '/spells',
    name: 'Spells',
    component: Spells,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
