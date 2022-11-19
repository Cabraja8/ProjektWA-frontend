import axios from "axios";
// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

let Posts = {
  getAll(searchTerm) {
    return Service.get(`/posts?title=${searchTerm}`);
  },
};
export { Service, Posts };
