import axios from "axios";
import $router from "@/router";
let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});
// Service.interceptors.request.use((request) => {
//   let token = Auth.getToken();
//   if (!token) {
//     $router.go();
//     return;
//   } else {
//     request.headers["Authorization"] = "Bearer " + token;
//   }
//   return request;
// });
// Service.interceptors.response.use((response) => {
//   return (
//     response,
//     (error) => {
//       if (error.response.status == 401 && error.response.status == 403) {
//         Auth.logout();
//         $router.go();
//       }
//     }
//   );
// });

let Posts = {
  getAll() {
    return this.baseURL;
  },
};

let Auth = {
  async login(email, password) {
    let response = await Service.post("/auth", {
      email: email,
      password: password,
    });
    let user = response.data;
    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  getToken() {
    let user = Auth.getUser;
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },
  authenticated() {
    let user = Auth.getUser();
    if (user) {
      return true;
    }
    return false;
  },
  state: {
    get authenticated() {
      return Auth.authenticated();
    },
  },
};
export { Posts, Service, Auth };
