<template>
  <header>
    <h1>{{headerTitle}}</h1>
    <ul>
      <li>
        <router-link to="/pokemon">
          POKEMON LIST
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: ['headerTitle']
}
</script>

<style scoped>

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  display: inline-block;
}

ul, li {
  display: inline-block;
  list-style-type: none;
  margin: 0 .5rem;
  padding: 0;
}

a.router-link-active {
padding: .8rem 2rem;
margin: 1rem auto;
background-color: #2563EB;
color: white;
border-radius: 50px;
border: none;
font-weight: bold;
display: inline-block;
font-size: .8rem;
}

@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
  }
}

</style>
