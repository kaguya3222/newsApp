import Vue from "vue";
import VueJWT from "vuejs-jwt";

Vue.use(VueJWT, {
  keyName: "ACCESS_TOKEN"
});
