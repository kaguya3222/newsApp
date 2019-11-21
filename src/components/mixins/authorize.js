export default {
  methods: {
    setLocalStorageUserData(userDataObj) {
      for (let property in userDataObj) {
        localStorage[property] = userDataObj[property];
        localStorage[property] = userDataObj[property];
      }
    },
    setUserParams(login, name, role) {
      this.$store.dispatch("changeUserParams", {
        login,
        name,
        role
      });
    },
    setUserParamsFromLocalStorage() {
      if (localStorage.login) {
        const login = localStorage.login;
        const name = localStorage.name;
        const role = localStorage.role;
        this.setUserParams(login, name, role);
      }
    },
    sendDataButtonClicked() {
      this.$router.push("/", () => {
        this.setUserParamsFromLocalStorage();
      });
    },
    authorize(login, name, role = "READER") {
      this.setLocalStorageUserData({
        login,
        name,
        role
      });
      this.sendDataButtonClicked();
    }
  }
};
