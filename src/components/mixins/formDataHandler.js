export default {
  methods: {
    createAndFillFormData(paramsObj) {
      const formData = new FormData();
      for (const param in paramsObj) {
        formData.append(param, paramsObj[param]);
      }
      return formData;
    }
  }
};
