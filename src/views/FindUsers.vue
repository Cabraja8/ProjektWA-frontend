<template>
  <div class="FindUsers">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Search Users</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
      <div
        class="container-fluid my-4 py-4 col-lg-12 col-sm-12 col-md-12 d-flex aligns-items-center justify-content-center"
      >
        <input
          type="group"
          placeholder="Search Users"
          class="form-control w-40 d-flex aligns-items-center justify-content-center"
          id="search"
        />
        <button type="button rightbtn " class="btn bg-darkbg">
          <i class="fa-solid fa-search"></i>
        </button>
      </div>
    </div>
    <div class="container">
      <div class="border-top border-secondary w-50 mx-auto my-3">
        <UserList
          v-for="list in users"
          :key="list.id"
          v-on:refresh="RefreshList"
          :userlist="list"
        />
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
      userlist: [],
      rowuser: [],
    };
  },
  methods: {
    RefreshList() {
      this.users = [];
      this.userlist = [];
      this.rowuser = [];
      this.GetAllUsers();
    },

    async GetAllUsers() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      let user = JSON.parse(localStorage.getItem("user"));
      let notingroup = [];
      this.userlist = await Users.GetUserList({ params: { pickoption, user } });
      this.userlist.forEach((element) => {
        this.rowuser.push(element.users);
        this.rowuser.push(element.inbox);
      });
      this.rowuser.forEach((element) => {
        element.forEach((el) => {
          notingroup.push(el.username);
        });
      });

      this.users = await Users.GetAllUsers({
        params: { user, notingroup },
      });
    },
  },
  mounted() {
    this.GetAllUsers();
  },
};
</script>

<style></style>
