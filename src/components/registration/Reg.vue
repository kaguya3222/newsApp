<template>
  <v-form
    class="d-flex flex-column justify-center align-center full-height full-width"
  >
    <v-container class="d-flex flex-column justify-center align-center">
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
        >Sign up</v-btn
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
  data() {
    return {
      isLoading: false,
      isSubmited: false
    };
  },
  computed: {
    ...mapGetters(["regInfo"]),
    isDisabled() {
      if (this.isSubmited) {
        return true;
      } else {
        return this.checkCollectionData("regInfo", "errorStatus");
      }
    }
  },
  methods: {
    sendRegData() {
      const regData = this.regInfo.map(el => {
        return el.value;
      });
      const [login, name, email, password] = regData;
      const formData = new FormData();
      formData.append("login", login);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("name", name);
      this.buttonClicked(true);

      axios.post("http://localhost:8080/register", formData).then(() => {
        this.buttonClicked(false);
        this.setLocalStorageUserData({
          login,
          name
        });
        this.authorizeUser();
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
