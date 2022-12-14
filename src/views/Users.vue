<template>
  <div class="Users">
    <div class="container" v-if="!editUser">
      <UsersTab
        v-on:edituser="EditUser($event)"
        v-on:pickoption="GetOption($event)"
      />
    </div>
    <div class="container" v-if="editUser">edit tab</div>
  </div>
</template>

<script>
import UsersTab from "@/components/UsersTab.vue";
import GroupPanel from "@/components/GroupPanel.vue";
import { Users } from "@/services";
export default {
  name: "Users",

  data() {
    return {
      editUser: false,
      username: "",
      role: "",
    };
  },
  mounted() {},
  components: { UsersTab, GroupPanel },
  methods: {
    GetOption(pick) {
      console.log("pickoption  ->", pick);
    },
    EditUser(users) {
      this.editUser = true;
      this.username = users.username;
      this.role = users.role;
      console.log(users.username, "korisnik");
      console.log(users.role, "role");
    },
  },
};
</script>

<style></style>
