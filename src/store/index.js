import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      pokemon: [

      ]
    }
  },
  getters: {
    pokemon(state) {
      console.log(state.pokemon)
      return state.pokemon;
    }
  },
  mutations: {
    setPokemon(state, payload) {
      state.pokemon = payload;
    }
  }    
})

export default store;
