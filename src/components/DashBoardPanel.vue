<template>
  <div class="GroupPanel py-4 my-4">
    <div>
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto table-border-gray shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <nav
              id="nav"
              class="navbar bg-darkbg navbar-expand-lg navbar navbar-dark py-3 p-5"
            >
              <div class="container">
                <div class="justify-content-between ml-auto">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                  >
                    <span
                      class="navbar-toggler-icon justify-content-between"
                    ></span>
                  </button>
                </div>
                <div
                  class="collapse navbar-collapse justify-content-center"
                  id="navbarResponsive"
                >
                  <ul class="navbar-nav">
                    <span>
                      <li class="navbar-brand">
                        <router-link to="/DashBoard/TaskList" class="nav-link"
                          ><i class="fa-solid fa-thumbtack"></i> Task
                          list</router-link
                        >
                      </li>
                    </span>
                    <span>
                      <li class="navbar-brand">
                        <router-link
                          to="/DashBoard/ProjectInfo"
                          class="nav-link"
                        >
                          <i class="fa-solid fa-file"></i>
                          Project Info</router-link
                        >
                      </li>
                    </span>
                    <span v-if="Moderator">
                      <li class="navbar-brand">
                        <router-link
                          to="/DashBoard/ModeratorList"
                          class="nav-link"
                        >
                          <i class="fa-solid fa-palette"></i>
                          Moderator List</router-link
                        >
                      </li>
                    </span>
                  </ul>
                </div>
              </div>
            </nav>
          </thead>
          <tbody>
            <tr class="tr-bigcent">
              <th colspan="4" class="cent">
                <router-view> </router-view>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Users } from "@/views/Users.vue";
import { Groups } from "@/services";
export default {
  name: "DashBoardPanel",
  props: ["DashBoardPanel"],
  data() {
    return {
      Grouplist: [],
      rows: [],
      Moderator: false,
    };
  },
  mounted() {
    this.GetGroups();
  },
  methods: {
    async GetGroups() {
      let pickoption = JSON.parse(localStorage.getItem("pickoption"));
      let user = JSON.parse(localStorage.getItem("user"));
      this.Grouplist = await Groups.GetGroupsForMod({
        params: { user, pickoption },
      });
      this.Grouplist.forEach((element) => {
        this.rows.push(element.users);
      });
      this.rows.forEach((element) => {
        element.forEach((el) => {
          if (el.role === "Moderator" && el.username === user.username) {
            this.Moderator = true;
          }
        });
      });
    },
  },
};
</script>

<style></style>
