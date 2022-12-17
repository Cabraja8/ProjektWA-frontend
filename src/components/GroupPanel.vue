<template>
  <div class="GroupPanel">
    <div class="container">
      <div
        class="container mt-5 my-4 py-4 my-4 w-80 col-lg-12 col-md-6 col-sm-3"
      >
        <div class="table-responsive">
          <table
            class="table m-0 pd-4 py-4 md-4 mx-auto table-border-gray shadowbox mx-auto"
          >
            <thead class="thead-darkbg">
              <nav class="navbar navbar-expand-lg">
                <ul class="navbar-nav mx-auto list-inline">
                  <th scope="col">
                    <li class="nav-item">
                      <router-link to="/ControlPanel/Project" class="nav-link"
                        >Project</router-link
                      >
                    </li>
                  </th>
                  <th scope="col">
                    <li class="nav-item">
                      <router-link to="/ControlPanel/Tasks" class="nav-link"
                        >Tasks</router-link
                      >
                    </li>
                  </th>
                  <th scope="col">
                    <li class="nav-item">
                      <router-link to="/ControlPanel/Users" class="nav-link"
                        >Users</router-link
                      >
                    </li>
                  </th>
                  <th scope="col">
                    <li class="nav-item">
                      <router-link to="/ControlPanel/FindUsers" class="nav-link"
                        >Find Users</router-link
                      >
                    </li>
                  </th>
                  <th scope="col">
                    <li class="nav-item">
                      <router-link to="/ControlPanel/Inbox" class="nav-link"
                        >Inbox</router-link
                      >
                    </li>
                  </th>
                  <th scope="col">
                    <li class="nav-item">
                      <router-link to="/ControlPanel/Settings" class="nav-link"
                        >Settings</router-link
                      >
                    </li>
                  </th>
                </ul>
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
