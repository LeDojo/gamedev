import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "691c3abcb74649578f2ca73e61623e88",
  },
});
