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
      <button @click="$emit('generate')">
        Cerca<i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  width: 100%;
  background-color: black;
  padding: 0 10rem;

  h1 {
    color: red;
  }

  button {
    border: 2px solid black;
    width: 5rem;
    height: 2rem;
    margin-left: 2px;

    i {
      margin-left: 12px;
    }
  }

  input {
    height: 2rem;
    outline: none;
    border: 2px solid grey;
  }
}
</style>
