<template>
  <div class="Tasks">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Task List</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
    </div>
    <div class="container"></div>
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Create a task</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
    </div>
    <div class="container mt-5 my-4 py-4 my-4 w-80">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto table bg-light shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th scope="col table-darkbg py-4 my-4">
                <div class="btn float-right" v-if="!CreateClick">
                  <button
                    type="button rightbtn "
                    @click="CreateClickTask"
                    class="btn-gray btn-bord"
                  >
                    <i class="fa-solid fa-plus"></i> Create a Task
                  </button>
                </div>
                <div class="btn float-right" v-if="CreateClick"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="tr-height" v-if="!CreateClick">
              <th class="cent">Click on the Create a Task button</th>
            </tr>
            <tr>
              <th scope="row">
                <div v-if="CreateClick">
                  <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                    <p class="d-flex text-center">Task name:</p>
                    <input
                      type="group"
                      placeholder="Task Name"
                      class="form-control"
                      id="search"
                      v-model="TaskName"
                    />
                  </div>
                  <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                    <p class="d-flex text-center">Task description:</p>
                    <textarea
                      type="group"
                      placeholder="Add Task description"
                      class="form-control rounded-0 textarea-border"
                      id="exampleFormControlTextarea2"
                      rows="3"
                      v-model="TaskDesc"
                    ></textarea>
                  </div>
                  <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                    <p class="d-flex text-center">For User:</p>
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
                  <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                    <p class="d-flex text-center">Add Deadline:</p>
                    <div class="form-check">
                      <div class="form-check d-flex">
                        <input
                          class="form-check-input d-flex"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          value="No Deadline"
                          v-model="DeadlineData"
                        />
                        <label
                          class="form-check-label d-flex"
                          for="flexRadioDefault2"
                        >
                          No Deadline
                        </label>
                      </div>
                      <div class="form-check d-flex">
                        <input
                          class="form-check-input d-flex"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="Deadline"
                          v-model="DeadlineData"
                        />
                        <label
                          class="form-check-label d-flex"
                          for="flexRadioDefault1"
                        >
                          Deadline
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50"
                    v-if="DeadlineData === 'Deadline'"
                  >
                    <p class="d-flex text-center">Deadline:</p>
                    {{ this.Date }}
                    <input type="date" v-model="Date" class="w-100" />
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
          <thead class="thead-darkbg" v-if="CreateClick">
            <tr>
              <th scope="col table-darkbg py-4 my-4">
                <div class="btn float-right">
                  <button
                    type="button rightbtn "
                    class="btn btn-success btn-bord"
                  >
                    <i class="fa-solid fa-check"></i> Create
                  </button>

                  <button
                    type="button rightbtn "
                    class="btn btn-danger btn-bord"
                    @click="CancelCreateTask"
                  >
                    <i class="fa-solid fa-x"></i> Cancel
                  </button>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Users } from "@/services";

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
      Date: "",
    };
  },
  methods: {
    CreateClickTask() {
      this.CreateClick = true;
    },
    CancelCreateTask() {
      this.CreateClick = false;
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
  },
};
</script>

<style></style>
