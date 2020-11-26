<template>
  <h1>Vue PokeApp</h1>
  {{ this.pokemon }}
</template>

<script>
export default {
  data() {
    return {
      pokemon: []
    }
  },
  mounted() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=0&offset=60')
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data.results);

      const results = [];
      for(const id in data.results) {
        results.push({
          id: id,
          name: data.results[id].name
        });
      }
      this.pokemon = results;

    })
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
