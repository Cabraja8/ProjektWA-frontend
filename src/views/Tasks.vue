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
          class="table m-0 pd-4 py-4 md-4 mx-auto table bg-light table-hover shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th scope="col table-darkbg py-4 my-4">
                <div class="btn float-right">
                  <button type="button rightbtn " class="btn-gray btn-bord">
                    <i class="fa-solid fa-plus"></i> Create Group
                  </button>
                </div>
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
                  >
                    <i class="fa-solid fa-x"></i> Cancel
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                  <p class="d-flex text-center">Your group name:</p>
                  <input
                    type="group"
                    placeholder="Group Name"
                    class="form-control"
                    id="search"
                  />
                </div>
                <div class="container py-4 col-lg-12 col-sm-6 col-md-6 w-50">
                  <p class="d-flex text-center">Your company name:</p>
                  <input
                    type="group"
                    placeholder="Company name"
                    class="form-control"
                    id="search"
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
export default {
  name: "Tasks",
};
</script>

<style></style>
