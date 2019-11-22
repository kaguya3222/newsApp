<template>
  <v-card
    class="d-flex flex-column ml-3 mb-10 align-self-md-start"
    style="width: 100%; max-width: 460px;"
  >
    <v-card-title class="flex-grow-2 d-flex flex-row flex-nowrap">
      <span class="font-weight-bold" :class="titleFontSize">{{
        newsCardData.title
      }}</span>
      <v-btn
        icon
        class="ml-auto"
        @mouseover="active = true"
        @mouseleave="active = false"
        v-if="isAdmin"
        ><v-icon v-if="isAdmin" v-show="active">mdi-delete</v-icon></v-btn
      >
    </v-card-title>
    <v-card-text min-height="200">
      <p>{{ briefDescription }}</p>
      <span class="font-weight-bold text-end">Date: {{ date }}</span>
    </v-card-text>
    <v-card-actions class="flex-grow-2">
      <v-btn text color="indigo" @click="show = !show">Learn more</v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ this.newsCardData.fullDescription }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
      active: false
    };
  },
  props: {
    newsCardData: Object
  },
  computed: {
    ...mapGetters(["isAdmin"]),
    date() {
      return this.newsCardData.date.slice(0, 10);
    },
    briefDescription() {
      const description = this.newsCardData.briefDescription;
      return description.length > 100
        ? description.slice(0, 100) + "..."
        : description;
    },
    titleFontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "body-1";
        case "sm":
          return "subtitle-2";
        case "md":
          return "subtitle-1";
        case "lg":
          return "title";
      }
      return "";
    }
  },
  methods: {}
};
</script>
