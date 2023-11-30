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
      const paramsAxios = {
        params: {
          api_key: this.store.apiKey,
          query: this.store.searchWord,
        },
      };

      axios
        .get("https://api.themoviedb.org/3/search/movie", paramsAxios)
        .then((resp) => {
          this.store.tvArray = resp.data.results;
        });
      console.log(this.store.tvArray);
      axios
        .get("https://api.themoviedb.org/3/search/tv", paramsAxios)
        .then((resp) => {
          this.store.tvseriesArray = resp.data.results;
        });
      console.log(this.store.tvseriesArray, this.store.tvArray);
    },
  },
  created() {},
};
</script>

<template>
  <appHeader @generate="findIt" @keyup.enter="findIt" />
  <appBody />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
