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
              <th>Notes</th>
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
              <td>{{ list.notes }}</td>
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
      <div class="container" v-if="editUser">
        <div class="table-responsive">
          <table
            class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
          >
            <thead class="thead-darkbg">
              <th>Username: {{ this.username }} Role: {{ this.role }}</th>
            </thead>
            <div class="container w-50">
              <div class="mb-4">
                <label for="notes" class="form-label">Add Notes:</label>
                <textarea
                  type="group"
                  placeholder="Add some notes...."
                  class="form-control rounded-0 textarea-border"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  v-model="Notes"
                ></textarea>
              </div>
              <div class="mb-4">
                <label for="role" class="form-label">Change Role:</label>

                <select
                  class="form-control textarea-border"
                  id="group"
                  v-model="NewRole"
                >
                  <option v-if="this.role !== 'Member'" value="Member">
                    Member
                  </option>
                  <option v-if="this.role !== 'Moderator'" value="Moderator">
                    Moderator
                  </option>
                  <option v-if="this.role !== 'Admin'" value="Admin">
                    Admin
                  </option>
                </select>
              </div>
            </div>
            <div class="btn">
              <button
                type="button rightbtn "
                class="btn btn-sm btn-success btn-bord"
                @click="EditUser"
              >
                <i class="fa-solid fa-check"></i> Apply
              </button>

              <button
                type="button rightbtn "
                class="btn btn-sm btn-danger btn-bord"
                @click="CancelManageUser"
              >
                <i class="fa-solid fa-x"></i> Cancel
              </button>
            </div>
          </table>
        </div>
      </div>
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
      listofGroups: [],
      username: "",
      role: "",
      Pick: "",
      Notes: "",
      NewRole: "",
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
    CancelManageUser() {
      this.editUser = false;
    },
    async EditUser() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      let userData = {
        Name: this.username,
        Notes: this.Notes,
        Role: this.NewRole,
      };
      console.log(userData, "userdata");
      try {
        await Users.EditUser({ params: { pickoption, userData } });
      } catch (e) {
        console.log(e);
      }
    },

    async GetUsers() {
      this.GroupList = [];
      let pickoption = JSON.parse(localStorage.getItem("pick"));

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
