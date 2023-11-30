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
    <div>
      <input type="text" v-model.trim="store.searchWord" />
      <button @click="$emit('generate')">Cerca</button>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  width: 100%;
  background-color: red;

  button {
    border: 2px solid black;
    width: 5rem;
    height: 2rem;
    margin-left: 2px;
  }

  input {
    height: 2rem;
    outline: none;
  }
}
</style>
