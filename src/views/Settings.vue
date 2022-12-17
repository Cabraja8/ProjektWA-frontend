<template>
  <div class="Settings">
    <div class="container py-6 padding py-4 my-4">
      <div
        class="row w-100 align items-center justify-content form-container formcon"
      >
        <div
          class="container container-blackbor row w-100 align items-center justify-content form-container formcon"
        ></div>

        <div
          class="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow pd-4 w-80-bord"
        >
          <form>
            <ul v-for="list in Group" :key="list.groupname">
              <div class="mb-4 d-flex justify-content-between">
                <label for="Email" class="form-label"
                  >Group Name: {{ list.groupname }}</label
                >
                <!-- <input
                type="E-mail"
                class="form-control"
                id="Email"
                placeholder="Username"
              /> -->
              </div>
              <div class="mb-4 d-flex justify-content-between">
                <label for="password" class="form-label"
                  >Company Name: {{ list.companyname }}</label
                >
                <!-- <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              /> -->
              </div>
              <div class="mb-4 d-flex justify-content-between">
                <label for="password" class="form-label"
                  >Group Join Type: {{ list.groupjoin }}</label
                >
                <!-- <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              /> -->
              </div>

              <!-- <div class="form-group">
              <button type="button rightbtn " class="btn btn-success">
                <i class="fa-solid fa-check"></i> Apply
              </button>

              <button type="button rightbtn " class="btn btn-danger">
                <i class="fa-solid fa-x"></i> Cancel
              </button>
            </div> -->
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Groups } from "@/services";
export default {
  name: "Settings",
  data() {
    return {
      GroupName: "",
      CompanyName: "",
      GroupJoinType: "",
      Group: [],
      groupmap: [],
    };
  },
  methods: {
    async GetGroupInfo() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      this.Group = await Groups.GetGroupInfo({ params: { pickoption } });
    },
  },
  mounted() {
    this.GetGroupInfo();
  },
};
</script>

<style></style>
