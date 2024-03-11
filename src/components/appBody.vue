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
  <div class="wrapper gap-3">
    <div class="container w-100 p-5">
      <div class="filter">
        <h1>Movies</h1>
        <p v-if="store.tvArray.length > 0">
          Risultati filtrati : {{ store.tvArray.length }}
        </p>
        <p v-else>Nessun risultato trovato</p>
      </div>
      <div class="col">
        <AppCard
          v-if="store.tvArray.length > 0"
          v-for="(element, index) in this.store.tvArray"
          :list="element"
          :check="true"
          :listType="this.store.tvArray"
        />
      </div>
    </div>

    <div class="container ms_series w-100 h-50 p-5">
      <div class="filter">
        <h1>Series Tv</h1>
        <p v-if="store.tvseriesArray.length === 0">Nessun risultato trovato</p>
        <p v-else-if="store.tvseriesArray.length > 0">
          Risultati filtrati : {{ store.tvseriesArray.length }}
        </p>
      </div>
      <div class="col">
        <AppCard
          v-if="store.tvArray.length > 0"
          v-for="(element, index) in this.store.tvseriesArray"
          :list="element"
          :check="false"
          :listType="this.store.tvseriesArray"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
  background-color: black;

  .container {
    color: white;

    .filter {
      margin: 1rem 0;
    }
  }

  .col {
    height: 800px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-x: scroll;
    border: 3px solid grey;
  }
}
.ms_series {
  background-color: black;
}
</style>
