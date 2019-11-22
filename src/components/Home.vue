<template>
  <div class="news-wrapper d-flex flex-wrap full-height" :class="flexClasses">
    <app-news-card
      v-for="(newsCard, index) in news"
      :key="index"
      :newsCardData="newsCard"
      class="news-card"
      @cardsLoaded="onCardsLoaded()"
    ></app-news-card>
    <div
      class="btn-holder align-self-sm-start ml-sm-10"
      v-if="isAdmin"
      :style="btnMargin"
    >
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
      cardsLoaded: false,
      isMobile: false,
      btnMargin: {
        "margin-top": 0 + "px"
      }
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
    },
    onCardsLoaded() {
      this.cardsLoaded = true;
    },
    getButtonMargin() {
      if (this.cardsLoaded) {
        const btn = document.querySelector(".btn-holder");
        const card = document.querySelectorAll(".news-card");
        const lastCard = card[card.length - 1];
        const marginTop =
          (lastCard.getBoundingClientRect().height -
            btn.getBoundingClientRect().height) /
            2 +
          "px";
        this.btnMargin = {
          "margin-top": this.isMobile ? 0 + "px" : marginTop
        };
      }
    }
  },
  watch: {
    cardsLoaded: function() {
      this.getButtonMargin();
    },
    isMobile: function() {
      if (this.cardsLoaded && this.isAdmin) {
        this.getButtonMargin();
      }
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  }
};
</script>
