<template>
  <div class="FindUsers">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Search Users</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
      <div
        class="container-fluid my-4 py-4 col-lg-12 col-sm-6 col-md-12 d-flex aligns-items-center justify-content-center"
      >
        <input
          type="group"
          placeholder="Search Users"
          class="form-control w-40"
          id="search"
        />
        <button type="button rightbtn " class="btn bg-darkbg">
          <i class="fa-solid fa-search"></i>
        </button>
      </div>
    </div>
    <div class="container">
      <h2 class="h2">UserList</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3">
        <UserList v-for="list in users" :key="list.id" :userlist="list" />
      </div>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import { Users } from "@/services";
export default {
  name: "FindUsers",
  components: { UserList },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async GetAllUsers() {
      let user = JSON.parse(localStorage.getItem("user"));
      let currentUsers = JSON.parse(localStorage.getItem("currentusers"));

      this.users = await Users.GetAllUsers({ params: { user, currentUsers } });
    },
  },
  mounted() {
    this.GetAllUsers();
  },
};
</script>

<style></style>
