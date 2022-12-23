<template>
  <div class="UserList">
    <div class="table-responsive" v-if="showUsers">
      <table
        class="table m-0 pd-4 py-4 md-4 mx-auto bg-light shadowbox mx-auto"
      >
        <thead class="thead-darkbg">
          <tr>
            <th>Username</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ userlist.username }}</td>
            <td>
              <button
                type="button rightbtn "
                @click="InviteUser(userlist.username)"
                class="btn btn-sm btn-success"
              >
                <i class="fa-solid fa-check"></i> Invite
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
export default {
  name: "UserList",
  props: ["userlist"],
  data() {
    return {
      userlists: [],
      showUsers: true,
    };
  },

  mounted() {
    this.GetUsers();
  },

  components: {},
  methods: {
    GetUsers() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      this.$props.userlist.dm.forEach((element) => {
        if (element.groupname === pickoption) {
          this.showUsers = false;
        }
      });
    },

    async InviteUser(username) {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      let admin = JSON.parse(localStorage.getItem("user"));
      await Users.InviteUser({ params: { pickoption, admin, username } });
      this.$emit("refresh");
    },
  },
};
</script>

<style></style>
