<template>
  <v-form
    class="d-flex flex-column justify-center align-center full-height full-width"
  >
    <v-container
      class="d-flex flex-column justify-center align-center"
      v-if="!isSubmitted"
    >
      <v-text-field
        v-model="$v.form.name.$model"
        id="name"
        label="Имя"
        class="input-field-width"
        :error-messages="nameErrors"
        :success="!$v.form.name.$invalid"
      ></v-text-field>

      <v-text-field
        v-model="$v.form.surname.$model"
        id="surname"
        label="Фамилия"
        class="input-field-width"
        :error-messages="surnameErrors"
        :success="!$v.form.surname.$invalid"
      ></v-text-field>

      <v-textarea
        v-model="$v.form.wish.$model"
        label="Ваше пожелание..."
        id="wish"
        class="autogrow mb-1"
        style="width: 250px"
        :error-messages="wishErrors"
        :success="!$v.form.wish.$invalid"
      ></v-textarea>

      <v-btn
        color="indigo"
        :disabled="isDisabled"
        :dark="!isDisabled"
        :loading="isSending"
        @click="sendWish"
        >Отправить</v-btn
      >
    </v-container>
    <div class="message d-flex flex-column align center" v-else>
      <p>Спасибо за пожелание!</p>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </v-form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import validators from "../mixins/validators.js";
import { validationMixin } from "vuelidate";
import formDataHandler from "../mixins/formDataHandler";

export default {
  data() {
    return {
      isSending: false,
      isSubmitted: false,
      form: {
        name: null,
        surname: null,
        wish: null
      }
    };
  },
  validations: {
    form: {
      name: { required },
      surname: { required },
      wish: { required }
    }
  },
  computed: {
    nameErrors() {
      let errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      errors = this.checkIfErrorShouldAppend({
        field: this.$v.form.name,
        errors,
        errorMessage: "Это поле обязательно!",
        errorType: "required"
      });
      return errors;
    },
    surnameErrors() {
      let errors = [];
      if (!this.$v.form.surname.$dirty) return errors;
      errors = this.checkIfErrorShouldAppend({
        field: this.$v.form.surname,
        errors,
        errorMessage: "Это поле обязательно!",
        errorType: "required"
      });
      return errors;
    },
    wishErrors() {
      let errors = [];
      if (!this.$v.form.wish.$dirty) return errors;
      errors = this.checkIfErrorShouldAppend({
        field: this.$v.form.wish,
        errors,
        errorMessage: "Это поле обязательно!",
        errorType: "required"
      });
      return errors;
    },
    isDisabled() {
      return this.$v.$invalid || this.isSending;
    }
  },
  methods: {
    async sendWish() {
      this.$v.form.$touch();
      if (this.$v.form.$invalid) return true;
      const wishes = this.createAndFillFormData({
        paramsObj: this.form
      });
      this.isSending = true;

      //AJAX-request should be here instead of setTimeout function
      setTimeout(() => {
        console.log(wishes + " is sended!");
        this.isSending = false;
        this.isSubmitted = true;
      }, 3000);
    }
  },
  mixins: [validators, validationMixin, formDataHandler]
};
</script>
