<script>
import { store } from "./store";

export default {
  components: {},
  data() {
    return {
      store,
    };
  },
  methods: {
    search: function () {},
  },
};
</script>
<template>
  <header>
    <h1>BOOLFIX</h1>
    <input type="text" v-model.trim="store.searchWord" />
    <button @click="$emit('generate')">Cerca</button>
  </header>
</template>
<style scoped lang="scss"></style>
