<template>
  <v-card
    class="d-flex flex-column ml-3 mb-10 align-self-md-start"
    max-width="250"
    style="width: 100%;"
  >
    <v-card-title class="flex-grow-2">{{ newsCardData.title }}</v-card-title>
    <v-card-text min-height="200">
      <p>{{ briefDescription }}</p>
      <span class="font-weight-bold text-end">Date: {{ date }}</span>
    </v-card-text>
    <v-card-actions class="flex-grow-2">
      <v-btn text color="indigo">Learn more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    newsCardData: Object
  },
  computed: {
    date() {
      return this.newsCardData.date.slice(0, 10);
    },
    briefDescription() {
      const description = this.newsCardData.briefDescription;
      return description.length > 100
        ? description.slice(0, 100) + "..."
        : description;
    }
  }
};
</script>
