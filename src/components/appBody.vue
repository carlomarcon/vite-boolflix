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
      <h1>Movies</h1>
      <div class="col">
        <AppCard
          v-if="store.tvArray.length > 0"
          v-for="(element, index) in this.store.tvArray"
          :list="element"
        />
      </div>
      <h1>Series Tv</h1>
      <div class="col">
        <AppCard
          v-if="store.tvArray.length > 0"
          v-for="(element, index) in this.store.tvseriesArray"
          :list="element"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 80%;
  }

  .col {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: grey;
    overflow-y: scroll;
  }
}
</style>
