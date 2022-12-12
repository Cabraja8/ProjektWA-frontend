<template>
  <div class="Users">
    <UsersTab
      class="col"
      v-for="list in GroupList"
      :key="list.names"
      :userstab="list"
    />
  </div>
</template>

<script>
import UsersTab from "@/components/UsersTab.vue";
import { Users } from "@/services";
export default {
  name: "Users",

  data() {
    return {
      GroupList: [],
    };
  },
  mounted() {
    this.GetUsers();
  },
  components: { UsersTab },
  methods: {
    async GetUsers() {
      this.GroupList = [];

      this.GroupList = await Users.GetUsers();
    },
  },
};
</script>

<style></style>
