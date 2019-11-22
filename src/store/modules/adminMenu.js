export default {
  state: {
    adminMenuOptions: [
      {
        title: "Добавить новость",
        icon: "mdi-plus-box"
      }
    ]
  },
  getters: {
    adminMenuOptions(state) {
      return state.adminMenuOptions;
    }
  }
};
