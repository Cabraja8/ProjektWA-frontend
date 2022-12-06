<template>
  <div class="ControlPanel">
    <div class="container-fluid my-4 py-4 col-lg-12 col-sm-6 col-md-12">
      <div class="container-fluid my-4 py-4 col">
        <h2 class="h2">Select your group</h2>
        <div class="border-top border-secondary w-50 mx-auto my-3"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 py-4 my-4 mx-auto md-4">
            <select
              class="form-control selectoption"
              id="selectoption"
              v-model="Pick"
              @click="GroupPanel"
            >
              <option v-for="list in ListofGroups" :key="list.groupname">
                {{ list.groupname }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="container">
        <GroupPanel
          class="col"
          v-for="listgroup in groups"
          :key="listgroup.groupname"
          :groupPanel="listgroup"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Service, Groups } from "@/services";
import GroupPanel from "@/components/GroupPanel.vue";
export default {
  components: {
    GroupPanel,
  },
  name: "ControlPanel",
  data() {
    return {
      groups: [],
      Pick: "",
      ListofGroups: [],
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    async GetGroups() {
      this.ListofGroups = [];
      let user = JSON.parse(localStorage.getItem("user"));
      await Service.get("/group", { params: user }).then((response) => {
        let data = response.data;
        console.log("GETGROUP", data);

        this.ListofGroups = data.map((group) => {
          return {
            username: group.username,
            groupname: group.groupname,
            companyname: group.companyname,
            groupjoin: group.groupjoin,
          };
        });
      });
    },
    async GroupPanel() {
      this.groups = [];
      let pickoption = this.Pick;

      await Service.get("/groupoption", { params: { pickoption } }).then(
        (response) => {
          let data = response.data;
          console.log("GETGROUPPANEL", data);

          this.groups = data.map((group) => {
            return {
              username: group.username,
              groupname: group.groupname,
              companyname: group.companyname,
              groupjoin: group.groupjoin,
            };
          });
        }
      );
    },
  },
  mounted() {
    this.GetGroups();
  },
};
</script>

<style></style>
