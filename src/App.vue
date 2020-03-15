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
import fingerprint from "./mixins/fingerprint";
import formDataHandler from "./mixins/formDataHandler";
import tokens from "./mixins/tokens";

export default {
  data() {
    return {
      createdCounter: 0
    };
  },
  computed: {
    ...mapGetters(["login"]),
    createdOnce() {
      return this.createdCounter === 1;
    }
  },
  components: {
    "main-layout": MainLayout
  },
  methods: {
    async getUserInfo() {
      const formData = this.createAndFillFormData({
        paramsObj: {
          login: this.login,
          accessToken: localStorage.getItem("ACCESS_TOKEN")
        }
      });
      const response = await API.getUserInfo({ formData });
      this.setToken({ token: response.data, key: "ACCESS_TOKEN" });
      this.setUserParams({ userDataObj: this.$jwt.decode() });
    }
  },
  created() {
    this.createdCounter++;
    if (this.createdOnce) {
      API.getNews().then(response => {
        this.$store.dispatch("addNews", response.data);
      });
    }
    this.authorize();
    if (this.login) {
      this.getUserInfo();
    }
  },
  mixins: [userMethods, fingerprint, formDataHandler, tokens]
};
</script>

<style lang="scss">
@import "./src/styles/libraries/animate";
@import "./src/styles/styles";
</style>
