<template>
  <div class="Settings">
    <div
      class="row w-100 align items-center justify-content form-container formcon"
    >
      <div
        class="container container-blackbor row w-100 align items-center justify-content form-container formcon"
      ></div>
      <div class="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow pd-4 w-80-bord">
        <table class="table table-border">
          <thead>
            <tr></tr>
          </thead>
          <tbody v-for="list in Group" :key="list.groupname">
            <tr>
              <td class="th-bg">Grop Name:</td>
              <td class="td-bg" v-if="!editGroupName">
                {{ list.groupname }}
              </td>
            </tr>
            <tr>
              <td class="th-bg">Company Name:</td>
              <td class="td-bg" v-if="!editCompanyName">
                {{ list.companyname }}
                <button
                  type="button rightbtn "
                  class="btn btn-sm btn-light"
                  @click.once="ChangeCompanyName"
                >
                  <i class="fa-solid fa-pen"></i>
                </button>
              </td>
              <td
                class="td-bg d-flex justify-content-center"
                v-if="editCompanyName"
              >
                <input
                  v-model="CompanyName"
                  type="group"
                  class="form-control w-50"
                  :placeholder="list.companyname"
                />
                <button
                  type="button rightbtn "
                  @click="AcceptChangeCompanyName(list.companyname)"
                  class="btn btn-sm btn-success"
                >
                  <i class="fa-solid fa-check"></i>
                </button>
                <button
                  type="button rightbtn "
                  @click="CancelChangeCompanyName"
                  class="btn btn-sm btn-danger"
                >
                  <i class="fa-solid fa-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="th-bg">Group Join Type:</td>
              <td class="td-bg" v-if="!editGroupJoinType">
                {{ list.groupjoin }}
                <button
                  @click="ChangeInviteType"
                  type="button rightbtn "
                  class="btn btn-sm btn-light"
                >
                  <i class="fa-solid fa-pen"></i>
                </button>
              </td>

              <td
                class="td-bg d-flex justify-content-center"
                v-if="editGroupJoinType"
              >
                <select
                  class="form-control w-50 sel"
                  id="selectoption"
                  type="group"
                  :placeholder="list.groupjoin"
                  v-model="GroupJoinType"
                >
                  <option
                    v-if="list.groupjoin !== 'Free Join'"
                    value="Free Join"
                  >
                    Free Join
                  </option>
                  <option
                    v-if="list.groupjoin !== 'Invite Only'"
                    value="Invite Only"
                  >
                    Invite Only
                  </option>
                </select>
                <button
                  type="button rightbtn "
                  class="btn btn-sm btn-success"
                  @click="AcceptChangeGroupJoin(list.groupjoin)"
                >
                  <i class="fa-solid fa-check"></i>
                </button>
                <button
                  type="button rightbtn "
                  @click="CancelChangeGroupJoin"
                  class="btn btn-sm btn-danger"
                >
                  <i class="fa-solid fa-x"></i>
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
import { Groups } from "@/services";
export default {
  name: "Settings",
  data() {
    return {
      CompanyName: "",
      GroupJoinType: "",
      Group: [],
      groupmap: [],
      editGroupName: false,
      editCompanyName: false,
      editGroupJoinType: false,
    };
  },
  methods: {
    async GetGroupInfo() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      this.Group = await Groups.GetGroupInfo({ params: { pickoption } });
    },
    ChangeCompanyName() {
      this.editCompanyName = true;
    },
    ChangeInviteType() {
      this.editGroupJoinType = true;
    },
    CancelChangeCompanyName() {
      this.editCompanyName = false;
      this.CompanyName = "";
    },
    CancelChangeGroupJoin() {
      this.editGroupJoinType = false;
      this.GroupJoinType = "";
    },

    async AcceptChangeCompanyName(companyname) {
      console.log(companyname);
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      let company = this.CompanyName;
      if (company === "") {
        company = companyname;
      }
      await Groups.ChangeGroupCompanyName({ params: { pickoption, company } });
      this.CancelChangeCompanyName();
      this.GetGroupInfo();
    },
    async AcceptChangeGroupJoin(groupjointype) {
      console.log(groupjointype);
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      let groupjoin = this.GroupJoinType;
      if (groupjoin === "") {
        groupjoin = groupjointype;
      }
      await Groups.ChangeGroupJoinType({ params: { pickoption, groupjoin } });
      this.CancelChangeGroupJoin();
      this.GetGroupInfo();
    },
  },
  mounted() {
    this.GetGroupInfo();
  },
};
</script>

<style></style>
