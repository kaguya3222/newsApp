<template>
  <div class="wrapper">
    <main-layout></main-layout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";
import { mapGetters } from "vuex";
import userMethods from "./mixins/user-data-methods";

import API from "./backend-api.js";

export default {
  data() {
    return {
      createdCounter: 0
    };
  },
  computed: {
    ...mapGetters[("login", "name")],
    createdOnce() {
      return this.createdCounter === 1;
    }
  },
  components: {
    "main-layout": MainLayout
  },
  mixins: [userMethods],
  created() {
    this.createdCounter++;
    this.authorize();
    if (this.createdOnce) {
      API.getNews().then(response => {
        this.$store.dispatch("addNews", response.data);
      });
    }
  }
};
</script>

<style lang="scss">
@import "./src/styles/libraries/animate";
@import "./src/styles/styles";
</style>
