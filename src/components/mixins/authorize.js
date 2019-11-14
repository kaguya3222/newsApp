export default {
  methods: {
    setLocalStorageUserData(userDataObj) {
      for (let property in userDataObj) {
        localStorage[property] = userDataObj[property];
        localStorage[property] = userDataObj[property];
      }
    },
    saveUserParams(login, name) {
      this.$store.dispatch("changeUserParams", {
        login,
        name
      });
    },
    authorizeUser() {
      this.$router.push("/", () => {
        if (localStorage.login && localStorage.name) {
          const login = localStorage.login;
          const name = localStorage.name;
          this.saveUserParams(login, name);
        }
      });
    }
  }
};
