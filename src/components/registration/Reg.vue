<template>
  <v-form
    class="d-flex flex-column justify-center align-center full-height full-width"
  >
    <v-container class="d-flex flex-column justify-center align-center">
      <app-input
        v-for="(field, index) in regInfo"
        :key="index"
        :field="field"
        :index="index"
      ></app-input>
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
        return this.regInfo.some(el => {
          return el.errorStatus === true;
        });
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
      this.isLoading = true;
      this.isSubmited = true;

      axios.post("http://localhost:8080/register", formData).then(() => {
        this.isLoading = false;
        this.isSubmited = false;
        this.setLocalStorageUserData({
          login,
          name
        });
        this.$router.push("/", () => {
          if (localStorage.login && localStorage.name) {
            const login = localStorage.login;
            const name = localStorage.name;
            this.saveUserParams(login, name);
          }
        });
      });
    },
    setLocalStorageUserData(userDataObj) {
      for (let property in userDataObj) {
        localStorage[property] = userDataObj[property];
        localStorage[property] = userDataObj[property];
      }
    },
    saveUserParams(login, name) {
      this.$store.dispatch("changeUserParams", {
        login,
        name
      });
    }
  },
  components: {
    "app-input": Input
  }
};
</script>
