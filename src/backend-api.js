import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://spring-boot-rest-api-app.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "http://vuejs-news-app.herokuapp.com/"
  }
});

export default {
  async login({ formData }) {
    return await AXIOS.post("/login", formData);
  },
  async refreshTokens({ refreshTokenData }) {
    return await AXIOS.post("/refresh", refreshTokenData);
  },
  async createNewsCard({ newsCardData }) {
    return await AXIOS.post("/add", newsCardData);
  },
  async deleteNewsCard({ tokenData }) {
    AXIOS.post(`/delete${this.newsCardData.id}`, tokenData);
  },
  async register({ regData }) {
    return await AXIOS.post("/register", regData);
  },
  async checkDataUniqueness({ data, dataTitle }) {
    return await AXIOS.post(`/check${dataTitle}`, data);
  },
  async getNews() {
    return await AXIOS.get("/getAll");
  }
};
