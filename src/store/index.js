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

    loadPokemonData(context) {
      const results = [];
      fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        for(const id in data.results) {
          results.push({
            id: id,
            name: data.results[id].name,
            url: data.results[id].url,
            abilities: []
          })
        }
        context.commit('setPokemon', results);
      })
      
    },

    loadAbilities(state) {
      //console.log(state.getters.pokemon[0]);
      //const results = [];
      for(const pokemonIndex in state.getters.pokemon) {
        fetch(state.getters.pokemon[pokemonIndex].url)
        .then((response) => {
          if(response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          state.getters.pokemon[
            state.getters.pokemon[pokemonIndex].id
          ].abilities = data.abilities;
          console.log(state.getters.pokemon[pokemonIndex].id);
          console.log(data);
        });
      }

    }
  }
})

export default store;


//fetch(data.results[id].url)
//.then((response) => {
//  if(response.ok) {
//    return response.json();
//  }
//})
//.then((data) => {
//  console.log(data.forms);
//
//})
