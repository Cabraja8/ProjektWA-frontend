<template>
  <div class="ModeratorList">
    <div class="container w-90">
      <td class="td-width">
        <div class="container d-flex justify-content-center">
          <div
            class="col-sm-8 col-md-6 col-lg-4 bg-light rounded p-4 shadow blck"
          >
            <div class="row justify-content-center mb-4">
              <h1 class="h1">Create a Task</h1>
              <div class="border-top border-secondary w-100 mx-auto my-3"></div>
            </div>

            <form>
              <div class="mb-4">
                <label for="text" class="form-label">Task Name:</label>
                <input
                  type="group"
                  placeholder="Task name"
                  class="form-control"
                  id="text"
                  v-model="TaskName"
                  @input="CheckTaskName"
                />
                <p v-if="exists" class="rederror">task already exists</p>
              </div>
              <div class="mb-4">
                <label for="Task Desc" class="form-label"
                  >Task Description:</label
                >
                <textarea
                  type="group"
                  placeholder="Add Task description"
                  class="form-control rounded-0 textarea-border"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  v-model="TaskDesc"
                ></textarea>
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">For User:</label>
                <select
                  class="form-control textarea-border sel"
                  id="selectoption"
                  v-model="ForUser"
                >
                  <option v-for="list in colums" :key="list.id">
                    {{ list.username }}
                  </option>
                </select>
              </div>
              <div class="mb-4 d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input d-flex"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="No Deadline"
                    v-model="DeadlineData"
                    @click="changedeadline"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    No Deadline
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input d-flex"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    v-model="DeadlineData"
                    value="Deadline"
                  />
                  <label
                    class="form-check-label d-flex"
                    for="flexRadioDefault1"
                  >
                    Deadline
                  </label>
                </div>
              </div>
              <div class="mb-4 py-4 my-4" v-if="DeadlineData === 'Deadline'">
                <label for="date" class="form-label">Deadline:</label>

                <input type="date" v-model="DateInput" class="w-100" />
              </div>
              <template v-if="!exists">
                <button
                  type="button"
                  class="btn btn btn-success w-50 mx-auto my-4 rounded"
                  @click="CreateTask"
                >
                  <i class="fa-solid fa-check"></i>
                  Create
                </button>
              </template>
              <template v-if="exists">
                <button
                  type="button"
                  class="btn btn btn-success w-50 mx-auto my-4 rounded"
                  disabled
                >
                  <i class="fa-solid fa-check"></i>
                  Create
                </button>
              </template>
            </form>
          </div>
        </div>
      </td>
    </div>
  </div>
</template>

<script>
import { Inbox, Groups, Users, Tasks } from "@/services";

export default {
  name: "ModeratorList",
  data() {
    return {
      UserList: [],
      rows: [],
      colums: [],
      TaskName: "",
      TaskDesc: "",
      ForUser: "",
      DeadlineData: "",
      DateInput: "",
      exists: false,
      TaskList: [],
      TaskRow: [],
      TaskColums: [],
    };
  },
  mounted() {
    this.GetUsersInList();
    this.GetTaskList();
  },
  methods: {
    CheckTaskName() {
      for (let i of this.TaskList) {
        for (let tasks of i.tasks) {
          if (this.TaskName === tasks.taskname) {
            this.exists = true;

            break;
          }
          if (this.TaskName !== tasks.taskname) {
            this.exists = false;
          }
        }
      }
    },
    async CreateTask() {
      let pickoption = JSON.parse(localStorage.getItem("pickoption"));

      if (
        this.TaskName === "" ||
        this.TaskDesc === "" ||
        this.ForUser === "" ||
        this.DeadlineData === ""
      ) {
        alert("fields cannot be empty");
      } else {
        let TaskData = {
          taskname: this.TaskName,
          taskDesc: this.TaskDesc,
          ForUser: this.ForUser,
          DeadlineData: this.DeadlineData,
          DateInput: this.DateInput,
        };
        if (this.DateInput === "" && this.DeadlineData === "Deadline") {
          alert("fields cannot be empty");
        } else {
          await Tasks.CreateTask({ params: { TaskData, pickoption } });
          setTimeout(() => {
            this.TaskName = "";
            this.TaskDesc = "";
            this.ForUser = "";
            this.DeadlineData == "";
            this.DateInput = "";
          }, 1000);
        }
      }
    },
    async GetTaskList() {
      let pickoption = JSON.parse(localStorage.getItem("pickoption"));
      this.TaskList = await Tasks.GetTaskList({ params: { pickoption } });
      this.TaskList.forEach((element) => {
        this.TaskRow.push(element.tasks);
      });
      this.TaskRow.forEach((element) => {
        element.forEach((el) => {
          this.TaskColums.push(el);
        });
      });
    },
    async GetUsersInList() {
      let pickoption = JSON.parse(localStorage.getItem("pickoption"));
      this.UserList = await Users.GetUsers({ params: { pickoption } });
      this.UserList.forEach((element) => {
        this.rows.push(element.users);
      });
      this.rows.forEach((element) => {
        element.forEach((el) => {
          this.colums.push(el);
        });
      });
    },

    changedeadline() {
      this.DateInput = "";
    },
  },
};
</script>

<style></style>
