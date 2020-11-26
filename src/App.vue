<template>
  <h1>Vue PokeApp</h1>
  <ul>
    <li
      v-for="pokemon in loadPokemon"
      v-bind:key="pokemon.pokemonId"
    >
      {{ pokemon.pokemonId }}
      {{ pokemon.name }}
    </li>
  </ul>

  {{ fetchPokemon }}
</template>

<script>
export default {
  computed: {
    loadPokemon() {
      return this.$store.getters.pokemon;
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
