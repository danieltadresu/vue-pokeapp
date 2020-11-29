<template>
  <li>
    <base-card mode="card-list">
      <div>
        <h3>{{ pokemonTitle }}</h3>
      </div>
      <div>
        <img v-bind:src="pokemonImage">
      </div>
      <div>
        <a v-on:click="switchShow">SEE DETAILS <i class="fas fa-search"></i></a>
      </div>
    </base-card>

    <transition>
      <base-card
        v-if="show"
        mode="card-details">
        <h3>POKEMON ABILITIES</h3>
        <div>
          <h4 v-for="(ability, index) in pokemonAbilities" v-bind:key="index">
            {{ ability.toUpperCase() }}
          </h4>
        </div>
      </base-card>
    </transition>

  </li>
</template>

<script>
  export default {
    props: ['pokemonId', 'pokemonName', 'pokemonImage', 'pokemonAbilities'],
    data() {
      return {
        show: false
      }
    },
    computed: {
      pokemonTitle() {
        return this.pokemonName.toUpperCase();
      }
    },
    methods: {
      switchShow() {
        this.show = !this.show;
      }
    }
  }
</script>

<style scoped>
  h3, h4 {
    letter-spacing: -1px;
    padding: 0;
    margin: 0;
  }

  div {
    margin: 1rem 0;
    text-align: center;
  }

  img {
    max-width: 100px;
  }

  a {
    cursor:pointer;
  }

  .v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.v-enter-active {
  transition: all .8s ease-out;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
