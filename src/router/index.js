import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Groups from "../views/Groups.vue";
import DashBoard from "../views/Dashboard.vue";
import ControlPanel from "../views/ControlPanel.vue";
import GroupPanel from "../components/GroupPanel.vue";
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
    path: "/Profile",
    name: "profile",
    component: Profile,
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
  },
  {
    path: "/ControlPanel",
    name: "ControlPanel",
    component: ControlPanel,
  },
];

const router = new VueRouter({
  mode: "history",
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
