import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import List from "../views/List.vue";
import JoinedGroups from "../views/JoinedGroups.vue";
import Invites from "../views/Invites.vue";
import Groups from "../views/Groups.vue";
import DashBoard from "../views/Dashboard.vue";
import ControlPanel from "../views/ControlPanel.vue";
import GroupPanel from "../components/GroupPanel.vue";
import Users from "../views/Users.vue";
import FindUsers from "../views/FindUsers.vue";
import Tasks from "../views/Tasks.vue";
import Project from "../views/Project.vue";
import Inbox from "../views/Inbox.vue";
import Settings from "../views/Settings.vue";
import YourGroups from "../views/YourGroups";
import TaskList from "../views/TaskList.vue";
import ProjectInfo from "../views/ProjectInfo.vue";
import ModeratorList from "../views/ModeratorList.vue";
import { Auth } from "@/services";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/List",
    name: "List",
    component: List,
    children: [
      {
        path: "YourGroups",
        name: "YourGroups",
        component: YourGroups,
      },
      {
        path: "JoinedGroups",
        name: "JoinedGroups",
        component: JoinedGroups,
      },
      {
        path: "Invites",
        name: "Invites",
        component: Invites,
      },
    ],
  },
  {
    path: "/Groups",
    name: "groups",
    component: Groups,
  },
  {
    path: "/DashBoard",
    name: "DashBoard",
    component: DashBoard,
    children: [
      {
        path: "TaskList",
        name: "TaskList",
        component: TaskList,
      },
      {
        path: "ProjectInfo",
        name: "ProjectInfo",
        component: ProjectInfo,
      },
      {
        path: "ModeratorList",
        name: "ModeratorList",
        component: ModeratorList,
      },
    ],
  },
  {
    path: "/ControlPanel",
    name: "ControlPanel",
    component: ControlPanel,
    children: [
      {
        path: "Project",
        name: "Project",
        component: Project,
      },
      {
        path: "Tasks",
        name: "Tasks",
        component: Tasks,
      },
      {
        path: "Users",
        name: "Users",
        component: Users,
      },
      {
        path: "FindUsers",
        name: "FindUsers",
        component: FindUsers,
      },
      {
        path: "Inbox",
        name: "Inbox",
        component: Inbox,
      },
      {
        path: "Settings",
        name: "Settings",
        component: Settings,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const javneStranice = ["/Login", "/Register", "/"];
  const loginPotreban = !javneStranice.includes(to.path);
  const user = Auth.getUser();

  if (loginPotreban && !user) {
    next("/Login");
    return;
  }
  next();
});

export default router;
