<template>
  <div class="groups">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Search Groups</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
      <div
        class="container-fluid my-4 py-4 col-lg-12 col-sm-12 col-md-12 d-flex aligns-items-center justify-content-center"
      >
        <input
          type="group"
          placeholder="Search Groups"
          class="form-control w-40"
          id="search"
          v-model="searchname"
          @input="GetGroups"
        />
      </div>
    </div>

    <div class="container md-5 my-4 py-4 w-80">
      <listofGroups
        class="col"
        v-for="list in GroupList"
        :key="list.groupname"
        :listgroups="list"
      />
    </div>
    <div class="container my-4 py-4 mt-5"></div>
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Create your own group</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
    </div>
    <div class="container mt-5 my-4 py-4 my-4 w-80">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto table bg-light table-hover shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th scope="col table-darkbg py-4 my-4">
                <div class="btn float-right" v-if="!clicked">
                  <button
                    @click="ClickCreate"
                    type="button rightbtn "
                    class="btn-gray btn-bord"
                  >
                    <i class="fa-solid fa-plus"></i> Create Group
                  </button>
                </div>
                <div class="btn float-right" v-if="clicked">
                  <template v-if="!buttondisable && !exists">
                    <button
                      @click="CreateGroup"
                      type="button rightbtn "
                      class="btn btn-success btn-bord"
                    >
                      <i class="fa-solid fa-check"></i> Create
                    </button>
                  </template>

                  <template v-if="buttondisable && !exists">
                    <button
                      @click="CreateGroup"
                      type="button rightbtn "
                      class="btn btn-success btn-bord"
                      disabled
                    >
                      <i class="fa-solid fa-check"></i> Create
                    </button>
                  </template>
                  <template v-if="exists && !buttondisable">
                    <button
                      @click="CreateGroup"
                      type="button rightbtn "
                      class="btn btn-success btn-bord"
                      disabled
                    >
                      <i class="fa-solid fa-check"></i> Create
                    </button>
                  </template>
                  <button
                    @click="CancelCreateGroup"
                    type="button rightbtn "
                    class="btn btn-danger btn-bord"
                  >
                    <i class="fa-solid fa-x"></i> Cancel
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!clicked" class="tr-height">
              <th class="cent">Click on the Create Group button</th>
            </tr>

            <tr v-if="clicked">
              <th scope="row">
                <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                  <p class="d-flex text-center">Your group name:</p>
                  <input
                    type="group"
                    placeholder="Group Name"
                    class="form-control"
                    id="groupname"
                    v-model="groupname"
                    @input="CheckInGroup"
                  />
                  <p v-if="buttondisable" class="rederror">
                    This Group Name is taken!
                  </p>
                  <p v-if="exists" class="rederror">
                    You've already created this group
                  </p>
                </div>
                <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                  <p class="d-flex text-center">Your company name:</p>
                  <input
                    type="group"
                    placeholder="Company name"
                    class="form-control"
                    id="search"
                    v-model="companyname"
                  />
                </div>
                <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                  <p class="d-flex text-center">Join Group type:</p>
                  <div class="form-check">
                    <div class="form-check d-flex">
                      <input
                        class="form-check-input d-flex"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Invite Only"
                        v-model="groupjoin"
                      />
                      <label
                        class="form-check-label d-flex"
                        for="flexRadioDefault2"
                      >
                        Invite Only
                      </label>
                    </div>
                    <div class="form-check d-flex">
                      <input
                        class="form-check-input d-flex"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Free Join"
                        v-model="groupjoin"
                      />
                      <label
                        class="form-check-label d-flex"
                        for="flexRadioDefault1"
                      >
                        Free Join
                      </label>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth, Service, Groups } from "@/services";
import ListofGroups from "@/components/ListofGroups.vue";
import store from "@/store";
import { getgroups } from "process";
export default {
  components: { ListofGroups },
  name: "Groups",
  data() {
    return {
      clicked: false,
      searchname: "",
      groupname: "",
      companyname: "",
      groupjoin: "",
      ExistGroupList: [],
      GroupList: [],
      grlist: [],
      buttondisable: false,
      exists: false,
    };
  },
  mounted() {
    this.GetGroups();
    this.GetAllGroups();
  },
  methods: {
    CheckInGroup() {
      for (let i of this.ExistGroupList) {
        if (this.groupname === i.groupname) {
          this.exists = true;
          break;
        }
        if (this.groupname !== i.groupname) {
          this.exists = false;
        }
      }

      for (let i of this.GroupList) {
        if (this.groupname === i.groupname) {
          this.buttondisable = true;
          break;
        }
        if (this.groupname !== i.groupname) {
          this.buttondisable = false;
        }
      }
    },
    async GetAllGroups() {
      this.ExistGroupList = [];
      let user = JSON.parse(localStorage.getItem("user"));

      this.ExistGroupList = await Groups.GetAllGroups({ params: { user } });
    },
    async GetGroups() {
      this.GroupList = [];
      let search = this.searchname;
      let User = JSON.parse(localStorage.getItem("user"));
      let user = User.username;
      this.GroupList = await Groups.GetGroups({
        params: { user, search },
      });
    },

    ClickCreate() {
      this.clicked = true;
    },
    CancelCreateGroup() {
      this.groupname = "";
      this.companyname = "";
      this.groupjoin = "";
      this.buttondisable = false;
      this.clicked = false;
      this.exists = false;
    },
    async CreateGroup() {
      if (
        this.groupname === "" ||
        this.companyname === "" ||
        this.groupjoin === ""
      ) {
        alert("Input fields cannot be empty");
      } else {
        let user = JSON.parse(localStorage.getItem("user"));
        let group = {
          admin: user.username,
          groupname: this.groupname,
          companyname: this.companyname,
          groupjoin: this.groupjoin,
          project: {
            description: "",
            information: "",
          },
          completedTasks: [],
          tasks: [],
          inbox: [],
          users: [],
        };
        try {
          await Groups.CreateGroup(group);
          setTimeout(() => {
            this.$router.push({ name: "ControlPanel" });
          }, 1000);
        } catch (e) {
          alert(e);
        }
      }
    },
  },
};
</script>

<style>
.invalid {
  border-color: red !important;
}
</style>
