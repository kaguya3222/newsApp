<template>
  <v-card class="d-flex flex-column ml-3 mb-10" min-width="220" height="230">
    <v-card-title class="flex-grow-2">{{ newsCardData.title }}</v-card-title>
    <v-card-text class="flex-grow-1">
      <p>{{ newsCardData.smallDescription }}</p>
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
  }
};
</script>
