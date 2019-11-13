<template>
  <v-text-field
    :label="field.label"
    :type="field.type"
    class="input-field-width"
  >
  </v-text-field>
</template>

<script>
export default {
  props: {
    field: Object,
    index: Number
  }
};
</script>
