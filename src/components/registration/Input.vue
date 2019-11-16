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
    ...mapGetters(["regInfo"]),
    checkIfFieldNeedsRequest() {
      const requestName = this.field.requestName;
      return requestName === "" ? "No request" : "Request";
    }
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
        if (value !== "") {
          this.checkField();
        }
      }, 100);
    },
    validateField(checkResult, errorMessage) {
      errorMessage = checkResult ? "" : errorMessage;
      this.changeValidateResult(checkResult, errorMessage);
      this.changeErrorStatus(!checkResult, this.index);
    },
    checkField() {
      const {
        value,
        label,
        commonError,
        pattern,
        requestName,
        existsError
      } = this.field;
      if (label === "Confirm password") {
        const passwordValue = this.regInfo[this.index - 1].value;
        const checkResult = this.checkPassword(value, passwordValue);
        this.validateField(checkResult, "Пароли не совпадают!");
      } else if (pattern.test(value)) {
        this.checkFieldCallback({
          value,
          label,
          requestName,
          checkResult: true,
          commonError,
          existsError
        });
      } else {
        this.validateField(false, commonError);
      }
    },
    checkFieldCallback(params) {
      const { value, label, requestName } = params;
      if (this.checkIfFieldNeedsRequest === "No request") {
        const checkResult = params.checkResult;
        const commonError = params.commonError;
        this.validateField(checkResult, commonError);
      } else {
        const existsError = params.existsError;
        this.handleCheckIfParamExistsResponse(
          { name: label.toLowerCase(), value },
          requestName,
          existsError
        );
      }
    },
    checkIfParamExists(paramObj, requestName) {
      const formData = new FormData();
      const paramName = paramObj.name;
      const paramValue = paramObj.value;
      formData.append(paramName, paramValue);

      return axios
        .post(`http://localhost:8080/${requestName}`, formData)
        .then(response => {
          return response.data.isExist;
        });
    },
    handleCheckIfParamExistsResponse(paramObj, requestName, errorMessage) {
      this.checkIfParamExists(paramObj, requestName).then(response => {
        this.validateField(!response, errorMessage);
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
