import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app.js";
import reg from "./modules/reg.js";
import auth from "./modules/auth.js";
import news from "./modules/news.js";
import userMenu from "./modules/userMenu.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    reg,
    auth,
    news,
    userMenu
  }
});
