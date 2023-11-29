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
  methods: {
    console: function () {},
  },
};
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="col">
        <AppCard
          :rend="this.store.check"
          v-if="store.tvArray.length > 0"
          v-for="(element, index) in this.store.tvArray"
          :list="element"
          @mouseover="console"
          @mouseleave=""
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
  }
}
</style>
