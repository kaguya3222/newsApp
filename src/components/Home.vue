<template>
  <div class="wrapper d-flex flex-wrap justify-center full-height">
    <app-news-card
      v-for="(newsCard, index) in news"
      :key="index"
      :newsCardData="newsCard"
    ></app-news-card>
  </div>
</template>

<script>
import NewsCard from "./News/NewsCard";

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["news"])
  },
  components: {
    "app-news-card": NewsCard
  }
};
</script>
