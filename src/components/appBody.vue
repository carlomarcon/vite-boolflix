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
};
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="col">
        <AppCard
          v-if="store.tvArray.length > 0"
          v-for="element in this.store.tvArray"
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

  .col {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: grey;
  }
}
</style>
