import axios from "./plugins/axios";

export default {
  async login({ formData }) {
    return await axios.post("/login", formData);
  },
  async refreshTokens({ refreshTokenData }) {
    return await axios.post("/refresh", refreshTokenData);
  },
  async createNewsCard({ newsCardData }) {
    return await axios.post("/add", newsCardData);
  },
  async deleteNewsCard({ tokenData, newsCardId }) {
    axios.post(`/delete${newsCardId}`, tokenData);
  },
  async register({ regData }) {
    return await axios.post("/register", regData);
  },
  async checkDataUniqueness({ data, dataTitle }) {
    return await axios.post(`/check${dataTitle}`, data);
  },
  async getNews() {
    return await axios.get("/getAll");
  }
};
