<template>
  <div class="wrapper">
    <main-layout></main-layout>
  </div>
</template>

<script>
import MainLayout from "./views/MainLayout";
import { mapGetters } from "vuex";
import authorize from "./components/mixins/authorize.js";

export default {
  computed: {
    ...mapGetters[("login", "name")]
  },
  components: {
    "main-layout": MainLayout
  },
  mixins: [authorize],
  created() {
    this.setUserParamsFromLocalStorage();
  }
};
</script>

<style lang="scss">
@import "./src/styles/libraries/animate";
@import "./src/styles/styles";
</style>
