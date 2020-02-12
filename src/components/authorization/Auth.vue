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
        @form-changed="onFormChanged($event)"
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

import API from "../../backend-api.js";

import userMethods from "../mixins/user-data-methods";
import storageHandler from "../mixins/storageHandler.js";
import formDataHandler from "../mixins/formDataHandler.js";
import tokens from "../mixins/tokens.js";
import fingerprint from "../mixins/fingerprint";

export default {
  data() {
    return {
      form: {
        login: null,
        password: null
      },
      isLoading: false,
      isSubmited: false
    };
  },
  computed: {
    ...mapGetters(["authInfo", "errorStatus", "isAuthorized"]),
    isDisabled() {
      return this.isSubmited ? true : !(this.form.login && this.form.password);
    }
  },
  methods: {
    async sendAuthData() {
      this.buttonClicked({ status: true });
      const fingerprint = await this.getFingerPrint();
      const { login, password } = this.form;
      const formData = this.createAndFillFormData({
        paramsObj: { login, password, fingerprint }
      });
      const response = await API.login({ formData });
      this.sendAuthDataCallback({ response: response.data });
    },
    buttonClicked({ status }) {
      this.isSubmited = status;
      this.isLoading = status;
    },
    sendAuthDataCallback({ response }) {
      const isWrong = response.accessToken == null;
      this.$store.dispatch("changeAuthErrorStatus", isWrong);
      this.buttonClicked({ status: false });
      if (!isWrong) {
        this.sendDataButtonClicked({ data: response });
      }
    },
    onFormChanged(e) {
      this.form[e.fieldName] = e.value;
    }
  },
  components: {
    "auth-input": Input
  },
  mixins: [userMethods, storageHandler, formDataHandler, tokens, fingerprint],
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("changeAuthErrorStatus", false);
    next(true);
  }
};
</script>
