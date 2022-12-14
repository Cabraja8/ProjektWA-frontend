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
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="list in colums" :key="list.username">
            <td>pic</td>
            <td>{{ list.username }}</td>
            <td>
              {{ list.role }}
            </td>
            <td>
              <button
                @click="ManageUser(list.username, list.role)"
                type="button rightbtn btn-sm"
                class="btn-secondary"
              >
                <i class="fa-solid fa-xl fa-gear"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Users } from "@/services";
import { ControlPanel } from "@/views/ControlPanel.vue";

export default {
  name: "UsersTab",
  props: ["pickoption"],
  data() {
    return {
      GroupList: [],
      rows: [],
      t: [],
      colums: [],
      pick: "",
    };
  },

  mounted() {
    this.GetUsers();
    this.getPickOption();
  },

  components: {},
  methods: {
    getPickOption() {},

    ManageUser(user, role) {
      console.log(role);
      console.log(user);

      this.$emit("edituser", { username: user, role: role });
    },

    async GetUsers() {
      this.GroupList = [];
      let user = JSON.parse(localStorage.getItem("user"));

      this.GroupList = await Users.GetUsers({ params: { user } });
      this.GroupList.forEach((element) => {
        this.rows.push(element.names);
      });

      this.rows.forEach((el) => {
        el.forEach((user) => {
          this.colums.push(user);
        });
      });
    },
  },
};
</script>

<style></style>
