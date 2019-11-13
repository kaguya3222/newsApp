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
        this.checkField();
      }, 100);
    },
    validateField(checkResult, errorMessage) {
      errorMessage = checkResult ? "" : errorMessage;
      this.changeValidateResult(checkResult, errorMessage);
      this.changeErrorStatus(!checkResult, this.index);
    },
    checkField() {
      const label = this.field.label;
      const pattern = this.field.pattern;
      const value = this.field.value;
      const errorMessage = this.field.errorMessage;
      if (this.value !== "") {
        if (label === "Confirm password") {
          const passwordValue = this.regInfo[this.index - 1].value;
          const checkResult = this.checkPassword(value, passwordValue);
          this.validateField(checkResult, "Пароли не совпадают!");
        } else if (pattern.test(value)) {
          if (label === "Login") {
            this.checkLogin(value).then(response => {
              const checkResult = !response;
              this.validateField(checkResult, "Такой логин уже есть!");
            });
          } else if (label === "Email") {
            this.checkEmail(value).then(response => {
              const checkResult = !response;
              this.validateField(checkResult, "Такая почта уже есть!");
            });
          } else {
            const checkResult = true;
            this.validateField(checkResult, "");
          }
        } else {
          const checkResult = false;
          this.validateField(checkResult, errorMessage);
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
