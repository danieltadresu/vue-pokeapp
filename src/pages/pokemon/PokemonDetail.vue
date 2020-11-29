<template>
  <base-card mode="card-details">
    <div>
      <h3>Hi, my Pokemon Name is {{ selectedPokemon.name }} </h3>
    </div>
  </base-card>
</template>

<script>
  export default {
    mounted() {
      let pokemonId = this.$route.params.pokemonId;
      this.selectedPokemon = this.$store.getters.pokemon.find(
        pokemon => pokemon.id = pokemonId
      );
      console.log(this.selectedPokemon);
    },
    data() {
      return {
        selectedPokemon: ''
      };
    }
  }
</script>

<style scoped>
div {
  margin: 1rem 0;
  text-align: center;
}

h3, p {
  margin: 0;
  padding: 0;
}
</style>
