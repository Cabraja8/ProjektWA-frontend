<template>
  <div class="User">
    <div class="container" v-if="this.colums.length !== 0">
      <div class="table-responsive" v-if="!editUser">
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
                  @click="ManageUser(list)"
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
      <div class="container" v-if="editUser">edit tab</div>
    </div>
    <div class="container">
      <p v-if="this.colums.length === 0">There're currently no users</p>
    </div>
  </div>
</template>

<script>
import { Users } from "@/services";
import { ControlPanel } from "@/views/ControlPanel.vue";
import GroupPanel from "@/components/GroupPanel.vue";
export default {
  name: "Users",

  data() {
    return {
      editUser: false,
      GroupList: [],
      rows: [],
      t: [],
      colums: [],
      pick: "",
      listofGroups: [],
    };
  },

  mounted() {
    this.GetUsers();
  },

  components: {},
  methods: {
    async ManageUser(users) {
      this.editUser = true;
      this.username = users.username;
      this.role = users.role;
      console.log(users.username, "korisnik");
      console.log(users.role, "role");
    },

    async GetUsers() {
      this.GroupList = [];
      let user = JSON.parse(localStorage.getItem("user"));
      let pickoption = JSON.parse(localStorage.getItem("pick"));

      console.log(pickoption, "pickoption");
      this.GroupList = await Users.GetUsers({ params: { pickoption } });
      this.GroupList.forEach((element) => {
        this.rows.push(element.users);
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
