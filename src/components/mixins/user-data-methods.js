/**
 * This mixin provides methods that works with user data.
 */

export default {
  methods: {
    /**
     * Saves user information in vuex storage.
     * @param {object} userDataObj - object of user data.
     */
    setUserParams({ userDataObj }) {
      const { login, name, role } = userDataObj;
      this.$store.dispatch("changeUserParams", {
        login,
        name,
        role
      });
    },
    /**
     * Moves user to the main page after with authorization button was clicked.
     */
    sendDataButtonClicked({ data }) {
      this.setTokens({ data });
      this.$router.push("/", () => {
        this.authorize();
      });
    },
    /**
     * Authorizes user.
     * @param {string} login - User's login
     * @param {string} name - User's name
     * @param {string} role - User's role
     */
    authorize() {
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
