export default {
  state: {
    userMenuOptions: [
      {
        title: "Добавить новость",
        showPermission: "ADMIN"
      },
      {
        title: "Выйти",
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
