<template>
  <div class="TaskList">
    <div class="container w-90">
      <div class="container">
        <div class="table-responsive" v-if="showlist.length !== 0">
          <table
            class="table m-0 pd-4 py-4 md-4 mx-auto bg-light shadowbox mx-auto"
          >
            <thead class="thead-darkbg">
              <tr>
                <th>Task Name:</th>
                <th>Task Description</th>

                <th>Deadline</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-for="list in showlist" :key="list.id">
              <tr>
                <td>{{ list.taskname }}</td>
                <td>{{ list.taskDesc }}</td>

                <td>{{ list.DeadLine }}</td>
                <td>
                  <button
                    class="btn btn-sm btn-success"
                    @click="
                      CheckTaskName(list.taskname, list.DeadLine, list.ForUser)
                    "
                  >
                    <i class="fa-solid fa-check"></i> Check
                  </button>
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
  name: "TaskList",
  data() {
    return {
      TaskList: [],
      rows: [],
      colums: [],
      showlist: [],
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  mounted() {
    this.GetTaskUserList();
  },
  methods: {
    async CheckTaskName(taskname, deadline, forUser) {
      let pickoption = JSON.parse(localStorage.getItem("pickoption"));
      console.log(taskname);
      console.log(deadline);
      console.log(forUser);
      let taskData = {
        taskname: taskname,
        deadline: deadline,
        forUser: forUser,
      };

      await Tasks.CompleteTask({ params: { taskData, pickoption } });
      await Tasks.DeleteTask({ params: { taskname, pickoption } });
      this.rows = [];
      this.TaskList = [];
      this.showlist = [];
      this.GetTaskUserList();
    },
    async GetTaskUserList() {
      this.TaskList = [];

      let user = JSON.parse(localStorage.getItem("user"));
      let groupname = JSON.parse(localStorage.getItem("pickoption"));
      console.log(groupname);
      this.TaskList = await Groups.GetTaskUserList({
        params: { user, groupname },
      });
      this.TaskList.forEach((element) => {
        this.rows.push(element.tasks);
      });
      this.rows.forEach((element) => {
        element.forEach((el) => {
          if (user.username === el.ForUser) {
            this.showlist.push(el);
          }
        });
      });
    },
  },
};
</script>

<style></style>
