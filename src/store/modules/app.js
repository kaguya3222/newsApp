import Vue from "vue";

export default {
  state: {
    userParams: {}
  },
  getters: {
    login(state) {
      return state.userParams.login;
    },
    name(state) {
      return state.userParams.name;
    },
    role(state) {
      return state.userParams.role;
    },
    likedNewsIds(state) {
      return state.userParams.likedNewsIds;
    },
    isAuthorized(state) {
      return !!state.userParams.login;
    },
    isAdmin(state) {
      return state.userParams.role === "ADMIN";
    }
  },
  mutations: {
    mutateUserParams: function(state, payLoad) {
      for (const property in payLoad) {
        Vue.set(state.userParams, property, payLoad[property]);
      }
    }
  },
  actions: {
    changeUserParams(store, payLoad) {
      store.commit("mutateUserParams", payLoad);
    }
  }
};
