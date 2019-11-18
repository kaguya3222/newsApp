<template>
  <v-form
    class="d-flex flex-column justify-center align-center full-height full-width"
  >
    <v-container
      class="d-flex flex-column justify-center align-center"
      v-if="!isAuthorized"
    >
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
        :loading="isLoading"
        @click="sendAuthData()"
        >Войти</v-btn
      >
    </v-container>
    <div class="message d-flex flex-column align-center" v-if="isAuthorized">
      <p>Вы уже вошли в систему</p>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
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
  data() {
    return {
      isLoading: false,
      isSubmited: false
    };
  },
  computed: {
    ...mapGetters(["authInfo", "errorStatus", "isAuthorized"]),
    isDisabled() {
      return this.isSubmited
        ? true
        : this.checkCollectionData("authInfo", "isFilled", false);
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
      this.buttonClicked(true);
      axios.post("http://localhost:8080/login", formData).then(response => {
        if (response.data.isAuthorized == "true") {
          const name = response.data.name;
          const role = response.data.role;
          this.buttonClicked(false);
          this.authorize(login, name, role);
          this.$store.dispatch("changeAuthErrorStatus", false);
        } else {
          this.$store.dispatch("changeAuthErrorStatus", true);
          this.buttonClicked(false);
        }
      });
    },
    buttonClicked(status) {
      this.isSubmited = status;
      this.isLoading = status;
    }
  },
  components: {
    "auth-input": Input
  },
  mixins: [authorize, storageHandler, formDataHandler]
};
</script>
