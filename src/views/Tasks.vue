<template>
  <div class="Tasks">
    <div class="container d-flex justify-content-center py-4 my-4">
      <div class="btn py-4 my-4" v-if="!CreateClick">
        <button type="button " @click="CreateClickTask" class="btn-gray">
          <i class="fa-solid fa-plus"></i> Create a Task
        </button>
      </div>
      <div
        class="col-sm-8 col-md-6 col-lg-4 bg-light rounded p-4 shadow blck"
        v-if="CreateClick"
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
            />
          </div>
          <div class="mb-4">
            <label for="Task Desc" class="form-label">Task Description:</label>
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
              <option>All</option>
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
                value="Deadline"
                v-model="DeadlineData"
              />
              <label class="form-check-label d-flex" for="flexRadioDefault1">
                Deadline
              </label>
            </div>
          </div>
          <div class="mb-4 py-4 my-4" v-if="DeadlineData === 'Deadline'">
            <label for="password" class="form-label">Deadline:</label>

            <input type="date" v-model="DateInput" class="w-100" />
          </div>
          <button
            type="button"
            class="btn btn-sm btn-success w-25 mx-auto my-4 rounded"
            @click="CreateTask"
          >
            <i class="fa-solid fa-check"></i>
            Create
          </button>
          <button
            type="button"
            class="btn btn-sm btn-danger w-25 mx-auto my-4 rounded"
            @click="CancelCreateTask"
          >
            <i class="fa-solid fa-x"></i>
            Cancel
          </button>
        </form>
      </div>
    </div>
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Task List</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
    </div>
    <div class="container" v-if="TaskColums.length === 0">
      <h2>Currently there're no created Tasks</h2>
    </div>
    <div class="container" v-if="TaskColums.length !== 0">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto bg-light shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th>pic</th>
              <th>Task Name:</th>
              <th>Task Description</th>
              <th>For User</th>
              <th>Deadline</th>

              <th></th>
            </tr>
          </thead>
          <tbody v-for="list in TaskColums" :key="list.id">
            <tr>
              <td></td>
              <td>{{ list.taskname }}</td>
              <td>{{ list.taskDesc }}</td>
              <td>{{ list.ForUser }}</td>
              <td>{{ list.DeadLine }}</td>
              <td>
                <button
                  type="button rightbtn "
                  @click="DeleteTask(list.taskname)"
                  class="btn btn-sm btn-danger"
                >
                  <i class="fa-solid fa-x"></i> Delete
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
import { Users, Tasks } from "@/services";

export default {
  name: "Tasks",
  data() {
    return {
      CreateClick: false,
      UserList: [],
      rows: [],
      colums: [],
      TaskName: "",
      TaskDesc: "",
      ForUser: "",
      DeadlineData: "",
      DateInput: "",
      TaskList: [],
      TaskRow: [],
      TaskColums: [],
    };
  },

  methods: {
    async CreateTask() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));

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

          this.TaskList = [];
          this.TaskRow = [];
          this.TaskColums = [];
          this.CancelCreateTask();
          this.GetTaskList();
        }
      }
    },
    async DeleteTask(taskname) {
      let pickoption = JSON.parse(localStorage.getItem("pick"));

      await Tasks.DeleteTask({ params: { taskname, pickoption } });
      this.TaskList = [];
      this.TaskRow = [];
      this.TaskColums = [];

      this.GetTaskList();
    },

    CreateClickTask() {
      this.CreateClick = true;
    },
    CancelCreateTask() {
      this.CreateClick = false;
      this.TaskName = "";
      this.TaskDesc = "";
      this.ForUser = "";
      this.DeadlineData = "";
      this.DateInput = "";
    },
    async GetTaskList() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
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
    async GetUserList() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
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
  },
  mounted() {
    this.GetUserList();
    this.GetTaskList();
  },
};
</script>

<style></style>
