<template>
  <div class="ml-auto" v-if="isAuthorized">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn icon color="indigo">
          <v-icon
            v-on="on"
            @click="doTokenRequiredAction({ action: increaseOrReduceLikesNum })"
            >mdi-thumb-up{{ outline }}</v-icon
          >
        </v-btn>
      </template>
      <span>
        {{ likesNum }}
      </span>
    </v-tooltip>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import API from "@/backend-api.js";
import formDataHandler from "@/mixins/formDataHandler";
import tokens from "@/mixins/tokens";

export default {
  props: {
    index: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      isAlreadyLiked: false
    };
  },
  computed: {
    ...mapGetters(["news", "isAuthorized", "likedNewsIds"]),
    likesNum() {
      return this.news[this.index].likesNum;
    },
    newsId() {
      return this.news[this.index].id;
    },
    outline() {
      return this.isAlreadyLiked ? "" : "-outline";
    }
  },
  methods: {
    increaseOrReduceLikesNum() {
      const newsCardData = this.createAndFillFormData({
        paramsObj: {
          id: this.news[this.index].id,
          token: localStorage.getItem("ACCESS_TOKEN") || null
        }
      });
      this.isAlreadyLiked
        ? this.reduceLikesNum({ newsCardData })
        : this.increaseLikesNum({ newsCardData });
      this.isAlreadyLiked = !this.isAlreadyLiked;
    },
    increaseLikesNum({ newsCardData }) {
      this.$store.dispatch("changeLikesNum", {
        payLoad: { index: this.index, number: 1 }
      });
      API.increaseLikesNum({ newsCardData });
    },
    reduceLikesNum({ newsCardData }) {
      this.$store.dispatch("changeLikesNum", {
        payLoad: { index: this.index, number: -1 }
      });
      API.reduceLikesNum({ newsCardData });
    }
  },
  mounted() {
    this.isAlreadyLiked = this.likedNewsIds.includes(this.newsId);
  },
  mixins: [tokens, formDataHandler]
};
</script>
