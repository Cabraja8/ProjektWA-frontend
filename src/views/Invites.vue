<template>
  <div class="Invites">
    <div class="container w-90">
      <div class="table-responsive" v-if="listofinvites.length > 0">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto bg-light shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th>Group Name</th>
              <th>Group Admin</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="list in listofinvites" :key="list.id">
              <td>{{ list.groupname }}</td>
              <td>{{ list.admin }}</td>

              <td>
                <button
                  type="button  "
                  @click.once="JoinGroupInvite(list.groupname)"
                  class="btn btn-sm btn-success"
                >
                  <i class="fa-solid fa-check"></i> Join
                </button>
                <button
                  type="button  "
                  @click.once="DontJoin(list.groupname)"
                  class="btn btn-sm btn-danger"
                >
                  <i class="fa-solid fa-x"></i> Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Groups } from "@/services";
export default {
  name: "Invites",
  data() {
    return {
      InviteList: [],
      rows: [],
      colums: [],
      listofinvites: [],
    };
  },
  mounted() {
    this.GetAllInvites();
  },
  methods: {
    async DontJoin(groupname) {
      let user = JSON.parse(localStorage.getItem("user"));

      await Groups.DontJoin({ params: { user, groupname } });
      this.rows = [];
      this.colums = [];
      this.listofinvites = [];
      this.GetAllInvites();
    },
    async JoinGroupInvite(groupname) {
      let user = JSON.parse(localStorage.getItem("user"));
      await Groups.JoinGroupInvite({ params: { user, groupname } });
      this.DontJoin(groupname);
    },
    async GetAllInvites() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.InviteList = await Groups.GetInviteList({ params: { user } });
      this.InviteList.forEach((element) => {
        this.rows.push(element.dm);
      });
      this.rows.forEach((element) => {
        element.forEach((el) => {
          this.listofinvites.push(el);
        });
      });
    },
  },
};
</script>

<style></style>
