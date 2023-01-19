import axios from "axios";
import $router from "@/router";
let Service = axios.create({
  baseURL: "https://appprojectmanager.netlify.app/#/",
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
  async InviteUser(pickoption, admin, username) {
    let response = await Service.put(
      "/InviteUser",
      pickoption,
      admin,
      username
    );
    let userinfo = response.data;
    return true;
  },
  async GetUserList(pickoption, user) {
    let response = await Service.get("/getUserList", pickoption, user);
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

  async GetAllUsers(user, notingroup, search) {
    let response = await Service.get("/getAllUsers", user, notingroup, search);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        username: group.username,
        dm: group.dm,
      };
    });
    return data;
  },

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
  async EditUserRole(pick, roles, name) {
    let response = await Service.put("/EditUserRole", pick, roles, name);
    let userinfo = response.data;
    return true;
  },
  async EditUserNotes(pick, notes, name) {
    let response = await Service.put("/EditUserNotes", pick, notes, name);
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
let Tasks = {
  async ClearCompletedTask(pickoption, taskname) {
    let response = await Service.put(
      "/ClearCompletedTask",
      pickoption,
      taskname
    );
    let userinfo = response.data;
    return true;
  },
  async GetCompletedTasks(pickoption) {
    let response = await Service.get("/GetCompletedTasks", pickoption);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        tasks: group.tasks,
        project: group.project,
        completedTasks: group.completedTasks,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },
  async CompleteTask(TaskData, pickoption) {
    let response = await Service.put("/CompleteTask", TaskData, pickoption);
    let desc = response.data;
    return true;
  },
  async DeleteTask(taskname, pickoption) {
    let response = await Service.put("/DeleteTask", taskname, pickoption);
    let desc = response.data;
    return true;
  },
  async CompleteTask(taskData, pickoption) {
    let response = await Service.put("/CompleteTask", taskData, pickoption);
    let desc = response.data;
    return true;
  },

  async CreateTask(TaskData, pickoption) {
    let response = await Service.put("/CreateTask", TaskData, pickoption);
    let desc = response.data;
    return true;
  },
  async GetTaskList(pickoption) {
    let response = await Service.get("/GetTaskList", pickoption);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        groupname: group.groupname,
        tasks: group.tasks,
      };
    });
    return data;
  },
};
let Groups = {
  async GetGroupsForMod(user, pickoption) {
    let response = await Service.get("/GetGroupsForMod", user, pickoption);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        tasks: group.tasks,
        project: group.project,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },
  async JoinGroupInvite(groupname, user) {
    let response = await Service.put("/joingroupinvite", groupname, user);
    let groupnames = response.data;
    return true;
  },
  async DontJoin(user, groupname) {
    let response = await Service.put("/DontJoin", user, groupname);
    let desc = response.data;
    return true;
  },
  async GetInviteList(user) {
    let response = await Service.get("/getInviteList", user);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        username: group.username,
        dm: group.dm,
      };
    });
    return data;
  },
  async GetJoinedGroups(user) {
    let response = await Service.get("/GetJoinedGroups", user);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        tasks: group.tasks,
        project: group.project,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },
  async LeaveGroup(user, groupname) {
    let response = await Service.put("/LeaveGroup", user, groupname);
    let desc = response.data;
    return true;
  },
  async GetYourGroup(user) {
    let response = await Service.get("/GetYourGroup", user);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        tasks: group.tasks,
        project: group.project,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },

  async DeleteGroup(group) {
    let response = await Service.delete("/DeleteGroup", group);
    let groups = response.data;
    return true;
  },

  async EditProjectInformation(option, info) {
    let response = await Service.put("/EditProjectInformation", option, info);
    let desc = response.data;
    return true;
  },

  async EditProjectDescription(option, description) {
    let response = await Service.put(
      "/EditProjectDescription",
      option,
      description
    );
    let desc = response.data;
    return true;
  },
  async GetProject(option) {
    let response = await Service.get("/ProjectInfo", option);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        groupjoin: group.groupjoin,
        tasks: group.tasks,
        project: group.project,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },

  async ChangeGroupCompanyName(option, company) {
    let response = await Service.put("/ChangeCompanyName", option, company);
    let groupname = response.data;
    return true;
  },
  async ChangeGroupJoinType(option, groupjoin) {
    let response = await Service.put("/ChangeGroupJoinType", option, groupjoin);
    let groupname = response.data;
    return true;
  },
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

  async GetAllGroups(user) {
    let response = await Service.get("/GetAllGroups", user);
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
  async GetGroups(user) {
    //funkcija iz Groups dohvaca $ne

    let response = await Service.get("/groups", user, search);
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
  async GetTaskUserList(user, groupname) {
    let response = await Service.get("/GetTaskUserList", user, groupname);
    let data = response.data;
    data = data.map((group) => {
      return {
        id: group._id,
        admin: group.admin,
        groupname: group.groupname,
        companyname: group.companyname,
        tasks: group.tasks,
        groupjoin: group.groupjoin,
        inbox: group.inbox,
        users: group.users,
      };
    });
    return data;
  },
  async GetJoinedGroupName(option) {
    let response = await Service.get("/GroupName", option);
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
  async GetGroupPick(user) {
    let response = await Service.get("/GetGroupPick", user);
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
  async GroupOption(pick) {
    let response = await Service.get("/groupOption", pick);
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

      dm: [],
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
export { Service, Auth, Groups, Users, Inbox, Tasks };
