<template>
  <v-form
    class="d-flex flex-column justify-center align-center full-height full-width"
  >
    <v-container
      class="d-flex flex-column justify-center align-center"
      v-if="!isAuthorized"
    >
      <reg-input
        v-for="(field, index) in regInfo"
        :key="index"
        :field="field"
        :index="index"
      ></reg-input>
      <v-btn
        color="indigo"
        :disabled="isDisabled"
        :dark="!isDisabled"
        @click="sendRegData()"
        :loading="isLoading"
        >Зарегистрироваться</v-btn
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
    ...mapGetters(["regInfo", "isAuthorized"]),
    isDisabled() {
      return this.isSubmited
        ? true
        : this.checkCollectionData("regInfo", "errorStatus", true);
    }
  },
  methods: {
    sendRegData() {
      const regData = this.getCollectionData("regInfo", "value");
      const [login, name, email, password] = regData;
      const formData = this.createAndFillFormData({
        login,
        name,
        email,
        password
      });
      this.buttonClicked(true);

      axios.post("http://localhost:8080/register", formData).then(() => {
        this.buttonClicked(false);
        this.authorize(login, name);
      });
    },
    buttonClicked(status) {
      this.isLoading = status;
      this.isSubmited = status;
    }
  },
  components: {
    "reg-input": Input
  },
  mixins: [authorize, storageHandler, formDataHandler]
};
</script>
