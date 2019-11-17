export default {
  methods: {
    setLocalStorageUserData(userDataObj) {
      for (let property in userDataObj) {
        localStorage[property] = userDataObj[property];
        localStorage[property] = userDataObj[property];
      }
    },
    setUserParams(login, name) {
      this.$store.dispatch("changeUserParams", {
        login,
        name
      });
    },
    setUserParamsFromLocalStorage() {
      if (localStorage.login && localStorage.name) {
        const login = localStorage.login;
        const name = localStorage.name;
        this.setUserParams(login, name);
      }
    },
    sendDataButtonClicked() {
      this.$router.push("/", () => {
        this.setUserParamsFromLocalStorage();
      });
    },
    authorize(login, name) {
      this.setLocalStorageUserData({
        login,
        name
      });
      this.sendDataButtonClicked();
    }
  }
};
