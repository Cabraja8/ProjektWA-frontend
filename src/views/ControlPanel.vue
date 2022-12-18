<template>
  <div class="ControlPanel">
    <div class="container-fluid my-4 py-4 col-lg-12 col-sm-12 col-md-12">
      <div class="container-fluid my-4 py-4 col">
        <h2 class="h2">Select your group</h2>
        <div class="border-top border-secondary w-50 mx-auto my-3"></div>
      </div>
      <div class="container" v-if="GroupList.length > 0">
        <div class="row">
          <div class="col-lg-6 py-4 my-4 mx-auto md-4">
            <select
              class="form-control selectoption"
              id="selectoption"
              v-model="Pick"
              @click="GroupPanel"
            >
              <option v-for="list in GroupList" :key="list.groupname">
                {{ list.groupname }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div
        class="container"
        v-if="GroupList.length === 0 && groups.length === 0"
      >
        <div class="container">
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
                        You don't have any groups, create them
                        <router-link to="/Groups">here</router-link>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
      <div class="container" v-if="this.Pick === ''">
        <div class="container mt-5 my-4 py-4 my-4 w-90">
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
                      You have to select a group in the options menu
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
      GroupList: [],
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    async GetGroup() {
      this.GroupList = [];
      let user = JSON.parse(localStorage.getItem("user"));

      this.GroupList = await Groups.GetGroup({ params: { user } });
    },

    async GroupPanel() {
      this.groups = [];
      let pickoption = this.Pick;
      localStorage.setItem("pick", JSON.stringify(pickoption));

      this.groups = await Groups.GroupOption({ params: { pickoption } });
    },
  },

  mounted() {
    this.GetGroup();
    this.GroupPanel();
  },
};
</script>

<style></style>
