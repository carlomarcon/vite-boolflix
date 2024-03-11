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
    reset: function () {
      location.reload;
    },
    onchange() {
      this.$emit("genre");
    },
  },
};
</script>
<template>
  <header>
    <div class="d-flex">
      <h1>BOOLFIX</h1>
      <ul>
        <li>
          <a href="" @click="reset"><i class="fa-solid fa-house"></i></a>
        </li>
        <li>
          <select
            name=""
            id=""
            @change="onchange()"
            v-model.trim="this.store.genreAll"
          >
            <option value="Selezionare:">All</option>
            <option
              :value="element.name"
              v-for="element in this.store.genreMovieObj"
            >
              {{ element.name }}
            </option>
          </select>
        </li>
      </ul>
    </div>

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

  ul {
    text-align: left;
    width: 60%;

    a {
      color: white;

      // &:hover {
      //   text-decoration: underline;
      // }
    }
    li {
      color: white;
      display: inline-block;
      margin: 10px;
    }
  }

  h1 {
    color: rgb(155, 0, 0);
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
