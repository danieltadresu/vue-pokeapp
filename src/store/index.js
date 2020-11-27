import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
      pokemonData: []
    }
  },
  getters: {
    pokemon(state) {
      return state.pokemonData;
    }
  },
  mutations: {
    setPokemon(state, payload) {
      state.pokemonData = payload;
    }
  },
  actions: {
    async loadPokemonData(context) {
      // FETCH POKEMON DATA FROM POKE API,
      let response, responseData;

      response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
      );

      responseData = await response.json();

      //if (!response.ok) { ... }

      let pokemonData = []

      for(const pokemonIndex in responseData.results) {
        const pokemon = {
          id: pokemonIndex,
          name: responseData.results[pokemonIndex].name,
          url: responseData.results[pokemonIndex].url,
          abilities: []
        }
        pokemonData.push(pokemon);
      }

      for(const pokemonIndex in pokemonData) {
        response = await fetch(
          pokemonData[pokemonIndex].url
        );

        responseData = await response.json();

        pokemonData[pokemonIndex].abilities.push(responseData.abilities);
      }


      context.commit('setPokemon', pokemonData);
    }
  }
})

export default store;
