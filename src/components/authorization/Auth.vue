<template>
  <v-form
    class="d-flex flex-column justify-center align-center full-height full-width"
  >
    <v-container class="d-flex flex-column justify-center align-center">
      <auth-input
        v-for="(field, index) in authInfo"
        :field="field"
        :index="index"
        :key="index"
      ></auth-input>
    </v-container>
  </v-form>
</template>

<script>
import Input from "./Input";

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["authInfo"])
  },
  components: {
    "auth-input": Input
  }
};
</script>
