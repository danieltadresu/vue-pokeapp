<template>
  <div v-bind:class="mode">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
.card-list {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 20rem;
  border-radius: 50%;
}

.card-details {
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
padding: 1rem;
margin: 2rem auto;
max-width: 35rem;
border-radius: 12px;
}
</style>
