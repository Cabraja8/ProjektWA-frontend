<template>
  <div class="User">
    <div class="container w-90" v-if="this.colums.length !== 0">
      <div class="table-responsive" v-if="!editUser">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto bg-light shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th></th>
              <th>Username</th>
              <th>Role</th>
              <th>Notes</th>
              <th>Manage</th>
              <th></th>
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
                  type="button  btn-sm"
                  class="btn-light"
                >
                  <i class="fa-solid fa-xl fa-gear"></i>
                </button>
              </td>
              <td>
                <button
                  type="button  "
                  class="btn btn-sm btn-danger"
                  @click.once="KickUser(list.username)"
                >
                  <i class="fa-solid fa-x"></i> Kick
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container" v-if="editUser">
        <div
          class="row w-100 align items-center justify-content form-container formcon"
        >
          <div
            class="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow pd-4 w-80-bord"
          >
            <table class="table table-border">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td class="th-bg">User:</td>
                  <td class="td-bg">{{ this.username }}</td>
                </tr>
                <tr>
                  <td class="th-bg">Role:</td>
                  <td class="td-bg">
                    <div v-if="!clicked">
                      {{ this.role }}

                      <button
                        type="button rightbtn "
                        class="btn btn-sm btn-light"
                        @click="ClickEdit"
                      >
                        <i class="fa-solid fa-pen"></i>
                      </button>
                    </div>
                    <div
                      class="td-bg d-flex justify-content-center"
                      v-if="clicked"
                    >
                      <select
                        class="form-control textarea-border w-50 sel"
                        id="group"
                        v-model="NewRole"
                      >
                        <option v-if="this.role !== 'Member'" value="Member">
                          Member
                        </option>
                        <option
                          v-if="this.role !== 'Moderator'"
                          value="Moderator"
                        >
                          Moderator
                        </option>
                      </select>
                      <button
                        type="button rightbtn "
                        class="btn btn-sm btn-success"
                        @click="EditUserRole"
                      >
                        <i class="fa-solid fa-check"></i>
                      </button>
                      <button
                        type="button rightbtn "
                        class="btn btn-sm btn-danger"
                        @click="CancelEditRole"
                      >
                        <i class="fa-solid fa-x"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="th-bg">Notes:</td>
                  <td class="td-bg">
                    {{ this.currentNotes }}
                    <div v-if="!clicked2">
                      <div class="form-group">
                        <button
                          type="button rightbtn "
                          class="btn btn-sm btn-light"
                          @click="ClickEditNotes"
                        >
                          <i class="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                    <div v-if="clicked2">
                      <div class="form-group">
                        <textarea
                          type="group"
                          placeholder="Add some notes...."
                          class="form-control rounded-0 textarea-border"
                          id="exampleFormControlTextarea2"
                          rows="3"
                          v-model="Notes"
                          :v-placeholder="Notes"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <button
                          type="button rightbtn "
                          class="btn btn-sm btn-success"
                          @click="EditUserNotes"
                        >
                          <i class="fa-solid fa-check"></i>
                        </button>
                        <button
                          type="button rightbtn "
                          class="btn btn-sm btn-danger"
                          @click="CancelEditNotes"
                        >
                          <i class="fa-solid fa-x"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button rightbtn "
              @click="BackToUsers"
              class="btn bg-darkbg"
            >
              <i class="fa-solid fa-backward"></i> Back
            </button>
          </div>
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
      clicked: false,
      clicked2: false,
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
      currentNotes: "",
      currentUsers: [],
    };
  },

  mounted() {
    this.GetUsers();
  },

  methods: {
    async ManageUser(users) {
      this.editUser = true;
      this.username = users.username;
      this.role = users.role;
      this.currentNotes = users.notes;
    },
    BackToUsers() {
      this.editUser = false;
    },

    CancelManageUser() {
      this.editUser = false;
    },
    ClickEdit() {
      this.clicked = true;
    },
    CancelEditRole() {
      this.clicked = false;
    },
    ClickEditNotes() {
      this.clicked2 = true;
    },
    CancelEditNotes() {
      this.clicked2 = false;
    },
    async EditUserRole() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));

      let name = this.username;
      let roles = this.NewRole;

      if (this.NewRole === "") {
        roles = this.role;
      }

      try {
        await Users.EditUserRole({ params: { pickoption, roles, name } });
        this.CancelEditRole();
        this.GroupList = [];
        this.rows = [];
        this.colums = [];
        this.GetUsers();
        this.role = roles;
      } catch (e) {
        console.log(e);
      }
    },
    async EditUserNotes() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));

      let name = this.username;
      let notes = this.Notes;
      if (notes === "") {
        notes = this.currentNotes;
      }
      try {
        await Users.EditUserNotes({ params: { pickoption, notes, name } });
        this.CancelEditNotes();
        this.GroupList = [];
        this.rows = [];
        this.colums = [];
        this.GetUsers();
        this.currentNotes = notes;
      } catch (e) {
        console.log(e);
      }
    },
    async KickUser(username) {
      let pickoption = JSON.parse(localStorage.getItem("pick"));

      await Users.KickUser({ params: { pickoption, username } });
      this.GroupList = [];
      this.rows = [];
      this.colums = [];
      this.GetUsers();
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
          console.log(user);
          this.colums.push(user);
        });
      });
    },
  },
};
</script>

<style></style>
