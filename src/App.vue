<template>
  <h1>Vue PokeApp</h1>

  {{ this.$store.getters.pokemon }}
</template>

<script>
export default {
  data() {
    return {
      pokemon: []
    }
  },
  mounted() {
    this.$store.dispatch('loadPokemon');
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
