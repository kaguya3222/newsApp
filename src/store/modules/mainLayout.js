export default {
  state: {
    snackBar: {
      message: null,
      show: false
    }
  },
  getters: {
    snackBar(state) {
      return state.snackBar;
    }
  },
  mutations: {
    mutateSnackBar(state, { payLoad }) {
      state.snackBar[payLoad.propName] = payLoad.value;
    }
  },
  actions: {
    changeSnackBar(store, { payLoad }) {
      store.commit("mutateSnackBar", { payLoad });
    },
    closeSnackBar(store) {
      store.commit("mutateSnackBar", {
        payLoad: {
          propName: "show",
          value: false
        }
      });
    },
    openSnackBar(store, { payLoad }) {
      store.commit("mutateSnackBar", {
        payLoad: {
          propName: "show",
          value: true
        }
      });
      store.commit("mutateSnackBar", {
        payLoad: {
          propName: "message",
          value: payLoad
        }
      });
    }
  }
};
