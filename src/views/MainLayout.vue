<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item Link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Домой</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Связаться с нами</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="!isAuthorized" to="/reg">
          <v-list-item-action>
            <v-icon>mdi-clipboard-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Регистрация</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="!isAuthorized" to="/auth">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Войти</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="isAuthorized" @click.stop="dialog = true">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Are you sure?</v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false">
                Disagree
              </v-btn>

              <v-btn color="green darken-1" text @click="userExit()">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>NewsApp</v-toolbar-title>
      <v-toolbar-items class="d-flex align-center ml-auto" v-if="isAuthorized">
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="white" dark v-on="on" text>
                Hello, {{ name }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in filteredMenuOptions"
                :key="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container class="full-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">BidloDevs&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import authorize from "../components/mixins/authorize.js";
import storageHandler from "../components/mixins/storageHandler.js";

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    dialog: false
  }),
  computed: {
    ...mapGetters(["login", "name", "isAuthorized", "userMenuOptions", "role"]),
    filteredMenuOptions() {
      return this.userMenuOptions.filter(el => {
        if (this.role === "ADMIN") {
          return true;
        } else {
          return el.showPermission === this.role;
        }
      });
    }
  },
  methods: {
    userExit() {
      this.dialog = false;
      this.$router.push("/exit", () => {
        this.setLocalStorageUserData({
          login: "",
          name: "",
          role: ""
        });
        this.$router.push("/", () => {
          this.setUserParams("", "", "");
        });
      });
    }
  },
  mixins: [authorize, storageHandler]
};
</script>
