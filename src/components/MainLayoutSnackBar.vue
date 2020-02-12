<template>
  <v-snackbar v-model="snackBar.show">
    {{ snackBar.message }}
    <v-btn color="pink" text @click="closeSnackBar()">
      Понятно
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["snackBar"])
  },
  methods: {
    ...mapActions(["closeSnackBar"])
  }
};
</script>
