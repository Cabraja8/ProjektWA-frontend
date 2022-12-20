<template>
  <div class="profile">
    <div class="container-fluid">
      <div class="mt-5 py-4 mb-4">
        <h2>Your profile</h2>
        <div class="border-top border-secondary w-50 mx-auto my-3"></div>
        <div class="container my-4 mt-5">
          <div class="row">
            <div
              class="py-4 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center"
            >
              <div class="card card-size">
                <img
                  class="card-img-top"
                  src="@/assets/default_test.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div class="card-text">
                    <h5 class="h5">{{ user.username }}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-4 col-lg-6 col-md-6 col-sm-6 bord">
              <div class="table-responsive">
                <table
                  class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover bg-light shadowbox mx-auto"
                >
                  <thead class="thead-darkbg">
                    <tr>
                      <th>Group Name:</th>
                      <th>Company Name</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>r</td>
                      <td>b</td>
                      <td>button</td>
                    </tr>
                    <tr>
                      <td>r</td>
                      <td>b</td>
                      <td>button</td>
                    </tr>
                    <tr>
                      <td>r</td>
                      <td>b</td>
                      <td>button</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="table-responsive">
                <table
                  class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover bg-light shadowbox mx-auto"
                >
                  <thead class="thead-darkbg">
                    <tr>
                      <th>Group Name:</th>
                      <th>Company Name</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>r</td>
                      <td>b</td>
                      <td>button</td>
                    </tr>
                    <tr>
                      <td>r</td>
                      <td>b</td>
                      <td>button</td>
                    </tr>
                    <tr>
                      <td>r</td>
                      <td>b</td>
                      <td>button</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Service, Auth } from "@/services";
export default {
  name: "profile",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
};
</script>

<style></style>
