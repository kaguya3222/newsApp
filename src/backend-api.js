import axios from "axios";

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
  async deleteNewsCard({ tokenData }) {
    axios.post(`/delete${this.newsCardData.id}`, tokenData);
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
