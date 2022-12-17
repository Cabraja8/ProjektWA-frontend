<template>
  <div class="Inbox">
    <div v-if="this.colums.length !== 0">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th>/</th>
              <th>From</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="list in colums" :key="list.username">
              <td>{{ list.picture }}</td>
              <td class="td-width">{{ list.username }}</td>

              <td class="td-width">
                <div class="container">
                  <button
                    class="btn btn-sm btn-success"
                    @click.once="AcceptJoin(list.username)"
                  >
                    <i class="fa-solid fa-check"></i> Accept
                  </button>

                  <button
                    class="btn btn-sm btn-danger"
                    @click.once="DeclineJoin(list.username)"
                  >
                    <i class="fa-solid fa-x"></i> Decline
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container">
      <p v-if="this.colums.length === 0">
        There're currently no request invites from others
      </p>
    </div>
  </div>
</template>

<script>
import { Inbox, Groups } from "@/services";

export default {
  name: "Inbox",
  data() {
    return {
      InboxList: [],
      colums: [],
      rows: [],
    };
  },
  mounted() {
    this.GetInbox();
  },
  methods: {
    async AcceptJoin(username) {
      let groupname = JSON.parse(localStorage.getItem("pick"));
      try {
        await Groups.JoinGroup({
          groupname: groupname,
          username: username,
          notes: "",
          img: "",
        });
        this.DeclineJoin(username);
        // this.InboxList = [];
        // this.GetInbox();
      } catch (e) {
        console.log(e);
      }
    },
    async DeclineJoin(username) {
      let pickoption = JSON.parse(localStorage.getItem("pick"));

      await Inbox.DeclineJoin({ params: { pickoption, username } });
    },

    async GetInbox() {
      this.InboxList = [];
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      this.InboxList = await Inbox.GetInbox({ params: { pickoption } });

      this.InboxList.forEach((element) => {
        this.rows.push(element.inbox);
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
