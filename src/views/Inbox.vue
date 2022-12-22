<template>
  <div class="Inbox">
    <div class="container w-90">
      <div class="container" v-if="this.colums.length !== 0">
        <h2>Invite Requests</h2>
        <div class="table-responsive">
          <table class="table m-0 py-4 md-4 mx-auto bg-light shadowbox mx-auto">
            <thead class="thead-darkbg">
              <tr>
                <th>From</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="list in colums" :key="list.username">
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
      <div class="container" v-if="this.columclist.length !== 0">
        <h2>Completed Tasks</h2>
        <div class="table-responsive">
          <table class="table m-0 py-4 md-4 mx-auto bg-light shadowbox mx-auto">
            <thead class="thead-darkbg">
              <tr>
                <th>Task Name</th>
                <th>From</th>
                <th>Deadline</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="list in columclist" :key="list.id">
                <td class="td-width">{{ list.taskname }}</td>
                <td class="td-width">{{ list.forUser }}</td>
                <td class="td-width">{{ list.deadline }}</td>
                <td class="td-width">
                  <div class="container">
                    <button
                      @click="ClearTask(list.taskname)"
                      class="btn btn-sm btn-danger"
                    >
                      <i class="fa-solid fa-x"></i> Clear
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Inbox, Groups, Tasks } from "@/services";

export default {
  name: "Inbox",
  data() {
    return {
      InboxList: [],
      colums: [],
      rows: [],
      inboxusers: [],
      completedTasksList: [],
      rowclist: [],
      columclist: [],
    };
  },
  mounted() {
    this.GetInbox();
    this.GetCompletedTasks();
  },
  methods: {
    async ClearTask(taskname) {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      console.log(taskname);
      await Tasks.ClearCompletedTask({ params: { pickoption, taskname } });
      this.rowclist = [];
      this.columclist = [];
      this.completedTasksList = [];
      this.GetCompletedTasks();
    },
    async GetCompletedTasks() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      this.completedTasksList = await Tasks.GetCompletedTasks({
        params: { pickoption },
      });
      this.completedTasksList.forEach((element) => {
        this.rowclist.push(element.completedTasks);
      });
      this.rowclist.forEach((element) => {
        element.forEach((el) => {
          this.columclist.push(el);
        });
      });
    },
    async AcceptJoin(username) {
      let groupname = JSON.parse(localStorage.getItem("pick"));
      try {
        await Groups.JoinGroup({
          groupname: groupname,
          username: username,
          notes: "",
        });
        this.DeclineJoin(username);
      } catch (e) {
        console.log(e);
      }
      this.InboxList = [];
      this.rows = [];
      this.colums = [];
      this.GetInbox();
    },
    async DeclineJoin(username) {
      let pickoption = JSON.parse(localStorage.getItem("pick"));

      await Inbox.DeclineJoin({ params: { pickoption, username } });
      this.InboxList = [];
      this.rows = [];
      this.colums = [];
      this.GetInbox();
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
