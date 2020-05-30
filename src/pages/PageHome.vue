<template>
  <div class="d-flex flex-column full-height">
    <v-progress-circular
      class="align-self-center"
      indeterminate
      color="primary"
      v-if="areNewsLoaded"
    ></v-progress-circular>
    <transition-group
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      class="news-wrapper d-flex flex-wrap justify-sm-center full-width"
      tag="div"
    >
      <app-news-card
        v-for="(newsCard, index) in news"
        :key="newsCard.id"
        :index="index"
      ></app-news-card>
    </transition-group>
  </div>
</template>

<script>
import NewsCard from "../components/News/PageHomeNewsCard";

import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["news", "isAdmin"]),
    areNewsLoaded() {
      return this.news.length === 0;
    }
  },
  components: {
    "app-news-card": NewsCard
  }
};
</script>

<style lang="scss" scoped>
.animated {
  animation-duration: 0.5s;
  transition-duration: 0.5s;
}
</style>
