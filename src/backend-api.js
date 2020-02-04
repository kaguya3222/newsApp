import axios from "axios";

export const AXIOS = axios.create({
  baseURL: "https://spring-boot-rest-api-app.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "http://vuejs-news-app.herokuapp.com/"
  }
});
