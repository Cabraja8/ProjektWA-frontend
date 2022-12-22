<template>
  <div class="Project-Info">
    <div class="container w-90">
      <div class="container">
        <div class="table-responsive">
          <div class="col-sm-12 col-md-12 col-lg-12 rounded p-4 shadow pd-4">
            <table class="table table-border">
              <thead>
                <tr></tr>
              </thead>
              <tbody v-for="list in colums" :key="list.id">
                <tr>
                  <td class="th-bg">Project Description:</td>
                  <td class="td-bg">
                    {{ list.description }}
                  </td>
                </tr>
                <tr>
                  <td class="th-bg">Project Information:</td>
                  <td class="td-bg">
                    {{ list.information }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Inbox, Groups } from "@/services";

export default {
  name: "ProjectInfo",
  data() {
    return {
      Group: [],
      Project: [],
      colums: [],
      rows: [],
    };
  },
  mounted() {
    this.GetProjectInfo();
    console.log(this.colums);
    console.log(this.rows);
  },
  methods: {
    async GetProjectInfo() {
      let option = JSON.parse(localStorage.getItem("pickoption"));
      this.Project = await Groups.GetProject({ params: { option } });
      this.Project.forEach((element) => {
        this.rows.push(element.project);
      });
      this.rows.forEach((element) => {
        this.colums.push(element);
      });
    },
  },
};
</script>

<style></style>
