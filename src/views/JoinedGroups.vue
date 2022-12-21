<template>
  <div class="JoinedGroups">
    <div class="container w-90">
      <div class="table-responsive" v-if="JoinedGroups.length > 0">
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
            <tr v-for="list in JoinedGroups" :key="list.id">
              <td>{{ list.groupname }}</td>
              <td>{{ list.companyname }}</td>

              <td>
                <button
                  type="button "
                  @click="LeaveGroup(list.groupname)"
                  class="btn btn-sm btn-danger"
                >
                  <i class="fa-solid fa-x"></i> Leave Group
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="JoinedGroups.length === 0">
      <p>You Currently are not in any group</p>
    </div>
  </div>
</template>

<script>
import { Groups } from "@/services";
export default {
  name: "JoinedGroups",
  data() {
    return {
      JoinedGroups: [],
    };
  },
  methods: {
    async GetJoinedGroups() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.JoinedGroups = await Groups.GetJoinedGroups({ params: { user } });
    },
    async LeaveGroup(groupname) {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(groupname);
      try {
        await Groups.LeaveGroup({ params: { user, groupname } });
        this.GetJoinedGroups();
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.GetJoinedGroups();
  },
};
</script>

<style></style>
