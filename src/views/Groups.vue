<template>
  <div class="groups">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Search Groups</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
      <div
        class="container-fluid my-4 py-4 col-lg-12 col-sm-3 col-md-12 d-flex aligns-items-center justify-content-center"
      >
        <input
          type="text"
          placeholder="Search Groups"
          class="form-control w-50"
          id="search"
        />
        <button type="button rightbtn " class="btn btn-secondary">
          <i class="fa-solid fa-search"></i>
        </button>
      </div>
    </div>
    <div class="container md-5 my-4 py-4">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th scope="col">Group Names</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
            </tr>
            <tr>
              <th scope="row">2</th>
            </tr>
            <tr>
              <th scope="row">3</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Create your own group</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
    </div>
    <div class="container mt-5 my-4 py-4">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th scope="col ">
                <div class="btn float-right" v-if="!clicked">
                  <button
                    @click="ClickCreate"
                    type="button rightbtn "
                    class="btn-secondary btn-bord"
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
                <p>Click on the Create Group button</p>
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
                <div
                  class="container-fluid py-4 my-4 col-lg-12 col-sm-6 col-md-6"
                >
                  <p class="d-flex justify-content-between text-center">
                    Your group name:
                  </p>
                  <input
                    type="textforgroup"
                    placeholder="Group Name"
                    class="form-control w-50"
                    id="search"
                  />
                </div>
                <div
                  class="container-fluid py-4 my-4 col-lg-12 col-sm-6 col-md-6"
                >
                  <p class="d-flex justify-content-between text-center">
                    Your company name:
                  </p>
                  <input
                    type="textforcompany"
                    placeholder="Company name"
                    class="form-control w-50"
                    id="search"
                  />
                </div>
                <div
                  class="container-fluid py-4 my-4 col-lg-12 col-sm-6 col-md-6"
                >
                  <p class="d-flex justify-content-between">Join Group type:</p>
                  <div class="form-check">
                    <div class="form-check d-flex justify-content-between">
                      <input
                        class="form-check-input d-flex justify-content-between"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Invite Only
                      </label>
                    </div>
                    <div class="form-check d-flex justify-content-between">
                      <input
                        class="form-check-input d-flex justify-content-between"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label d-flex justify-content-between"
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
export default {
  name: "Groups",
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    ClickCreate() {
      this.clicked = true;
    },
    CancelCreateGroup() {
      this.clicked = false;
    },
    CreateGroup() {},
  },
};
</script>

<style></style>
