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
    path: '/potions/:id',
    name: 'PotionDetails',
    component: Potions,
  },

  {
    path: '/spells',
    name: 'Spells',
    component: Spells,
  },
  {
    path: '/spells:id',
    name: 'SpellDetails',
    component: Spells,
  },


  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/books/:id',
    name: 'BookDetails',
    component: Books,
  },

  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/characters/:id',
    name: 'CharacterDetails',
    component: Characters,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
