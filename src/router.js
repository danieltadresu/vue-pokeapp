import { createRouter, createWebHistory } from 'vue-router';

import PokemonList from './pages/pokemon/PokemonList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/pokemon' },
    { path: '/pokemon', component: PokemonList }
  ]
});

export default router;
