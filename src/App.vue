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
};
</script>

<template></template>

<style lang="scss">
@use "./style/general.scss";
</style>
