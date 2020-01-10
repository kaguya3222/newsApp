export default {
  methods: {
    shouldAppendRequiredError({ field, errors }) {
      !field.required && errors.push("Это обязательное поле!");
      return errors;
    },
    shouldAppendUniqueError({ field, errors, errorMessage }) {
      !field.isUnique && field.$error && errors.push(errorMessage);
      return errors;
    },
    shouldAppendValidError({ field, errors, errorMessage }) {
      !field.isValid && errors.push(errorMessage);
      return errors;
    }
  }
};
