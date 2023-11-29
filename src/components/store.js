import { reactive } from "vue";

export const store = reactive({
  searchWord: "",
  tvArray: [],
  initialUrl: "https://image.tmdb.org/t/p/original",
});
