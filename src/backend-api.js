import Vue from "vue";

export default {
  async login({ formData }) {
    return await Vue.axios.post("/login", formData);
  },
  async refreshTokens({ refreshTokenData }) {
    return await Vue.axios.post("/refresh", refreshTokenData);
  },
  async createNewsCard({ newsCardData }) {
    return await Vue.axios.post("/add", newsCardData);
  },
  async deleteNewsCard({ tokenData }) {
    Vue.axios.post(`/delete${this.newsCardData.id}`, tokenData);
  },
  async register({ regData }) {
    return await Vue.axios.post("/register", regData);
  },
  async checkDataUniqueness({ data, dataTitle }) {
    return await Vue.axios.post(`/check${dataTitle}`, data);
  },
  async getNews() {
    console.log(Vue.axios.get);
    return await Vue.axios.get("/getAll");
  }
};
