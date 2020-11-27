<template>
  <h1>Vue PokeApp</h1>

  <button v-on:click="showData">
    Click me!
  </button>

  <ul v-if="isVisible">
    <li v-for="pokemon in fetchPokemon" v-bind:key="pokemon.id">
      <h1>
      {{pokemon.id}}
      {{pokemon.name}}
      </h1>
      <img v-bind:src="pokemon.imgUrl" alt="Italian Trulli">


      {{pokemon.abilities}}
    </li>
  </ul>


</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },
  computed: {
    fetchPokemon() {
      return this.$store.getters.pokemon;
    }
  },
  methods: {
    showData() {
      this.$store.dispatch('loadPokemonData');
      this.isVisible = !this.isVisible;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}


h1 {
  text-align: center;
}

ul {
  list-style-type: none;
}

</style>
