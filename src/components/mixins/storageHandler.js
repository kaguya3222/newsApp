export default {
  methods: {
    getCollectionData(itemName, fieldName) {
      return this[itemName].map(el => {
        return el[fieldName];
      });
    },
    checkCollectionData(itemName, fieldName, checkValue) {
      return this[itemName].some(el => {
        return el[fieldName] === checkValue;
      });
    }
  }
};
