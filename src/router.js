import { createRouter, createWebHistory } from 'vue-router';

import PokemonList from './pages/pokemon/PokemonList.vue';
import PokemonDetail from './pages/pokemon/PokemonDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/pokemon' },
    { path: '/pokemon', component: PokemonList },
    { path: '/pokemon/:pokemonId', component: PokemonDetail }
  ]
});

export default router;
