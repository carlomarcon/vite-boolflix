<script>
import AppCard from "./appCard.vue";
import { store } from "./store";

export default {
  components: { AppCard },
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="filter">
        <h1>Movies</h1>
        <p>Risultati filtrati : {{ store.tvArray.length }}</p>
      </div>
      <div class="col">
        <AppCard
          v-if="store.tvArray.length > 0"
          v-for="(element, index) in this.store.tvArray"
          :list="element"
          :check="true"
        />
      </div>
      <div class="filter">
        <h1>Series Tv</h1>
        <p>Risultati filtrati : {{ store.tvseriesArray.length }}</p>
      </div>
      <div class="col">
        <AppCard
          v-if="store.tvArray.length > 0"
          v-for="(element, index) in this.store.tvseriesArray"
          :list="element"
          :check="false"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10rem;

  .container {
    width: 100%;
    color: white;

    .filter {
      margin: 1rem 0;
    }
  }

  .col {
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-x: scroll;
    border: 3px solid grey;
  }
}
</style>
