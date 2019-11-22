<template>
  <v-card
    class="d-flex flex-column ml-3 mb-10 align-self-md-start"
    :style="cardStyles"
  >
    <v-card-title class="flex-grow-2 d-flex flex-row">
      <span>{{ newsCardData.title }}</span>
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
    cardStyles() {
      return {
        width: this.show ? "400px" : "250px",
        transition: "width 0.3s ease-in-out"
      };
    }
  },
  methods: {},
  mounted() {
    this.$emit("cardsLoaded");
  }
};
</script>
