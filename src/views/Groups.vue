<template>
  <div class="groups">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Search Groups</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
      <div
        class="container-fluid my-4 py-4 col-lg-12 col-sm-6 col-md-12 d-flex aligns-items-center justify-content-center"
      >
        <input
          type="group"
          placeholder="Search Groups"
          class="form-control w-40"
          id="search"
          v-model="searchname"
        />
        <button type="button rightbtn " class="btn bg-darkbg">
          <i class="fa-solid fa-search"></i>
        </button>
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
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Create your own group</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
    </div>
    <div class="container mt-5 my-4 py-4 my-4 w-80">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto table-darkbg shadowbox mx-auto"
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
                  <button
                    @click="CreateGroup"
                    type="button rightbtn "
                    class="btn btn-success btn-bord"
                  >
                    <i class="fa-solid fa-check"></i> Create
                  </button>

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
            <tr v-if="!clicked">
              <th scope="row">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>Click on the Create Group button</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </th>
            </tr>

            <tr v-if="clicked">
              <th scope="row">
                <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                  <p class="d-flex text-center">Your group name:</p>
                  <input
                    type="textforgroup"
                    placeholder="Group Name"
                    class="form-control"
                    id="search"
                    v-model="groupname"
                  />
                </div>
                <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                  <p class="d-flex text-center">Your company name:</p>
                  <input
                    type="textforcompany"
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
      GroupList: [],
    };
  },
  mounted() {
    this.GetGroups();
  },
  methods: {
    async GetGroups() {
      this.GroupList = [];

      await Service.get("/groups").then((response) => {
        let data = response.data;
        console.log("GETGROUPS", data);
        this.GroupList = data.map((group) => {
          return {
            username: group.username,
            groupname: group.groupname,
            companyname: group.companyname,
            groupjoin: group.groupjoin,
          };
        });
      });
    },

    ClickCreate() {
      this.clicked = true;
    },
    CancelCreateGroup() {
      this.clicked = false;
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
          username: user.username,
          groupname: this.groupname,
          companyname: this.companyname,
          groupjoin: this.groupjoin,
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

<style></style>
