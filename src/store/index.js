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
    loadPokemon(context) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=0&offset=60')
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const results = [];
        for(const id in data.results) {
          results.push({
            id: id,
            name: data.results[id].name,
            url: data.results[id].url
          });
        }
        context.commit('setPokemon', results);
      })
    }
  }
})

export default store;
