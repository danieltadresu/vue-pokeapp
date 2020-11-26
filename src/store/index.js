import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      pokemon: []
    }
  },
  getters: {
    pokemon(state) {
      return state.pokemon;
    }
  },
  mutations: {
    setPokemon(state, payload) {
      state.pokemon = payload;
    }
  },
  actions: {
    loadPokemons() {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=0&offset=60')
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data.results);
      })
    }
  }
})

export default store;
