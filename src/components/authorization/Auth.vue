<template>
  <v-form
    class="d-flex flex-column justify-center align-center full-height full-width"
  >
    <v-container class="d-flex flex-column justify-center align-center">
      <auth-input
        v-for="(field, index) in authInfo"
        :field="field"
        :index="index"
        :key="index"
      ></auth-input>
      <div v-if="errorStatus" class="animated fadeIn">
        <p class="error-text">
          Неправильный логин или пароль
        </p>
      </div>
      <v-btn
        color="indigo"
        :dark="!isDisabled"
        :disabled="isDisabled"
        @click="sendAuthData()"
        >Sign in</v-btn
      >
    </v-container>
  </v-form>
</template>

<script>
import Input from "./Input";

import { mapGetters } from "vuex";

import axios from "axios";
import authorize from "../mixins/authorize.js";

export default {
  computed: {
    ...mapGetters(["authInfo", "errorStatus"]),
    isDisabled() {
      return this.authInfo.some(el => {
        return el.isFilled === false;
      });
    }
  },
  methods: {
    sendAuthData() {
      const authData = this.authInfo.map(el => {
        return el.value;
      });
      const [login, password] = authData;
      const formData = new FormData();
      formData.append("login", login);
      formData.append("password", password);
      return axios
        .post("http://localhost:8080/login", formData)
        .then(response => {
          const isAuthorized = Boolean(response.data.isAuthorized);
          if (isAuthorized === true) {
            const name = response.data.name;
            this.setLocalStorageUserData({
              login,
              name
            });
            this.authorizeUser();
          } else {
            this.$store.dispatch("changeAuthErrorStatus", true);
          }
        });
    }
  },
  components: {
    "auth-input": Input
  },
  mixins: [authorize]
};
</script>
