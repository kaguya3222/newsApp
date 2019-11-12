<template>
  <v-text-field
    :label="field.label"
    @input="onInput($event, index)"
    class="input-field-width"
    :type="field.type"
    :success="validateResult.isSuccess"
    :error-messages="validateResult.errorMessage"
  ></v-text-field>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  props: {
    field: Object,
    index: Number
  },
  data() {
    return {
      validateResult: {
        isSuccess: false,
        errorMessage: ""
      },
      timeout: null
    };
  },
  computed: {
    ...mapGetters(["regInfo"])
  },
  methods: {
    onInput(e, index) {
      const value = e;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.$store.dispatch("changeRegInfoValue", {
          value,
          index
        });
        this.validateField();
      }, 100);
    },
    validateField() {
      const label = this.field.label;
      const pattern = this.field.pattern;
      const value = this.field.value;
      const errorMessage = this.field.errorMessage;
      if (this.value !== "") {
        if (label === "Confirm password") {
          if (this.checkPassword(value, this.regInfo[3].value)) {
            this.changeValidateResult(true, "");
            this.changeErrorStatus(false, this.index);
          } else {
            this.changeValidateResult(false, "Пароли не совпадают!");
            this.changeErrorStatus(true, this.index);
          }
        } else if (pattern.test(value)) {
          if (label === "Login") {
            this.checkLogin(value).then(response => {
              if (response === false) {
                this.changeValidateResult(true, "");
                this.changeErrorStatus(false, this.index);
              } else {
                this.changeValidateResult(false, "Такой логин уже есть!");
                this.changeErrorStatus(true, this.index);
              }
            });
          } else if (label === "Email") {
            this.checkEmail(value).then(response => {
              if (response === false) {
                this.changeValidateResult(true, "");
                this.changeErrorStatus(false, this.index);
              } else {
                this.changeValidateResult(false, "Такая почта уже есть!");
                this.changeErrorStatus(true, this.index);
              }
            });
          } else {
            this.changeValidateResult(true, "");
            this.changeErrorStatus(false, this.index);
          }
        } else {
          this.changeValidateResult(false, errorMessage);
          this.changeErrorStatus(true, this.index);
        }
      }
    },
    checkLogin(login) {
      const formData = new FormData();
      formData.append("login", login);

      return axios
        .post("http://localhost:8080/checkLogin", formData)
        .then(response => {
          return response.data.isExist;
        });
    },
    checkEmail(email) {
      const formData = new FormData();
      formData.append("email", email);

      return axios
        .post("http://localhost:8080/checkEmail", formData)
        .then(response => {
          return response.data.isExist;
        });
    },
    checkPassword(confirmPasswordValue, passwordValue) {
      return confirmPasswordValue === passwordValue ? true : false;
    },
    changeValidateResult(isSuccess, errorMessage) {
      this.validateResult = {
        isSuccess,
        errorMessage
      };
    },
    changeErrorStatus(status, index) {
      this.$store.dispatch("changeErrorStatus", {
        status,
        index
      });
    }
  }
};
</script>
