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
                        <router-link to="/ControlPanel/Project" class="nav-link"
                          ><i class="fa-solid fa-box"></i> Project</router-link
                        >
                      </li>
                    </span>
                    <span>
                      <li class="navbar-brand">
                        <router-link to="/ControlPanel/Tasks" class="nav-link">
                          <i class="fa-regular fa-list-check"></i
                          >Tasks</router-link
                        >
                      </li>
                    </span>

                    <span>
                      <li class="navbar-brand">
                        <router-link to="/ControlPanel/Users" class="nav-link"
                          ><i class="fa-sharp fa-solid fa-users"></i>
                          Users</router-link
                        >
                      </li>
                    </span>
                    <span>
                      <li class="navbar-brand">
                        <router-link
                          to="/ControlPanel/FindUsers"
                          class="nav-link"
                          ><i class="fa-solid fa-magnifying-glass"></i> Find
                          Users</router-link
                        >
                      </li>
                    </span>
                    <span>
                      <li class="navbar-brand">
                        <router-link to="/ControlPanel/Inbox" class="nav-link"
                          ><i class="fa-solid fa-inbox"></i> Inbox</router-link
                        >
                      </li>
                    </span>
                    <span>
                      <li class="navbar-brand">
                        <router-link
                          to="/ControlPanel/Settings"
                          class="nav-link"
                          ><i class="fa-solid fa-gear"></i>
                          Settings</router-link
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
import Users from "@/views/Users.vue";
export default {
  name: "groupPanel",
  props: ["groupPanel"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
