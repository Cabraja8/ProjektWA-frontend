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
Service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout();
      $router.go();
    }
  }
);

let Posts = {
  getAll() {
    return this.baseURL;
  },
};

let Groups = {
  async CreateGroup(group) {
    let response = await Service.post("/groups", group);
    console.log(response);
    return true;
  },
  async GetGroups(user) {
    let response = await Service.get("/groups", user);
    let data = response.data;
    data = data.map((group) => {
      return {
        username: group.username,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
      };
    });
    return data;
  },
  async GetGroup(user) {
    let response = await Service.get("/group", user);
    let data = response.data;
    data = data.map((group) => {
      return {
        username: group.username,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
      };
    });
    return data;
  },
  async GroupOption(pick) {
    let response = await Service.get("/groupOption/${pick}", pick);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        username: group.username,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },
};

let Auth = {
  async login(username, password) {
    let response = await Service.post("/auth", {
      username: username,
      password: password,
    });
    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  async Register(username, password) {
    let user = {
      username: username,
      password: password,
    };
    let result = await Service.post("/users", user);
    console.log(result);
    return result;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },

  authenticated() {
    let user = Auth.getUser();
    if (user && user.token) {
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
export { Posts, Service, Auth, Groups };
