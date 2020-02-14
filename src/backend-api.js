import axios from "./plugins/axios";

export default {
  async login({ formData }) {
    return axios.post("/login", formData);
  },
  async refreshTokens({ refreshTokenData }) {
    return axios.post("/refresh", refreshTokenData);
  },
  async createNewsCard({ newsCardData }) {
    return axios.post("/add", newsCardData);
  },
  async deleteNewsCard({ tokenData, newsCardId }) {
    return axios.post(`/delete${newsCardId}`, tokenData);
  },
  async register({ regData }) {
    return axios.post("/register", regData);
  },
  async checkDataUniqueness({ data, dataTitle }) {
    return axios.post(`/check${dataTitle}`, data);
  },
  async getNews() {
    return axios.get("/getAll");
  }
};
