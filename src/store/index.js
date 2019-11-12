import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app.js";
import reg from "./modules/reg.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    reg
  }
});
