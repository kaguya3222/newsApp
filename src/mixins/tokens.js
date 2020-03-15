import API from "../backend-api";
import userDataMethods from "./user-data-methods";
import formDataHandler from "./formDataHandler";
import { mapActions } from "vuex";
import fingerprint from "./fingerprint";

export default {
  methods: {
    ...mapActions(["openSnackBar"]),
    setToken({ token, key }) {
      localStorage.setItem(key, token);
    },
    setTokens({ data }) {
      this.setToken({ token: data.accessToken, key: "ACCESS_TOKEN" });
      this.setToken({ token: data.refreshToken, key: "REFRESH_TOKEN" });
    },
    checkToken({ tokenName }) {
      return (
        Math.round(Date.now() / 1000) <
        this.$jwt.decode(localStorage.getItem(tokenName)).exp
      );
    },
    async refreshTokens() {
      if (!this.checkToken({ tokenName: "REFRESH_TOKEN" })) {
        this.openSnackBar({ payLoad: "Войдите, пожалуйста, еще раз" });
        this.userExit({ path: "/auth" });
        return false;
      }
      const refreshTokenData = await this.fillRefreshTokenData();
      const response = await API.refreshTokens({
        refreshTokenData
      });
      if (response.data.status === "OK") {
        this.setTokens({
          data: {
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken
          }
        });
        return true;
      }
    },
    removeTokens() {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("REFRESH_TOKEN");
    },
    async fillRefreshTokenData() {
      const fingerprint = await this.getFingerPrint();
      return this.createAndFillFormData({
        paramsObj: {
          refreshToken: localStorage.getItem("REFRESH_TOKEN"),
          fingerprint
        }
      });
    },
    async doTokenRequiredAction({ action }) {
      if (this.checkToken({ tokenName: "ACCESS_TOKEN" })) {
        action();
      } else {
        const response = await this.refreshTokens();
        if (response) {
          action();
        }
      }
    }
  },
  mixins: [userDataMethods, formDataHandler, fingerprint]
};
