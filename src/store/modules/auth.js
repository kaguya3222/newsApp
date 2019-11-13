export default {
  state: {
    authInfo: [
      {
        label: "Login",
        value: "",
        type: "text"
      },
      {
        label: "Password",
        value: "",
        type: "password"
      }
    ]
  },
  getters: {
    authInfo(state) {
      return state.authInfo;
    }
  }
};
