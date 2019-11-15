export default {
  methods: {
    getCollectionData(itemName, fieldName) {
      return this[itemName].map(el => {
        return el[fieldName];
      });
    }
  }
};
