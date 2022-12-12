<template>
  <div class="ListofGroups">
    <div class="table-responsive">
      <table
        class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
      >
        <thead class="thead-darkbg">
          <tr>
            <th scope="col">Group Name</th>
            <th scope="col">Group Creator</th>
            <th scope="col">Company</th>
            <th scope="col">Join type</th>
            <th scope="col">users</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ listgroups.groupname }}</td>
            <td>{{ listgroups.admin.map() }}</td>
            <td>{{ listgroups.companyname }}</td>
            <td>{{ listgroups.groupjoin }}</td>
            <td>{{ listgroups.users }}</td>
            <td v-if="listgroups.groupjoin === 'Free Join'">
              <button
                @click="JoinGroups(listgroups.groupname)"
                type="button rightbtn "
                class="btn btn-sm btn-success"
              >
                <i class="fa-regular fa-right-to-bracket"></i> Join Group
              </button>
            </td>

            <td v-if="listgroups.groupjoin === 'Invite Only'">
              <button
                @click="AskToJoinGroup(listgroups.groupname)"
                type="button rightbtn "
                class="btn btn-sm btn-success"
              >
                <i class="fa-regular fa-object-group"></i> Ask to Join
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Groups, Service } from "@/services";
export default {
  name: "ListofGroups",
  props: ["listgroups"],
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      currentUsers: this.listgroups.users,
    };
  },
  mounted() {},
  methods: {
    async JoinGroups(groupname) {
      let user = JSON.parse(localStorage.getItem("user"));

      try {
        await Groups.JoinGroup({
          groupname: groupname,
          username: user.username,
        });
        setTimeout(() => {
          this.$router.push({ name: "DashBoard" });
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    },
    AskToJoinGroup(groupname) {
      console.log(groupname);
    },
  },
};
</script>

<style></style>
