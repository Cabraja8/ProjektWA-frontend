<template>
  <div class="YourGroups">
    <div class="container w-90">
      <div class="table-responsive" v-if="YourGroupList.length > 0">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto bg-light shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th>Group Name</th>
              <th>Company Name</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="list in YourGroupList" :key="list.id">
              <td>{{ list.groupname }}</td>
              <td>{{ list.companyname }}</td>

              <td>
                <button
                  type="button  "
                  @click="DeleteYourGroup(list.groupname)"
                  class="btn btn-sm btn-danger"
                >
                  <i class="fa-solid fa-x"></i> Delete Group
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container" v-if="YourGroupList.length === 0">
      <p>You Currently have no created Groups</p>
    </div>
  </div>
</template>

<script>
import { Groups } from "@/services";
export default {
  name: "YourGroups",
  data() {
    return {
      YourGroupList: [],
    };
  },
  methods: {
    async GetYourGroups() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.YourGroupList = await Groups.GetYourGroup({ params: { user } });
    },
    async DeleteYourGroup(group) {
      console.log(group);
      try {
        await Groups.DeleteGroup({ params: { group } });
        this.GetYourGroups();
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.GetYourGroups();
  },
};
</script>

<style></style>
