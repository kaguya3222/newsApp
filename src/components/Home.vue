<template>
  <div
    class="wrapper d-flex flex-wrap full-height justify-center"
    :class="flexClasses"
  >
    <app-news-card
      v-for="(newsCard, index) in news"
      :key="index"
      :newsCardData="newsCard"
    ></app-news-card>
    <div class="btn-holder align-self-center ml-md-10 text-end">
      <v-btn fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import NewsCard from "./News/NewsCard";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isMobile: false
    };
  },
  computed: {
    ...mapGetters(["news"]),
    flexClasses() {
      return {
        "flex-column": this.isMobile,
        "align-center": this.isMobile,
        "flex-row": !this.isMobile
      };
    }
  },
  components: {
    "app-news-card": NewsCard
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  }
};
</script>
