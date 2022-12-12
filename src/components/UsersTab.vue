<template>
  <div class="UsersTab">
    <div class="table-responsive">
      <table
        class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
      >
        <thead class="thead-darkbg">
          <tr>
            <th></th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="col" v-for="list in GroupList" :key="list.names">
            <td>Picture</td>
            <td>{{ list.names.join() }}</td>
            <td>{{ list.role.join() }}</td>
            <td>button</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Users } from "@/services";
export default {
  name: "UsersTab",

  data() {
    return {
      GroupList: [],
    };
  },
  mounted() {
    this.GetUsers();
  },

  components: {},
  methods: {
    async GetUsers() {
      this.GroupList = [];

      this.GroupList = await Users.GetUsers();
    },
  },
};
</script>

<style></style>
