<template>
  <v-form
    class="d-flex flex-column justify-center align-center full-height full-width"
  >
    <v-container class="d-flex flex-column justify-center align-center">
      <v-text-field
        v-model="$v.title.$model"
        id="title"
        required
        :error-messages="titleErrors"
        label="Заголовок"
        class="input-field-width"
      ></v-text-field>

      <v-textarea
        v-model="$v.briefDescription.$model"
        required
        :error-messages="briefDescriptionErrors"
        label="Краткое описание"
        class="input-field-width"
      ></v-textarea>

      <v-textarea
        v-model="$v.fullDescription.$model"
        required
        :error-messages="fullDescriptionErrors"
        label="Полное описание"
        class="input-field-width"
      >
      </v-textarea>
      <v-btn
        color="indigo"
        :disabled="isDisabled"
        :loading="isLoading"
        :dark="!isDisabled"
        @click="sendCreateRequest"
        >Создать</v-btn
      >
    </v-container>
  </v-form>
</template>

<script>
import API from "../backend-api.js";

import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

import formDataHandler from "../mixins/formDataHandler.js";
import { mapGetters } from "vuex";

import tokens from "../mixins/tokens";

export default {
  mixins: [validationMixin, formDataHandler, tokens],
  data() {
    return {
      title: "",
      briefDescription: "",
      fullDescription: "",
      isLoading: false
    };
  },
  methods: {
    async sendCreateRequest() {
      this.changeIsLoadingStatus();
      this.doTokenRequiredAction({ action: this.createNews });
    },
    async createNews() {
      const newsCardData = this.createAndFillFormData({
        paramsObj: {
          login: this.login,
          briefDescription: this.briefDescription,
          fullDescription: this.fullDescription,
          title: this.title,
          token: localStorage.getItem("ACCESS_TOKEN") || null
        }
      });
      const response = await API.createNewsCard({ newsCardData });
      this.sendCreateRequestCallback(response);
    },
    sendCreateRequestCallback(response) {
      const isAdded = response.data.isAdded == "true";
      if (isAdded) {
        this.$router.push("/", () => {
          this.changeIsLoadingStatus();
          this.$store.dispatch("addNews", [
            {
              briefDescription: response.data.brief_description,
              date: response.data.date,
              fullDescription: response.data.full_description,
              id: response.data.id,
              title: response.data.title
            }
          ]);
        });
      }
    },
    changeIsLoadingStatus() {
      this.isLoading = !this.isLoading;
    }
  },
  computed: {
    ...mapGetters(["news", "login"]),
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.maxLength &&
        errors.push("Максимальная длинна заголовка 50 символов!");
      !this.$v.title.required && errors.push("Это обязательное поле!");
      return errors;
    },
    briefDescriptionErrors() {
      const errors = [];
      if (!this.$v.briefDescription.$dirty) return errors;
      !this.$v.briefDescription.maxLength &&
        errors.push("Максимальная длинна краткого описания 200 символов!");
      !this.$v.briefDescription.required &&
        errors.push("Это обязательное поле!");
      return errors;
    },
    fullDescriptionErrors() {
      const errors = [];
      if (!this.$v.fullDescription.$dirty) return errors;
      !this.$v.fullDescription.maxLength &&
        errors.push("Максимальная длинна полного описания 2500 символов!");
      !this.$v.fullDescription.required &&
        errors.push("Это обязательное поле!");
      return errors;
    },
    isDisabled() {
      return this.$v.$invalid || this.isLoading;
    }
  },
  validations: {
    title: { required, maxLength: maxLength(50) },
    briefDescription: { required, maxLength: maxLength(200) },
    fullDescription: { required, maxLength: maxLength(2500) }
  }
};
</script>
