import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a00babe415d4bb385d29c3a6154868b",
  },
});
