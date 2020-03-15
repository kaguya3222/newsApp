export default {
  methods: {
    setUserParams({ userDataObj }) {
      const { login, name, role, likedNewsIds } = userDataObj;
      this.$store.dispatch("changeUserParams", {
        login,
        name,
        role,
        likedNewsIds
      });
    },
    sendDataButtonClicked({ data }) {
      this.setTokens({ data });
      this.$router.push("/", () => {
        this.authorize();
      });
    },
    async authorize() {
      if (!this.$jwt.hasToken()) return true;
      const payLoad = this.$jwt.decode();
      this.setUserParams({ userDataObj: payLoad });
    },
    userExit({ path }) {
      this.removeTokens();
      this.clearUserParams();
      if (this.$router.history.current.path !== path) this.$router.push(path);
    },
    clearUserParams() {
      this.setUserParams({
        userDataObj: { login: null, name: null, role: null }
      });
    }
  }
};
