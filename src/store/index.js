import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      pokemon: [
        {
          'pokemonId': 'p1',
          'name': 'pokemon1'
        },
        {
          'pokemonId': 'p2',
          'name': 'pokemon2'
        }
      ]
    }
  }
})

export default store;
