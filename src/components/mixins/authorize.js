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
    saveUserParams() {
      this.$router.push("/", () => {
        if (localStorage.login && localStorage.name) {
          const login = localStorage.login;
          const name = localStorage.name;
          this.setUserParams(login, name);
        }
      });
    },
    authorize(login, name) {
      this.setLocalStorageUserData({
        login,
        name
      });
      this.saveUserParams();
    }
  }
};
