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
import storageHandler from "../mixins/storageHandler.js";
import formDataHandler from "../mixins/formDataHandler.js";

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
      const authData = this.getCollectionData("authInfo", "value");
      const [login, password] = authData;
      const formData = this.createAndFillFormData({
        login,
        password
      });
      axios.post("http://localhost:8080/login", formData).then(response => {
        if (response.data.isAuthorized == "true") {
          const name = response.data.name;
          this.authorize(login, name);
          this.$store.dispatch("changeAuthErrorStatus", false);
        } else {
          this.$store.dispatch("changeAuthErrorStatus", true);
        }
      });
    }
  },
  components: {
    "auth-input": Input
  },
  mixins: [authorize, storageHandler, formDataHandler]
};
</script>
