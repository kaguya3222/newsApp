import { AXIOS } from "../../backend-api";
import userDataMethods from "./user-data-methods";
import formDataHandler from "./formDataHandler";
import { mapActions } from "vuex";

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
      const response = await AXIOS.post(
        "/refresh",
        this.fillRefreshTokenData()
      );
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
    fillRefreshTokenData() {
      return this.createAndFillFormData({
        paramsObj: {
          refreshToken: localStorage.getItem("REFRESH_TOKEN"),
          fingerprint: "fingerPrint"
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
  mixins: [userDataMethods, formDataHandler]
};
