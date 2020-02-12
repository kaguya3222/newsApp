import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vuelidate from "./plugins/vuelidate";
import VueJWT from "./plugins/vue-jwt";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vuelidate,
  VueJWT,
  render: h => h(App)
}).$mount("#app");
