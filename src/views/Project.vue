<template>
  <div class="Project">
    <div
      class="row w-100 align items-center justify-content form-container formcon"
    >
      <div class="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow pd-4 w-80-bord">
        <table class="table table-border">
          <thead>
            <tr></tr>
          </thead>
          <tbody v-for="list in colums" :key="list.id">
            <tr>
              <td class="th-bg">Project Description:</td>
              <td class="td-bg">
                <div v-if="!editDesc">
                  {{ list.description }}
                  <button
                    type="button rightbtn "
                    @click="EditDescription"
                    class="btn btn-sm btn-light"
                  >
                    <i class="fa-solid fa-pen"></i>
                  </button>
                </div>
                <div v-if="editDesc">
                  <div class="form-group">
                    <textarea
                      type="group"
                      placeholder="Add a Project Description"
                      class="form-control rounded-0 textarea-border"
                      id="exampleFormControlTextarea2"
                      rows="3"
                      v-model="Description"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <button
                      type="button rightbtn "
                      class="btn btn-sm btn-success"
                      @click="EditProjectDescription(list.description)"
                    >
                      <i class="fa-solid fa-check"></i>
                    </button>
                    <button
                      type="button rightbtn "
                      class="btn btn-sm btn-danger"
                      @click="CancelEditDescription"
                    >
                      <i class="fa-solid fa-x"></i>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="th-bg">Project Information:</td>
              <td class="td-bg">
                <div v-if="!editInfo">
                  {{ list.information }}
                  <button
                    type="button rightbtn "
                    @click="EditInformation"
                    class="btn btn-sm btn-light"
                  >
                    <i class="fa-solid fa-pen"></i>
                  </button>
                </div>
                <div v-if="editInfo">
                  <div class="form-group">
                    <textarea
                      type="group"
                      placeholder="Add Information about your project"
                      class="form-control rounded-0 textarea-border"
                      id="exampleFormControlTextarea2"
                      rows="3"
                      v-model="Information"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <button
                      type="button rightbtn "
                      class="btn btn-sm btn-success"
                      @click="EditProjectInformation(list.information)"
                    >
                      <i class="fa-solid fa-check"></i>
                    </button>
                    <button
                      type="button rightbtn "
                      class="btn btn-sm btn-danger"
                      @click="CancelEditInformation"
                    >
                      <i class="fa-solid fa-x"></i>
                    </button>
                  </div>
                </div>
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
  name: "Project",
  data() {
    return {
      Description: "",
      Information: "",
      editDesc: false,
      editInfo: false,
      Project: [],
      colums: [],
      rows: [],
      proj: [],
    };
  },
  methods: {
    EditDescription() {
      this.editDesc = true;
    },
    CancelEditDescription() {
      this.Description = "";
      this.editDesc = false;
    },
    EditInformation() {
      this.editInfo = true;
    },
    CancelEditInformation() {
      this.Information = "";
      this.editInfo = false;
    },
    async EditProjectDescription(desc) {
      let option = JSON.parse(localStorage.getItem("pick"));
      let description = this.Description;
      if (description === "") {
        description = desc;
      }
      await Groups.EditProjectDescription({ params: { option, description } });
      this.CancelEditDescription();
      this.CancelEditInformation();
      this.colums = [];
      this.rows = [];
      this.Project = [];
      this.GetProject();
    },
    async EditProjectInformation(information) {
      let option = JSON.parse(localStorage.getItem("pick"));
      let info = this.Information;
      if (info === "") {
        info = information;
      }
      await Groups.EditProjectInformation({ params: { option, info } });
      this.CancelEditDescription();
      this.CancelEditInformation();
      this.colums = [];
      this.rows = [];
      this.Project = [];
      this.GetProject();
    },

    async GetProject() {
      let option = JSON.parse(localStorage.getItem("pick"));
      this.Project = await Groups.GetProject({ params: { option } });
      this.Project.forEach((element) => {
        this.rows.push(element.project);
      });
      this.rows.forEach((element) => {
        this.colums.push(element);
      });
    },
  },
  mounted() {
    this.GetProject();
  },
};
</script>

<style></style>
