<script>
import axios from "axios";

import { store } from "./components/store";
import appHeader from "./components/appHeader.vue";
import appBody from "./components/appBody.vue";
import appFooter from "./components/appFooter.vue";

export default {
  components: {
    appHeader,
    appBody,
    appFooter,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    findIt: function () {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "aa5ccfcf40fb7a80f5939089e1480013",
            query: this.store.searchWord,
          },
        })
        .then((resp) => {
          this.store.tvArray = resp.data.results;
        });
      console.log(this.store.tvArray);
    },
  },
  created() {},
};
</script>

<template>
  <appHeader @generate="findIt" />
  <appBody />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
