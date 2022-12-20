<template>
  <div class="UserList">
    <div class="table-responsive">
      <table
        class="table m-0 pd-4 py-4 md-4 mx-auto bg-light shadowbox mx-auto"
      >
        <thead class="thead-darkbg">
          <tr>
            <th>Picture</th>
            <th>Username</th>

            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ userlist.img }}</td>
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
      arr: ["Marin123", "Marko123"],
    };
  },

  mounted() {},

  components: {},
  methods: {
    async GetAllUsersInGroup() {},

    InviteUser(username) {
      console.log(username);
    },
  },
};
</script>

<style></style>
