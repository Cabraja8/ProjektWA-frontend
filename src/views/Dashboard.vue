<template>
  <div class="DashBoard py-4 my-4">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Select your group</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
    </div>
    <div class="container py-4 my-4" v-if="pickoptions.length === 0">
      <h3 class="h3">You need to be in a group to see the Group Dashboard</h3>
    </div>
    <div class="container" v-if="pickoptions.length > 0">
      <div class="row">
        <div class="col-lg-6 py-4 my-4 mx-auto md-4">
          <select
            class="form-control selectoption"
            id="selectoption"
            v-model="Pick"
            @click="ShowGroups"
          >
            <option v-for="list in pickoptions" :key="list.groupname">
              {{ list.groupname }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="container py-4 my-4" v-if="this.Pick !== ''">
      <div class="container">
        <DashBoardPanel
          class="col"
          v-for="list in GroupPick"
          :key="list.groupname"
          :DashBoardPanel="list"
        />
      </div>
    </div>
    <div class="container" v-if="this.Pick === '' && pickoptions.length !== 0">
      <div class="container mt-5 my-4 py-4 my-4 w-80">
        <div class="container">
          <div class="table-responsive">
            <table
              class="table m-0 pd-4 py-4 md-4 mx-auto table-hover shadowbox mx-auto"
            >
              <thead class="thead-darkbg">
                <br />
                <br />
              </thead>
              <tbody>
                <tr class="tr-cent">
                  <th colspan="4" class="cent">
                    Select your group in the options menu
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Groups } from "@/services";
import DashBoardPanel from "@/components/DashBoardPanel.vue";
export default {
  name: "DashBoard",
  components: { DashBoardPanel },
  data() {
    return {
      Pick: "",
      pickoptions: [],
      GroupPick: [],
      TaskList: [],
      rows: [],
      colums: [],
      showlist: [],
    };
  },
  methods: {
    async GetPickOptions() {
      this.pickoptions = [];
      let user = JSON.parse(localStorage.getItem("user"));
      this.pickoptions = await Groups.GetGroupPick({ params: { user } });
    },
    async ShowGroups() {
      this.GroupPick = [];
      let option = this.Pick;
      localStorage.setItem("pickoption", JSON.stringify(option));
      console.log(option);
      this.GroupPick = await Groups.GetJoinedGroupName({ params: { option } });
    },
  },
  mounted() {
    this.GetPickOptions();
    this.ShowGroups();
  },
};
</script>

<style></style>
