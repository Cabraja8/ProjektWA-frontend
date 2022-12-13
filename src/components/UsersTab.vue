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
          <tr v-for="list in t" :key="list.username">
            <td>pic</td>
            <td>{{ list.username }}</td>
            <td>{{ list.role }}</td>

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
      rows: [],
      t: [],
      colums: [],
    };
  },
  mounted() {
    this.GetUsers();
  },

  components: {},
  methods: {
    async GetUsers() {
      this.GroupList = [];
      let user = JSON.parse(localStorage.getItem("user"));
      this.GroupList = await Users.GetUsers({ params: { user } });
      this.GroupList.forEach((element) => {
        this.rows.push(element.names);
      });
      this.rows.forEach((el) => {
        el.forEach((user) => {
          console.log(user);
          this.t.push(user);
        });
      });
      console.log(this.t);
    },
  },
};
</script>

<style></style>
