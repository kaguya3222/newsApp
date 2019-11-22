<template>
  <div
    class="news-wrapper d-flex flex-wrap full-height justify-center"
    :class="flexClasses"
  >
    <app-news-card
      v-for="(newsCard, index) in news"
      :key="index"
      :newsCardData="newsCard"
      class="news-card"
    ></app-news-card>
    <div
      class="btn-holder align-self-sm-start ml-sm-10"
      v-if="isAdmin"
      :style="btnMargin"
    ></div>
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
    ...mapGetters(["news", "isAdmin"]),
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
