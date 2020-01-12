<template>
  <div class="wrapper">
    <main-layout></main-layout>
  </div>
</template>

<script>
import MainLayout from "./views/MainLayout";
import { mapGetters } from "vuex";
import authorize from "./components/mixins/authorize.js";

import AXIOS from "./backend-api.js";

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
  methods: {
    getNews() {
      return AXIOS.get("/getAll");
    }
  },
  components: {
    "main-layout": MainLayout
  },
  mixins: [authorize],
  created() {
    this.createdCounter++;
    this.setUserParamsFromLocalStorage();
    if (this.createdOnce) {
      this.getNews().then(response => {
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
