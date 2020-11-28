<template>
  <li>
    <base-card>
      <header>
        <h3>{{ pokemonTitle }}</h3>
      </header>
      <main>
        <img v-bind:src="pokemonImage">
      </main>
      <footer>
        <router-link v-bind:to="pokemonDetailLink">
          SEE DETAILS <i class="fas fa-search"></i>
        </router-link>

      </footer>
    </base-card>
  </li>
</template>

<script>
  export default {
    props: ['pokemonId', 'pokemonName', 'pokemonImage', 'pokemonAbilities'],
    computed: {
      pokemonTitle() {
        return this.pokemonName.toUpperCase();
      },
      pokemonDetailLink() {
        return this.$route.path + '/' + this.pokemonId;
      }
    }
  }
</script>

<style scoped>

  h3 {
    letter-spacing: -1px;
  }

  main, header, footer {
    margin: 1rem 0;
    text-align: center;
  }

  img {
    max-width: 100px;
  }


</style>
