<template>
  <v-card
    class="d-flex flex-column ml-sm-3 mb-7 align-self-start"
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
        ><v-icon v-if="isAdmin" v-show="active" @click="deleteNewsCard(index)"
          >mdi-delete</v-icon
        ></v-btn
      >
    </v-card-title>
    <v-card-text min-height="200">
      <p>{{ briefDescription }}</p>
      <span class="font-weight-bold text-end">Дата: {{ date }}</span>
    </v-card-text>
    <v-card-actions class="flex-grow-2">
      <v-btn text color="indigo" @click="show = !show">Узнать больше</v-btn>
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
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      active: false
    };
  },
  props: {
    newsCardData: Object,
    index: Number
  },
  computed: {
    ...mapGetters(["isAdmin", "news"]),
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
  methods: {
    deleteNewsCard(index) {
      this.$store.dispatch("deleteNews", index);
      axios.delete(`http://localhost:8080/delete${this.newsCardData.id}`);
    }
  }
};
</script>
