<template>
  <div class="news-wrapper d-flex flex-wrap full-height justify-sm-center">
    <app-news-card
      v-for="(newsCard, index) in news.slice().reverse()"
      :key="index"
      :newsCardData="newsCard"
      :index="index"
    ></app-news-card>
  </div>
</template>

<script>
import NewsCard from "./News/NewsCard";

import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["news", "isAdmin"])
  },
  components: {
    "app-news-card": NewsCard
  }
};
</script>
