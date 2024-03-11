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
    getIt() {
      for (let i = 0; i < this.store.genreMovieObj.length; i++) {
        if (this.store.genreMovieObj[i].name === this.store.genreAll) {
          // this.store.genreId.push(this.store.genreMovieObj[i].id);
          this.store.genreId = this.store.genreMovieObj[i].id;
        }
        // if (this.store.tvArray[i].id === this.store.genreId) {
        //   this.store.tvArray = this.store.tvArray[i];
        // }
        // console.log(this.store.genreId);
      }

      console.log(this.store.genreId);
    },

    findIt: function () {
      const paramsAxios = {
        params: {
          api_key: this.store.apiKey,
          query: this.store.searchWord,
        },
      };

      if (this.store.searchWord !== "") {
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
      } else {
        location.reload();
      }
      console.log(this.store.tvseriesArray, this.store.tvArray);
      console.log(this.store.tvArray[0].id);
    },
  },

  created() {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        params: { api_key: this.store.apiKey },
      })
      .then((resp) => {
        this.store.genreMovieObj = resp.data.genres;
      });

    console.log(this.store.genreMovieObj);

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: this.store.apiKey,
          query: "marvel",
        },
      })
      .then((resp) => {
        this.store.tvArray = resp.data.results;
      });

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: this.store.apiKey,
          query: "marvel",
        },
      })
      .then((resp) => {
        this.store.tvseriesArray = resp.data.results;
      });
  },
};
</script>

<template>
  <appHeader @generate="findIt" @keyup.enter="findIt" @genre="getIt" />
  <appBody />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
