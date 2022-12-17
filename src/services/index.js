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

let Users = {
  async GetUsers(pickoption) {
    let response = await Service.get("/getusers", pickoption);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },
  async EditUser(pick, userData) {
    let response = await Service.put("/EditUser", pick, userData);
    let userinfo = response.data;
    return true;
  },
  async KickUser(pickusername) {
    let response = await Service.put("/KickUser", pickusername);
    let userinfo = response.data;
    return true;
  },
};
let Inbox = {
  async GetInbox(pick) {
    let response = await Service.get("/GetInbox", pick);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },

  async DeclineJoin(pickusername) {
    let response = await Service.put("/DeclineInvite", pickusername);
    let userinfo = response.data;
    return true;
  },
};

let Groups = {
  async GetGroupInfo(groupopt) {
    let response = await Service.get("/GetGroupInfo", groupopt);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },

  async CreateGroup(group) {
    let response = await Service.post("/groups", group);
    console.log(response);
    return true;
  },
  async GetGroups(user) {
    //funkcija iz Groups dohvaca $ne

    let response = await Service.get("/groups", user);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },
  async GetGroup(user) {
    // funkcija iz Control Panela dohvaca sve kreirane grupe
    let response = await Service.get("/group", user);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        inbox: group.inbox,
        users: group.users,
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
  async JoinGroup(group) {
    let response = await Service.put("/joingroup", group);
    let groupname = response.data;
    return true;
  },
  async AskToJoinGroup(usergroup) {
    let response = await Service.put("/AskToJoinGroup", usergroup);
    let groupname = response.data;
    return true;
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
      img: "",
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
export { Service, Auth, Groups, Users, Inbox };
