<template>
  <div class="wrapper">
    <component :is="layout"></component>
  </div>
</template>

<script>
import MainLayout from "./views/MainLayout";

export default {
  data() {
    return {
      login: "",
      pass: ""
    };
  },
  computed: {
    layout() {
      return this.$route.meta.layout + "-layout";
    }
  },
  components: {
    "main-layout": MainLayout
  }
};
</script>
