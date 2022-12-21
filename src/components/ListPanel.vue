<template>
  <div class="List">
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
                        <router-link to="/List/YourGroups" class="nav-link"
                          ><i class="fa-solid fa-sliders"></i> Your
                          Groups</router-link
                        >
                      </li>
                    </span>
                    <span>
                      <li class="navbar-brand">
                        <router-link to="/List/JoinedGroups" class="nav-link"
                          ><i class="fa-solid fa-folder-open"></i> Joined
                          Groups</router-link
                        >
                      </li>
                    </span>
                    <span>
                      <li class="navbar-brand">
                        <router-link to="/List/Invites" class="nav-link"
                          ><i class="fa-solid fa-circle-info"></i>
                          Invites</router-link
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
