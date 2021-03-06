import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app.js";
import auth from "./modules/auth.js";
import news from "./modules/news.js";
import adminMenu from "./modules/adminMenu.js";
import mainLayout from "./modules/mainLayout";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    auth,
    news,
    adminMenu,
    mainLayout
  }
});
