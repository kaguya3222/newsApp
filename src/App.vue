<template>
  <div class="wrapper">
    <main-layout></main-layout>
  </div>
</template>

<script>
import MainLayout from "./views/MainLayout";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters[("login", "name", "isAuthorized")]
  },
  methods: {
    saveUserParams(login, name) {
      this.$store.dispatch("changeUserParams", {
        login,
        name
      });
    }
  },
  components: {
    "main-layout": MainLayout
  },
  created() {
    if (localStorage.login && localStorage.name) {
      const login = localStorage.login;
      const name = localStorage.name;
      this.saveUserParams(login, name);
    }
  }
};
</script>

<style lang="scss">
@import "./src/styles/styles";
</style>
