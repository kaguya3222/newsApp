export default {
  state: {
    userMenuOptions: [
      {
        title: "Add news",
        showPermission: "ADMIN"
      },
      {
        title: "Exit",
        showPermission: "READER"
      }
    ]
  },
  getters: {
    userMenuOptions(state) {
      return state.userMenuOptions;
    }
  }
};
