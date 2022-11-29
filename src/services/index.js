import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

let Posts = {
  getAll() {
    return this.baseURL;
  },
};
export { Posts, Service };
